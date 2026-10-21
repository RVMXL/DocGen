// Процессуальные чек-листы реквизитов (Россия) — проверка СТРУКТУРЫ шаблонов,
// а не формулировок. Идея — превращать процессуальные нормы в автоматические
// проверки: шаблон не может «потерять» обязательный реквизит незаметно.
//
// Основания:
//  - исковое заявление — ст. 131 ГПК РФ (форма и содержание): наименование суда;
//    сведения об истце; сведения об ответчике; требования и обстоятельства;
//    перечень прилагаемых документов (п. 7 ч. 2);
//  - заявление о вынесении судебного приказа — ст. 124 ГПК РФ: суд;
//    взыскатель; должник; требования; документы;
//  - апелляционные/иные судебные жалобы — ст. 320, 322 ГПК РФ: суд-адресат;
//    заявитель; просительная часть.
//
// Реквизиты ищутся по блокам тела И плейсхолдерам: суд может быть записан
// «В {{court_name}}», стороны — «Истец:», «Взыскатель:», «Административный
// истец:» — проверяем и лексику, и плейсхолдер семейства (plaintiff,
// defendant, creditor, debtor, respondent, appellant).
import { describe, it, expect } from 'bun:test';
import { allTemplates, countryOfSlug } from '../src/data/catalog';

type Tpl = ReturnType<typeof allTemplates>[number];

const titleOf = (t: Tpl) => ((t.body.find((b) => b.type === 'title') as { text?: string } | undefined)?.text ?? '');
const headOf = (t: Tpl) =>
  t.body.filter((b) => b.type === 'lines').slice(0, 2)
    .map((b) => (b as { items: string[] }).items.join(' ')).join(' ');
const textOf = (t: Tpl) => t.body.map((b) => {
  if (b.type === 'lines') return b.items.join(' ');
  if (b.type === 'title' || b.type === 'subtitle' || b.type === 'paragraph') return b.text;
  if (b.type === 'list') return b.items.join(' ');
  if (b.type === 'attachment') return b.items.join(' ') + ' ' + (b.label ?? '');
  return (b.leftText ?? '') + ' ' + (b.rightText ?? '');
}).join(' ');

const courtOk = (head: string) => /суд/i.test(head) || /\{\{\w*court\w*\}\}/i.test(head);
const askOk = (text: string) => /прошу|требую|требуем/i.test(text);
const attachOk = (t: Tpl) => t.body.some((b) => b.type === 'attachment');

describe('процессуальные чек-листы реквизитов (ГПК РФ)', () => {
  const ru = allTemplates().filter((t) => countryOfSlug(t.slug) === 'RU');

  it('в каталоге есть процессуальные шаблоны для проверки', () => {
    const claims = ru.filter((t) => /ИСКОВОЕ|ПРИКАЗ|ЖАЛОБА/i.test(titleOf(t)) && t.categorySlug === 'court-lawsuits');
    expect(claims.length).toBeGreaterThan(8);
  });

  it('исковые заявления: реквизиты ст. 131 ГПК РФ', () => {
    const claims = ru.filter((t) => /ИСКОВОЕ/i.test(titleOf(t)));
    expect(claims.length).toBeGreaterThan(5);
    for (const t of claims) {
      const head = headOf(t);
      const text = textOf(t);
      expect(courtOk(head), `${t.slug}: нет наименования суда (п. 1 ч. 2 ст. 131)`).toBe(true);
      expect(
        /истец/i.test(head) || /\{\{\w*plaintiff\w*\}\}/i.test(head),
        `${t.slug}: нет сведений об истце (п. 2 ч. 2 ст. 131)`
      ).toBe(true);
      expect(
        /ответчик/i.test(head) || /\{\{\w*(defendant|respondent)\w*\}\}/i.test(head),
        `${t.slug}: нет сведений об ответчике (п. 3 ч. 2 ст. 131)`
      ).toBe(true);
      expect(askOk(text), `${t.slug}: нет просительной части (п. 1 ч. 1 ст. 131)`).toBe(true);
      expect(attachOk(t), `${t.slug}: нет перечня прилагаемых документов (п. 7 ч. 2 ст. 131)`).toBe(true);
    }
  });

  it('заявления о судебном приказе: реквизиты ст. 124 ГПК РФ', () => {
    const orders = ru.filter((t) => /ПРИКАЗ/i.test(titleOf(t)) && t.categorySlug === 'court-lawsuits');
    expect(orders.length).toBeGreaterThan(0);
    for (const t of orders) {
      const head = headOf(t);
      const text = textOf(t);
      expect(courtOk(head), `${t.slug}: нет наименования суда (ст. 124)`).toBe(true);
      expect(
        /взыскатель/i.test(head) || /\{\{\w*creditor\w*\}\}/i.test(head),
        `${t.slug}: нет взыскателя (ст. 124)`
      ).toBe(true);
      expect(
        /должник/i.test(head) || /\{\{\w*debtor\w*\}\}/i.test(head),
        `${t.slug}: нет должника (ст. 124)`
      ).toBe(true);
      expect(askOk(text), `${t.slug}: нет требования (ст. 124)`).toBe(true);
      expect(attachOk(t), `${t.slug}: нет прилагаемых документов (ст. 124)`).toBe(true);
    }
  });

  it('судебные жалобы: суд-адресат, заявитель, просительная часть (ст. 320, 322 ГПК РФ)', () => {
    const appeals = ru.filter((t) => /ЖАЛОБА/i.test(titleOf(t)) && t.categorySlug === 'court-lawsuits');
    expect(appeals.length).toBeGreaterThan(0);
    for (const t of appeals) {
      const head = headOf(t);
      const text = textOf(t);
      expect(courtOk(head), `${t.slug}: нет суда-адресата`).toBe(true);
      expect(
        /заявител|подател|жалобщик|\{\{\w*appellant\w*\}\}/i.test(head),
        `${t.slug}: нет заявителя жалобы`
      ).toBe(true);
      expect(askOk(text), `${t.slug}: нет просительной части жалобы`).toBe(true);
      expect(attachOk(t), `${t.slug}: нет приложений к жалобе`).toBe(true);
    }
  });
});
