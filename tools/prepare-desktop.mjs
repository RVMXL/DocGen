// Сборка payload для Electron: статический экспорт out/ → desktop/app.
// Приложение автономно: сервер, БД и Node-модули не нужны.
// Кроссплатформенно (Windows/Linux/macOS): только fs.cpSync.
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const D = (p) => path.join(ROOT, p);
const rm = (p) => fs.rmSync(D(p), { recursive: true, force: true });

console.log('→ чистка desktop/app');
rm('desktop/app');

if (!fs.existsSync(D('out/index.html'))) {
  console.error('✗ нет out/index.html — сначала выполните next build (output: export)');
  process.exit(1);
}

console.log('→ копирование out/ → desktop/app');
fs.cpSync(D('out'), D('desktop/app'), { recursive: true });

// версия десктоп-обёртки = версия приложения (для electron-builder ${version})
const pkgPath = D('desktop/package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const root = JSON.parse(fs.readFileSync(D('package.json'), 'utf8'));
if (root.version && root.version !== pkg.version) {
  pkg.version = root.version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('→ desktop/package.json version → ' + pkg.version);
}

console.log('✓ desktop payload готов (статический сайт в desktop/app)');
