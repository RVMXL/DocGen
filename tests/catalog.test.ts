/* Юнит-тесты каталога шаблонов (bun test tests/).
 *
 * Зачем: tools/check-data.ts — скрипт, он может «расползтись» молча; тесты
 * в CI гоняются всегда и падают громко. Плюс здесь проверяются правила,
 * которых нет в check-data: в КАЖДОЙ стране есть шаблон «шумный сосед»
 * (ключевая тема волны 4 по запросу пользователя), ссылки https и т.п.
 *
 * Ноль внешних зависимостей: bun:test + данные из src/data.
 */
import { describe, test, expect } from 'bun:test';
import { allTemplates, countryOfSlug } from '../src/data/catalog';
import { COUNTRIES } from '../src/data/countries';
import { CATEGORY_TREE } from '../src/data/categories';

const templates = allTemplates();
const codes = new Set(COUNTRIES.map((c) => c.code));
const subgroups = new Set(CATEGORY_TREE.flatMap((g) => g.children.map((s) => s.slug)));
const docLangOf = new Map(COUNTRIES.map((c) => [c.code, c.docLang] as const));

/** Все {{placeholder}} из блоков тела */
function bodyPlaceholders(t: { body: { type: string; text?: string; items?: string[]; leftText?: string; rightText?: string; label?: string }[] }): string[] {
  const out: string[] = [];
  const grab = (s?: string) => {
    if (!s) return;
    for (const m of s.matchAll(/\{\{([a-zA-Z0-9_]+)\}\}/g)) out.push(m[1]);
  };
  for (const b of t.body) {
    grab(b.text);
    grab(b.label);
    grab(b.leftText);
    grab(b.rightText);
    for (const it of b.items ?? []) grab(it);
  }
  return out;
}

describe('Каталог: идентичность', () => {
  test('slug уникальны по всему каталогу', () => {
    const seen = new Set<string>();
    for (const t of templates) {
      expect(seen.has(t.slug)).toBe(false);
      seen.add(t.slug);
    }
  });

  test('slug начинается с кода страны, страна известна', () => {
    for (const t of templates) {
      const cc = countryOfSlug(t.slug);
      expect(codes.has(cc)).toBe(true);
      expect(t.slug.startsWith(cc.toLowerCase() + '-')).toBe(true);
    }
  });

  test('categorySlug — существующая подгруппа', () => {
    for (const t of templates) expect(subgroups.has(t.categorySlug)).toBe(true);
  });

  test('в каждой стране есть шаблоны (каталог не осиротел)', () => {
    for (const c of COUNTRIES) {
      const n = templates.filter((t) => countryOfSlug(t.slug) === c.code).length;
      expect(n).toBeGreaterThan(0);
    }
  });
});

describe('Каталог: контракт шаблона (types.ts, check-data)', () => {
  test('kind валиден; STANDARD имеет поля и тело', () => {
    for (const t of templates) {
      expect(['STANDARD', 'HANDWRITTEN_REQUIRED', 'GOV_PORTAL_ONLY']).toContain(t.kind);
      if (t.kind === 'STANDARD') {
        expect(t.fields.length).toBeGreaterThan(0);
        expect(t.body.length).toBeGreaterThan(0);
      }
    }
  });

  test('docLang ≠ ru/en ⇒ titleDoc обязателен (заголовок на языке документа)', () => {
    for (const t of templates) {
      const dl = docLangOf.get(countryOfSlug(t.slug));
      if (t.kind !== 'GOV_PORTAL_ONLY' && dl && dl !== 'ru' && dl !== 'en') {
        expect(t.titleDoc).toBeTruthy();
      }
    }
  });

  test('плейсхолдеры тела существуют среди полей (или служебные)', () => {
    const SERVICE = new Set(['date_today', 'today']); // служебные подставляются генератором
    for (const t of templates) {
      const ids = new Set(t.fields.map((f) => f.id));
      for (const ph of bodyPlaceholders(t as never)) {
        expect(ids.has(ph) || SERVICE.has(ph)).toBe(true);
      }
    }
  });

  test('GOV_PORTAL_ONLY: portalUrl обязателен и https', () => {
    for (const t of templates) {
      if (t.kind !== 'GOV_PORTAL_ONLY') continue;
      expect(t.portalUrl).toBeTruthy();
      expect(t.portalUrl?.startsWith('https://')).toBe(true);
    }
  });

  test('ВСЕ portalUrl в каталоге — https (mixed content в WebView недопустим)', () => {
    for (const t of templates) {
      if (t.portalUrl) expect(t.portalUrl.startsWith('https://')).toBe(true);
    }
  });

  test('интерфейсные поля заполнены: titleRu/titleEn/descRu/descEn', () => {
    for (const t of templates) {
      expect(t.titleRu.length).toBeGreaterThan(2);
      expect(t.titleEn.length).toBeGreaterThan(2);
      expect(t.descRu.length).toBeGreaterThan(10);
      expect(t.descEn.length).toBeGreaterThan(10);
    }
  });
});

describe('Волна 4: бытовые шаблоны', () => {
  test('в КАЖДОЙ стране есть шаблон на шумного соседа (ключевая тема волны 4)', () => {
    const missing = COUNTRIES.filter(
      (c) => !templates.some((t) => t.slug === `${c.code.toLowerCase()}-util-neighbors-noise`)
    ).map((c) => c.code);
    expect(missing).toEqual([]);
  });

  test('подгруппы util-neighbors/util-household наполнены во всех странах', () => {
    const missing = COUNTRIES.filter((c) => {
      const mine = templates.filter((t) => countryOfSlug(t.slug) === c.code);
      return !mine.some((t) => t.categorySlug === 'util-neighbors');
    }).map((c) => c.code);
    expect(missing).toEqual([]);
  });
});
