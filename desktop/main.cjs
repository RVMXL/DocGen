// DocGen — Electron-обёртка: приложение полностью автономно.
// В app/ лежит статическая сборка Next.js (out/, см. tools/prepare-desktop.mjs);
// она отдаётся через кастомный протокол app://, документы (.docx/.pdf)
// генерируются прямо в окне (docx + pdf-lib) — встроенный сервер не нужен.
'use strict';

const { app, BrowserWindow, Menu, shell, session, protocol, net, dialog } = require('electron');
const path = require('path');
const fs = require('fs');
const { pathToFileURL } = require('url');

let mainWindow = null;

// CI/автотесты: node desktop/main.cjs --smoke — создать окно, дождаться загрузки
// интерфейса, напечатать SMOKE:OK/SMOKE:FAIL и выйти. Ловит «не запускается»
// (пустой payload, рекурсия протокола, отказ loadURL) ДО выкладывания релиза.
const SMOKE = process.argv.includes('--smoke');
let lastSaveDir = null; // последняя папка, выбранная в диалоге сохранения

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
    let file = path.normalize(path.join(APP_DIR, rel));
    if (!file.startsWith(APP_DIR)) {
      return new Response('Forbidden', { status: 403 });
    }
    if (!fs.existsSync(file)) {
      // SPA: неизвестные пути — на index.html. Отдаём С ДИСКА: net.fetch('app://…')
      // внутри обработчика app:// вызывает сам себя рекурсивно (страница никогда
      // не грузится, окно не появляется — баг «Windows-версия не запускается»).
      file = path.join(APP_DIR, 'index.html');
    }
    return net.fetch(pathToFileURL(file).toString());
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

  mainWindow.once('ready-to-show', () => {
    if (SMOKE) console.log('SMOKE:ready-to-show');
    mainWindow.show();
  });
  // без catch отказ загрузки = невидимый процесс без окна («не запускается»)
  mainWindow.loadURL('app://bundle/index.html').catch((err) => {
    if (SMOKE) {
      console.error('SMOKE:FAIL loadURL: ' + (err?.message ?? err));
      app.exit(1);
      return;
    }
    dialog.showErrorBox('DocGen', 'Не удалось загрузить интерфейс приложения: ' + (err?.message ?? err));
    app.quit();
  });
  if (SMOKE) {
    mainWindow.webContents.on('did-finish-load', () => {
      // страница ДОГРУЗИЛАСЬ: главный экран отрисован, протокол и payload живы
      console.log('SMOKE:OK did-finish-load url=' + mainWindow.webContents.getURL());
      setTimeout(() => app.exit(0), 300); // дать рендереру отработать первый кадр
    });
    mainWindow.webContents.on('did-fail-load', (_ev, code, desc, url) => {
      console.error('SMOKE:FAIL did-fail-load ' + code + ' ' + desc + ' ' + url);
      app.exit(1);
    });
    setTimeout(() => {
      console.error('SMOKE:FAIL timeout: did-finish-load не наступил за 20 с');
      app.exit(1);
    }, 20000);
  }

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

  // .docx/.pdf: показываем диалог «Куда сохранить» (иначе файл молча летит в «Загрузки»
  // и пользователь думает, что ничего не произошло). blob:URL качается через ту же сессию.
  session.defaultSession.on('will-download', (event, item) => {
    if (SMOKE) {
      event.preventDefault();
      console.log('SMOKE:download ' + item.getFilename());
      return;
    }
    event.preventDefault();
    const name = item.getFilename();
    const ext = path.extname(name).toLowerCase();
    const filters = ext === '.pdf'
      ? [{ name: 'PDF-документ', extensions: ['pdf'] }]
      : [{ name: 'Документ Word', extensions: ['docx'] }];
    // по умолчанию — последняя выбранная папка, иначе «Документы»
    const baseDir = lastSaveDir && fs.existsSync(lastSaveDir)
      ? lastSaveDir
      : app.getPath('documents');
    dialog.showSaveDialog(mainWindow, {
      title: 'Сохранить документ',
      defaultPath: path.join(baseDir, name),
      filters,
    }).then(({ canceled, filePath }) => {
      if (canceled || !filePath) return; // отмена — ничего не скачиваем
      lastSaveDir = path.dirname(filePath);
      item.setSavePath(filePath);
    });
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
      if (SMOKE) {
        console.error('SMOKE:FAIL payload: нет app/index.html (сборка повреждена)');
        app.exit(1);
        return;
      }
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
