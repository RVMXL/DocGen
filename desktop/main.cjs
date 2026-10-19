// DocGen — Electron-обёртка: внутри запускается встроенный Next.js-сервер
// (standalone-сборка в app/, см. scripts/prepare-desktop.mjs) со своей SQLite-БД.
// Ничего не отправляется наружу; окно открывает http://127.0.0.1:<свободный порт>.
'use strict';

const { app, BrowserWindow, Menu, shell, session, dialog, net } = require('electron');
const { spawn } = require('child_process');
const path = require('path');
const fs = require('fs');
const http = require('http');

let mainWindow = null;
let serverProc = null;
let serverPort = 0;
let quitting = false;

const APP_DIR = path.join(__dirname, 'app');          // содержит server.js, .next/, public/
const SERVER_JS = path.join(APP_DIR, 'server.js');
const DB_TEMPLATE = path.join(process.resourcesPath || __dirname, 'db-template', 'docgen.db');

// ── порт ─────────────────────────────────────────────────────────────────────
function getFreePort() {
  return new Promise((resolve, reject) => {
    const srv = require('net').createServer();
    srv.unref();
    srv.on('error', reject);
    srv.listen(0, '127.0.0.1', () => {
      const { port } = srv.address();
      srv.close(() => resolve(port));
    });
  });
}

// ── база данных: первый запуск → копия каталога из ресурсов ──────────────────
function ensureDatabase() {
  try {
    const dbPath = path.join(app.getPath('userData'), 'docgen.db');
    if (!fs.existsSync(dbPath)) {
      fs.mkdirSync(path.dirname(dbPath), { recursive: true });
      if (fs.existsSync(DB_TEMPLATE)) {
        fs.copyFileSync(DB_TEMPLATE, dbPath);
      }
    }
    return dbPath;
  } catch (e) {
    console.error('ensureDatabase failed:', e);
    return null;
  }
}

// ── запуск встроенного сервера через Node-режим Electron ─────────────────────
function startServer(dbPath) {
  return new Promise((resolve, reject) => {
    const env = {
      ...process.env,
      ELECTRON_RUN_AS_NODE: '1',
      NODE_ENV: 'production',
      ELECTRON_NO_ATTACH_CONSOLE: '1',
      PORT: String(serverPort),
      HOSTNAME: '127.0.0.1',
    };
    if (dbPath) {
      env.DATABASE_URL = 'file:' + dbPath.split(path.sep).join('/');
    }
    serverProc = spawn(process.execPath, [SERVER_JS], {
      cwd: APP_DIR,           // чтобы public/fonts резолвились от корня сборки
      env,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
    });
    const log = (chunk) => {
      try { fs.appendFileSync(path.join(app.getPath('userData'), 'docgen.log'), chunk); } catch {}
    };
    serverProc.stdout.on('data', log);
    serverProc.stderr.on('data', log);
    serverProc.on('exit', (code) => {
      serverProc = null;
      if (!quitting) {
        dialog.showErrorBox(
          'DocGen',
          'Встроенный сервер неожиданно завершился (код ' + code + ').\n' +
          'Лог: ' + path.join(app.getPath('userData'), 'docgen.log')
        );
        app.quit();
      }
    });
    // ждём готовности HTTP
    const started = Date.now();
    const poll = () => {
      const req = http.get({ host: '127.0.0.1', port: serverPort, path: '/', timeout: 1500 }, (res) => {
        res.resume();
        resolve();
      });
      req.on('error', () => {
        if (Date.now() - started > 45000) reject(new Error('server did not start in 45s'));
        else setTimeout(poll, 350);
      });
      req.on('timeout', () => req.destroy(new Error('timeout')));
    };
    poll();
  });
}

function stopServer() {
  if (serverProc) {
    try { serverProc.kill(); } catch {}
    serverProc = null;
  }
}

// ── окно ─────────────────────────────────────────────────────────────────────
function createWindow() {
  mainWindow = new BrowserWindow({
    width: 1280,
    height: 880,
    minWidth: 960,
    minHeight: 640,
    title: 'DocGen',
    show: false,
    autoHideMenuBar: true,
    backgroundColor: '#f4f6fb',
    webPreferences: {
      preload: path.join(__dirname, 'preload.cjs'),
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
    },
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.loadURL('http://127.0.0.1:' + serverPort + '/');

  // ссылки на госпорталы и т.п. — во внешний браузер
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url) && !url.startsWith('http://127.0.0.1')) {
      shell.openExternal(url);
      return { action: 'deny' };
    }
    return { action: 'allow' };
  });
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('http://127.0.0.1')) {
      event.preventDefault();
      if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    }
  });

  // .docx/.pdf, запрошенные напрямую, сохраняем в «Загрузки»
  session.defaultSession.on('will-download', (event, item) => {
    const downloads = app.getPath('downloads');
    item.setSavePath(path.join(downloads, item.getFilename()));
  });

  mainWindow.on('closed', () => { mainWindow = null; });
}

// macOS: Edit-меню обязателен для Cmd+C/V в полях формы
function setupMenu() {
  if (process.platform === 'darwin') {
    const template = [
      { role: 'appMenu' },
      { role: 'editMenu' },
      { role: 'viewMenu' },
      { role: 'windowMenu' },
    ];
    Menu.setApplicationMenu(Menu.buildFromTemplate(template));
  } else {
    Menu.setApplicationMenu(null);
  }
}

const gotLock = app.requestSingleInstanceLock();
if (!gotLock) {
  app.quit();
} else {
  app.on('second-instance', () => {
    if (mainWindow) {
      if (mainWindow.isMinimized()) mainWindow.restore();
      mainWindow.focus();
    }
  });

  app.whenReady().then(async () => {
    setupMenu();
    try {
      serverPort = await getFreePort();
      const dbPath = ensureDatabase();
      await startServer(dbPath);
      createWindow();
    } catch (e) {
      console.error(e);
      dialog.showErrorBox('DocGen', 'Не удалось запустить встроенный сервер:\n' + (e && e.message));
      app.quit();
    }
  });

  app.on('window-all-closed', () => {
    app.quit();
  });

  app.on('before-quit', () => {
    quitting = true;
    stopServer();
  });
}
