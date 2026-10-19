// Сборка payload для Electron: .next/standalone → desktop/app,
// статика → desktop/app/.next/static и desktop/app/public,
// сид-БД → desktop/resources/db/docgen.db.
// Запускается на CI на том же раннере, где выполнялся next build,
// поэтому Prisma-движки соответствуют платформе.
// Кроссплатформенно (Windows/Linux/macOS): только fs.cpSync.
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const D = (p) => path.join(ROOT, p);
const rm = (p) => fs.rmSync(D(p), { recursive: true, force: true });

console.log('→ чистка desktop/app, desktop/resources/db');
rm('desktop/app');
rm('desktop/resources/db');

if (!fs.existsSync(D('.next/standalone/server.js'))) {
  console.error('✗ нет .next/standalone/server.js — сначала выполните next build');
  process.exit(1);
}

console.log('→ копирование .next/standalone → desktop/app');
fs.cpSync(D('.next/standalone'), D('desktop/app'), { recursive: true });

// ВАЖНО: манифест standalone (package.json, без "main") и .package-lock.json
// нельзя оставлять в payload — electron-builder читает package.json из корня
// resources/app, и посторонний манифест ломает поиск entry-файла (index.js not found),
// а также провоцирует попытку пересчёта production-зависимостей.
for (const junk of ['package.json', 'node_modules/.package-lock.json']) {
  const p = D('desktop/app/' + junk);
  if (fs.existsSync(p)) {
    fs.rmSync(p);
    console.log('→ удалён desktop/app/' + junk);
  }
}

console.log('→ .next/static → desktop/app/.next/static');
fs.cpSync(D('.next/static'), D('desktop/app/.next/static'), { recursive: true });

console.log('→ public → desktop/app/public');
fs.cpSync(D('public'), D('desktop/app/public'), { recursive: true });

console.log('→ сид-БД → desktop/resources/db/docgen.db');
fs.mkdirSync(D('desktop/resources/db'), { recursive: true });
const dbSrc = process.env.DOCGEN_DB || D('db/custom.db');
if (!fs.existsSync(dbSrc)) {
  console.error('✗ нет сид-БД ' + dbSrc + ' — сначала prisma db push + seed');
  process.exit(1);
}
fs.copyFileSync(dbSrc, D('desktop/resources/db/docgen.db'));

// версия десктоп-обёртки = версия приложения (для electron-builder ${version})
const pkgPath = D('desktop/package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
const root = JSON.parse(fs.readFileSync(D('package.json'), 'utf8'));
if (root.version && root.version !== pkg.version) {
  pkg.version = root.version;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');
  console.log('→ desktop/package.json version → ' + pkg.version);
}

console.log('✓ desktop payload готов');
