// Сборка серверного пакета (сайт для развёртывания):
// .next/standalone → release-server/DocGen-server (+ статика, БД, deploy-файлы)
import fs from 'fs';
import path from 'path';

const ROOT = process.cwd();
const D = (p) => path.join(ROOT, p);
const DEST = D('release-server/DocGen-server');
const rm = (p) => fs.rmSync(D(p), { recursive: true, force: true });

rm('release-server');

if (!fs.existsSync(D('.next/standalone/server.js'))) {
  console.error('✗ нет .next/standalone/server.js — сначала next build');
  process.exit(1);
}

console.log('→ .next/standalone → release-server/DocGen-server');
fs.cpSync(D('.next/standalone'), DEST, { recursive: true });

console.log('→ статика');
fs.cpSync(D('.next/static'), path.join(DEST, '.next/static'), { recursive: true });
fs.cpSync(D('public'), path.join(DEST, 'public'), { recursive: true });

console.log('→ эталонная БД');
fs.mkdirSync(path.join(DEST, 'db'), { recursive: true });
const dbSrc = process.env.DOCGEN_DB || D('db/custom.db');
if (!fs.existsSync(dbSrc)) {
  console.error('✗ нет сид-БД ' + dbSrc + ' — сначала prisma db push + seed');
  process.exit(1);
}
fs.copyFileSync(dbSrc, path.join(DEST, 'db/docgen.db'));

console.log('→ deploy-файлы (start.sh, start.cmd, Dockerfile, docker-compose, README-DEPLOY.txt)');
for (const f of fs.readdirSync(D('deploy'))) {
  fs.copyFileSync(D('deploy/' + f), path.join(DEST, f));
}
fs.chmodSync(path.join(DEST, 'start.sh'), 0o755);
fs.chmodSync(path.join(DEST, 'server.js'), 0o755);

console.log('✓ release-server/DocGen-server готов');
