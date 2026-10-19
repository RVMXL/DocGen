// DocGen — Electron-обёртка: приложение полностью автономно.
// В app/ лежит статическая сборка Next.js (out/, см. tools/prepare-desktop.mjs);
// она отдаётся через кастомный протокол app://, документы (.docx/.pdf)
// генерируются прямо в окне (docx + pdf-lib) — встроенный сервер не нужен.
'use strict';

const { app, BrowserWindow, Menu, shell, session, protocol, net, dialog } = require('electron');
const path = require('path');
const fs = require('fs');

let mainWindow = null;

const APP_DIR = path.join(__dirname, 'app'); // статический сайт: index.html, _next/, fonts/…

// ── протокол app:// — нужен, чтобы fetch('/fonts/…') работал внутри окна ─────
protocol.registerSchemesAsPrivileged([
  { scheme: 'app', privileges: { standard: true, secure: true, supportFetchAPI: true, corsEnabled: true } },
]);

function registerAppProtocol() {
  protocol.handle('app', (request) => {
    const url = new URL(request.url);
    // app://bundle/index.html → APP_DIR/index.html
    let rel = decodeURIComponent(url.pathname).replace(/^\/+/, '');
    if (rel === '') rel = 'index.html';
    const file = path.normalize(path.join(APP_DIR, rel));
    if (!file.startsWith(APP_DIR)) {
      return new Response('Forbidden', { status: 403 });
    }
    if (!fs.existsSync(file)) {
      // SPA: неизвестные пути — на index.html
      return net.fetch('app://bundle/index.html');
    }
    return net.fetch('app://bundle/' + rel.split(path.sep).join('/'));
  });
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
      contextIsolation: true,
      nodeIntegration: false,
      sandbox: true,
      spellcheck: false,
    },
  });

  mainWindow.once('ready-to-show', () => mainWindow.show());
  mainWindow.loadURL('app://bundle/index.html');

  // ссылки на госпорталы и т.п. — во внешний браузер
  mainWindow.webContents.setWindowOpenHandler(({ url }) => {
    if (/^https?:\/\//i.test(url)) {
      shell.openExternal(url);
    }
    return { action: 'deny' };
  });
  mainWindow.webContents.on('will-navigate', (event, url) => {
    if (!url.startsWith('app://')) {
      event.preventDefault();
      if (/^https?:\/\//i.test(url)) shell.openExternal(url);
    }
  });

  // .docx/.pdf, запрошенные напрямую, сохраняем в «Загрузки»
  session.defaultSession.on('will-download', (event, item) => {
    item.setSavePath(path.join(app.getPath('downloads'), item.getFilename()));
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

  app.whenReady().then(() => {
    setupMenu();
    registerAppProtocol();
    if (!fs.existsSync(path.join(APP_DIR, 'index.html'))) {
      dialog.showErrorBox('DocGen', 'Файлы приложения не найдены (app/index.html). Сборка повреждена.');
      app.quit();
      return;
    }
    createWindow();
  });

  app.on('window-all-closed', () => {
    app.quit();
  });
}
