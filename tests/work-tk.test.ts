// Волна «Трудовой кодекс РФ»: заявления по всем правам работника (29 шаблонов).
// Запуск: bun test tests/work-tk.test.ts
import { describe, test, expect } from 'bun:test';
import { allTemplates, buildCatalog } from '../src/data/catalog';

const bySlug = new Map(allTemplates().map((t) => [t.slug, t]));

describe('ТК РФ: запрошенные пользователями шаблоны', () => {
  test('4 выходных дня за ребёнка-инвалида (ст. 262 + ПП № 1720)', () => {
    const t = bySlug.get('ru-work-family-disabled-days');
    expect(t).toBeDefined();
    expect(t!.refRu).toContain('262');
    expect(t!.refRu).toContain('1720');
  });

  test('отпуск по уходу до 1,5 / 3 лет (ст. 256)', () => {
    const t = bySlug.get('ru-work-vacation-childcare');
    expect(t).toBeDefined();
    expect(t!.refRu).toContain('256');
    // выбор до 1,5 или до 3 лет — select-поле
    const sel = t!.fields.find((f) => f.id === 'until_age');
    expect(sel?.type).toBe('select');
  });

  test('согласие на работу в выходной/праздник (ст. 113, 153) — это СОГЛАСИЕ, не заявление', () => {
    const t = bySlug.get('ru-work-time-weekend-consent');
    expect(t).toBeDefined();
    const title = t!.body.find((b) => b.type === 'title') as { type: 'title'; text: string };
    expect(title.text).toBe('СОГЛАСИЕ');
    expect(t!.refRu).toContain('113');
  });
});

describe('ТК РФ: полнота пакета', () => {
  const workCats = new Set(['work-hiring', 'work-time', 'work-vacations', 'work-family', 'work-dismissal', 'work-docs']);

  test('≥ 25 шаблонов в рабочих подгруппах RU', () => {
    const ru = allTemplates().filter((t) => t.slug.startsWith('ru-') && workCats.has(t.categorySlug));
    expect(ru.length).toBeGreaterThanOrEqual(25);
  });

  test('у каждого шаблона пакета — статья ТК / ФЗ в основании', () => {
    const pack = [
      'ru-work-vacation-pregnancy', 'ru-work-vacation-reschedule', 'ru-work-vacation-study',
      'ru-work-vacation-recall-consent', 'ru-work-vacation-compensation',
      'ru-work-time-overtime-consent', 'ru-work-time-night-consent', 'ru-work-time-part-time',
      'ru-work-time-schedule-change', 'ru-work-time-dayoff-weekend',
      'ru-work-family-disabled-unpaid', 'ru-work-family-parttime-childcare', 'ru-work-family-nursing-breaks',
      'ru-work-family-remote-work', 'ru-work-dismissal-agreement', 'ru-work-dismissal-withdrawal',
      'ru-work-dismissal-transfer', 'ru-work-dismissal-docs', 'ru-work-hiring-application',
      'ru-work-hiring-transfer', 'ru-work-hiring-combine', 'ru-work-docs-salary-cert',
      'ru-work-docs-earnings-cert', 'ru-work-docs-std-r', 'ru-court-wage-claim', 'ru-court-git-complaint',
    ];
    for (const slug of pack) {
      const t = bySlug.get(slug);
      expect(t).toBeDefined();
      expect(t!.refRu).toMatch(/ТК РФ|Трудового кодекса|255-ФЗ/);
    }
  });

  test('согласия и заявления оформлены по ГОСТ: шапка справа, титул, подпись', () => {
    for (const slug of ['ru-work-time-weekend-consent', 'ru-work-time-overtime-consent', 'ru-work-vacation-childcare']) {
      const t = bySlug.get(slug)!;
      const first = t.body[0];
      expect(first.type).toBe('lines');
      expect((first as { align: string }).align).toBe('right');
      expect(t.body.some((b) => b.type === 'title')).toBe(true);
      expect(t.body[t.body.length - 1].type).toBe('signature');
    }
  });
});

describe('ТК РФ: каталог и подгруппы', () => {
  test('новые подгруппы присутствуют в каталоге RU, пустые скрыты у других стран', () => {
    const ru = buildCatalog('RU')!;
    const work = ru.groups.find((g) => g.slug === 'work')!;
    const slugs = new Set(work.subgroups.map((s) => s.slug));
    expect(slugs.has('work-time')).toBe(true);
    expect(slugs.has('work-family')).toBe(true);
    expect(slugs.has('work-hiring')).toBe(true);

    const kz = buildCatalog('KZ')!;
    const kzWork = kz.groups.find((g) => g.slug === 'work');
    if (kzWork) {
      for (const s of kzWork.subgroups) {
        expect(s.templates.length).toBeGreaterThan(0);
      }
    }
  });
});
