/* Юнит-тесты генерации документов (чистые функции + сборка docx/pdf в памяти).
 *
 * Зачем: генерация — ядро приложения. Регрессия (сломанный плейсхолдер,
 * побитая упаковка docx, невалидный PDF) не видна в данных каталога —
 * выявляется только при генерации файла. Тест ловит это ДО релиза.
 *
 * PDF грузит шрифты через fetch(fonts/…) от document.baseURI; в тесте
 * поднимаем мини-сервер с public/fonts и подменяем location.href.
 */
import { describe, test, expect, beforeAll, afterAll } from 'bun:test';
import { fileName, generateFile, renderBlocks } from '../src/lib/generate';
import { interpolateText, interpolateBlocks, toDocLang, fmtDateISO, fmtToday, cleanupPunct } from '../src/lib/docgen/interpolate';
import { TEMPLATES_RU } from '../src/data/templates/ru';
import { TEMPLATES_IT } from '../src/data/templates/it';
import type { DocBlock, TemplateDTO } from '../src/lib/types';
import type { TplDef } from '../src/data/types';

/** TplDef (исходник каталога) → TemplateDTO (то, что получает генератор): id/lang добавляются */
const dto = (t: TplDef, lang = 'ru'): TemplateDTO => ({ ...t, id: t.slug, lang } as TemplateDTO);

describe('toDocLang / cleanupPunct', () => {
  test('известные языки маппятся, неизвестные — fallback ru', () => {
    expect(toDocLang('ru')).toBe('ru');
    expect(toDocLang('kk')).toBe('kk');
    expect(toDocLang('he')).toBe('he');
    expect(toDocLang('it')).toBe('it');
    expect(toDocLang('xx-unknown')).toBe('ru');
  });

  test('cleanupPunct: пробел перед запятой убирается, двойные пробелы схлопываются', () => {
    expect(cleanupPunct('слово , ещё  раз')).toBe('слово, ещё раз');
  });
});

describe('Итальянские даты (docLang it — волна 5)', () => {
  test('длинная дата: месяц словами, 1-е число — с ординалом «º»', () => {
    expect(fmtDateISO('2026-03-15', 'it')).toBe('15 marzo 2026');
    expect(fmtDateISO('2026-01-01', 'it')).toBe('1º gennaio 2026');
    expect(fmtToday('it')).toMatch(/^(\d{1,2}º?|1º) [a-z]+ \d{4}$/);
  });

  test('итальянские шаблоны: titleDoc и descDoc на итальянском, уникальные slug', () => {
    expect(TEMPLATES_IT.length).toBeGreaterThanOrEqual(30);
    const slugs = new Set(TEMPLATES_IT.map((t) => t.slug));
    expect(slugs.size).toBe(TEMPLATES_IT.length);
    for (const t of TEMPLATES_IT) {
      expect(t.slug.startsWith('it-')).toBe(true);
      expect(t.titleDoc).toBeTruthy();
      expect(t.descDoc).toBeTruthy();
    }
  });
});

describe('Интерполяция плейсхолдеров', () => {
  test('interpolateText заменяет {{x}} на значение', () => {
    expect(interpolateText('Уважаемый {{name}}, дата {{d}}', { name: 'Иван', d: '01.05.2025' }, 'ru'))
      .toBe('Уважаемый Иван, дата 01.05.2025');
  });

  test('неизвестный плейсхолдер не ломает текст', () => {
    const out = interpolateText('Здравствуйте {{name}}', {}, 'ru');
    expect(out).toContain('Здравствуйте');
  });

  test('interpolateBlocks сохраняет структуру и заменяет во вложенных items', () => {
    const blocks: DocBlock[] = [
      { type: 'title', text: 'Заявление {{doc_kind}}' },
      { type: 'lines', align: 'right', items: ['{{to_name}}', '', '{{from_name}}'] },
      { type: 'list', items: ['пункт {{a}}', 'пункт {{b}}'] },
    ];
    const out = interpolateBlocks(blocks, { doc_kind: 'на отпуск', to_name: 'Директору', from_name: 'Иванова', a: '1', b: '2' }, 'ru');
    expect((out[0] as { text: string }).text).toBe('Заявление на отпуск');
    expect((out[1] as { items: string[] }).items[0]).toBe('Директору');
    expect((out[2] as { items: string[] }).items[1]).toBe('пункт 2');
  });
});

describe('fileName', () => {
  const tpl = dto(TEMPLATES_RU[0]);

  test('имя = заголовок + дата + расширение, спец-символы вычищены', () => {
    const name = fileName(tpl, 'ru', 'docx');
    expect(name.endsWith('.docx')).toBe(true);
    expect(name).toMatch(/^\S+_\d{4}-\d{2}-\d{2}\.docx$/);
    expect(name).not.toMatch(/[\\/:*?"<>|]/); // запрещённые в Windows
  });

  test('для en-интерфейса используется латиница titleEn', () => {
    const name = fileName(tpl, 'en', 'pdf');
    expect(name.endsWith('.pdf')).toBe(true);
    expect(name).toMatch(/^[A-Za-z0-9_]+_\d{4}-\d{2}-\d{2}\.pdf$/);
  });

  test('имя ограничено 60 символами базовой части', () => {
    const long = { ...tpl, titleRu: 'Очень'.repeat(40) + ' длинное название' };
    const name = fileName(long, 'ru', 'docx');
    const base = name.replace(/_\d{4}-\d{2}-\d{2}\.docx$/, '');
    expect(base.length).toBeLessThanOrEqual(60);
  });
});

describe('renderBlocks на реальном шаблоне каталога', () => {
  test('все {{placeholder}} реального шаблона заменяются при полном заполнении', () => {
    const tpl = dto(TEMPLATES_RU[0]);
    const data: Record<string, string> = {};
    for (const f of tpl.fields) {
      data[f.id] = f.type === 'date' ? '2025-05-01' : f.options ? f.options[0] : 'тестовое значение';
    }
    const blocks = renderBlocks(tpl, data);
    expect(blocks.length).toBeGreaterThan(0);
    const dump = JSON.stringify(blocks);
    expect(dump).not.toMatch(/\{\{[a-zA-Z0-9_]+\}\}/); // ни один плейсхолдер не «протёк»
  });
});

// ── сборка файлов: docx (zip) и pdf ─────────────────────────────────────────
let server: { stop(closeActiveConnections?: boolean): void; port: number } | null = null;

beforeAll(async () => {
  // мини-сервер шрифтов: buildPdf делает fetch('fonts/…') от location.href
  const path = await import('node:path');
  const FONTS_DIR = path.join(import.meta.dir, '..', 'public', 'fonts');
  const srv = Bun.serve({
    port: 0, // свободный порт
    async fetch(req) {
      const url = new URL(req.url);
      const file = path.join(FONTS_DIR, path.basename(url.pathname));
      const f = Bun.file(file);
      if (await f.exists) return new Response(f);
      return new Response(null, { status: 404 });
    },
  });
  server = srv as unknown as { stop(closeActiveConnections?: boolean): void; port: number };
  (globalThis as { location?: { href: string } }).location = { href: `http://127.0.0.1:${srv.port}/` };
});

afterAll(() => server?.stop(true));

describe('Генерация файлов (buildDocx / buildPdf)', () => {
  test('buildDocx: валидный zip (PK-подпись) и непустой', async () => {
    const tpl = dto(TEMPLATES_RU[0]);
    const data: Record<string, string> = {};
    for (const f of tpl.fields) data[f.id] = f.type === 'date' ? '2025-05-01' : 'значение';
    const blob = await generateFile(tpl, data, 'docx');
    expect(blob.size).toBeGreaterThan(1000);
    const head = new Uint8Array(await blob.slice(0, 2).arrayBuffer());
    expect(head[0]).toBe(0x50); // P
    expect(head[1]).toBe(0x4b); // K
  });

  test('buildPdf: валидный заголовок %PDF', async () => {
    const tpl = dto(TEMPLATES_RU[0]);
    const data: Record<string, string> = {};
    for (const f of tpl.fields) data[f.id] = f.type === 'date' ? '2025-05-01' : 'значение';
    const bytes = await generateFile(tpl, data, 'pdf');
    expect(bytes.size).toBeGreaterThan(1000);
    const ab = await bytes.slice(0, 8).arrayBuffer();
    const head = new TextDecoder().decode(ab);
    expect(head).toMatch(/^%PDF-\d/);
  });
});
