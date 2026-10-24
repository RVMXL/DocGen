/* Тесты «слепых зон» сборки (по мотивам structure.test.js WarpScoutGUI-AWG).
 *
 * Идея пользователя: юнит-тесты проверяют код, а сломаться может СБОРКА —
 * «файл есть, а ссылается на несуществующий»; «код правилен, а workflow
 * не запускается». Раньше это ловилось руками: релиз v0.3.0 не запускался
 * на Windows (рекурсия app://-протокола), версии root/desktop разъехались
 * (0.4.0 против 0.3.0), триггер CI был написан как «branches: ain]».
 * Каждый тест ниже — реагирует на реальный инцидент или реальный риск.
 *
 * Ноль внешних зависимостей: bun:test + node:fs.
 */
import { describe, test, expect } from 'bun:test';
import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';

const ROOT = join(import.meta.dir, '..');
const read = (p: string) => readFileSync(join(ROOT, p), 'utf8');

describe('desktop/main.cjs — анти-регресс «Windows-версия не запускается» (v0.3.0)', () => {
  const main = read('desktop/main.cjs');

  test('НЕТ net.fetch на app:// внутри собственного обработчика (рекурсия → окно не появляется)', () => {
    // матчатся ТОЛЬКО строки кода: в комментарии-объяснении бага этот паттерн упомянут
    // намеренно (зачем мы отдаём файлы с диска) — проверяем непустые строки без `//`
    const codeLines = main.split('\n').filter((l) => l.trim() && !l.trim().startsWith('//'));
    expect(codeLines.join('\n')).not.toMatch(/net\.fetch\(\s*['"`]app:\/\//);
  });

  test('ЕСТЬ раздача файлов с диска через pathToFileURL (исправление v0.4.0)', () => {
    expect(main).toContain('pathToFileURL');
  });

  test('loadURL имеет catch — отказ загрузки не должен давать невидимый процесс', () => {
    expect(main).toMatch(/loadURL\([^)]*\)\.catch\(/s);
  });

  test('SPA-fallback: неизвестный путь отдаёт index.html с диска', () => {
    expect(main).toContain("path.join(APP_DIR, 'index.html')");
  });
});

describe('desktop/main.cjs — диалог сохранения и smoke-режим', () => {
  const main = read('desktop/main.cjs');

  test('will-download показывает диалог сохранения (файлы не должны сохраняться молча)', () => {
    expect(main).toContain("on('will-download'");
    expect(main).toContain('showSaveDialog');
  });

  test('smoke-режим (--smoke) для CI: печатает SMOKE:OK/SMOKE:FAIL и выходит с кодом', () => {
    expect(main).toContain('--smoke');
    expect(main).toContain('SMOKE:OK');
    expect(main).toContain('SMOKE:FAIL');
  });
});

describe('Иконки и favicon — файлы, на которые ссылается сборка, существуют', () => {
  test('favicon в layout.tsx указывает на существующий файл (слепая зона: Next не ругается)', () => {
    const layout = read('src/app/layout.tsx');
    const icons = [...layout.matchAll(/icon:\s*["'`]([^"'`]+)["'`]/g)].map((m) => m[1]);
    expect(icons.length).toBeGreaterThan(0);
    for (const icon of icons) {
      const local = icon.replace(/^\//, '');
      expect(existsSync(join(ROOT, 'public', local))).toBe(true);
    }
  });

  test('electron-builder.yml: иконки сборки на месте (без них packaging падает поздно)', () => {
    const yml = read('desktop/electron-builder.yml');
    const icons = [...yml.matchAll(/icon:\s*(build\/[^\s]+)/g)].map((m) => m[1]);
    expect(icons.length).toBeGreaterThan(0);
    for (const icon of icons) {
      expect(existsSync(join(ROOT, 'desktop', icon))).toBe(true);
    }
  });

  test('шрифты PDF существуют в public/fonts (buildPdf грузит их по списку FONT_FILES)', () => {
    const pdf = read('src/lib/docgen/pdf.ts');
    const fonts = [...pdf.matchAll(/["'`]([A-Za-z0-9-]+\.ttf)["'`]/g)].map((m) => m[1]);
    expect(fonts.length).toBeGreaterThan(0);
    for (const f of fonts) {
      expect(existsSync(join(ROOT, 'public', 'fonts', f))).toBe(true);
    }
  });
});

describe('Версии согласованы (инцидент: релиз v0.4.0 собрал exe с версией 0.3.0)', () => {
  test('package.json == desktop/package.json (electron-builder берёт версию из desktop)', () => {
    const root = JSON.parse(read('package.json')) as { version: string };
    const desktop = JSON.parse(read('desktop/package.json')) as { version: string };
    expect(desktop.version).toBe(root.version);
  });
});

describe('GitHub workflows — проверка YAML-текста (инцидент: «branches: ain]»)', () => {
  test('ci.yml триггерится на push в main (не «ain]»)', () => {
    const ci = read('.github/workflows/ci.yml');
    // проверяем только значимые строки YAML: в комментарии-истории инцидента
    // паттерн «ain]» упомянут намеренно (как и зачем это чинилось)
    const code = ci.split('\n').filter((l) => !l.trim().startsWith('#')).join('\n');
    expect(code).toMatch(/branches:\s*\[main\]/);
    expect(code).not.toContain('branches: ain]');
  });

  test('release.yml публикует релизы с пометкой prerelease (требование пользователя)', () => {
    const release = read('.github/workflows/release.yml');
    expect(release).toMatch(/prerelease:\s*true/);
  });

  test('ни в workflow, ни в README нет упоминаний приватного репозитория', () => {
    for (const p of ['.github/workflows/release.yml', '.github/workflows/ci.yml', 'README.md', 'SECURITY.md']) {
      const text = read(p).toLowerCase();
      expect(text).not.toContain('приватного репозитория');
      expect(text).not.toContain('приватные репозитории');
    }
  });
});

describe('Capacitor/Android — связность идентификаторов', () => {
  test('appId в capacitor.config.ts совпадает с пакетом MainActivity', () => {
    const cfg = read('capacitor.config.ts');
    const appId = cfg.match(/appId:\s*["'`]([^"'`]+)["'`]/)?.[1];
    expect(appId).toBeTruthy();
    const manifest = read('android/app/src/main/AndroidManifest.xml');
    expect(manifest.length).toBeGreaterThan(0);
    const manifestPackage = manifest.match(/package="([^"]+)"/)?.[1];
    if (manifestPackage && appId) expect(manifestPackage).toBe(appId);
  });
});
