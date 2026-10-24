// Цензус i18n-полноты (волна 2 аудита):
// 1) titleDoc — у шаблонов стран с docLang ≠ ru/en (гейт уже в check-data, тут счёт)
// 2) descDoc — описание шаблона на языке документа (аудит: 624 пустых)
// 3) nameI18n — названия стран/категорий на языках интерфейса (аудит: пустые)
// 4) placeholderDoc — плейсхолдеры полей на языке документа
// Запуск: bun tools/census-i18n.ts
import { allTemplates, countryOfSlug } from '../src/data/catalog';
import { COUNTRIES } from '../src/data/countries';
import { CATEGORY_TREE } from '../src/data/categories';

const docLangOf = new Map(COUNTRIES.map((c) => [c.code, c.docLang] as const));
const tpl = allTemplates();

const noTitleDoc: string[] = [];
const noDescDoc: string[] = [];
const noDescDocByCountry = new Map<string, number>();
const noPlaceholderDoc: Array<{ slug: string; id: string }> = [];

for (const t of tpl) {
  const cc = countryOfSlug(t.slug);
  const dl = docLangOf.get(cc);
  if (t.kind === 'GOV_PORTAL_ONLY') continue;
  if (dl && dl !== 'ru' && dl !== 'en' && !t.titleDoc) noTitleDoc.push(t.slug);
  // descDoc нужен, когда docLang ≠ ru/en: при ru показывается descRu,
  // при en — descEn (тот же язык, фолбэк уже корректен)
  if (dl && dl !== 'ru' && dl !== 'en' && !t.descDoc) {
    noDescDoc.push(t.slug);
    noDescDocByCountry.set(cc, (noDescDocByCountry.get(cc) ?? 0) + 1);
  }
  if (dl && dl !== 'ru' && dl !== 'en') {
    for (const f of t.fields) {
      // date/select не нуждаются в плейсхолдере (календарь/выпадающий список),
      // плейсхолдер-кандидаты — только text/textarea
      if (f.type !== 'text' && f.type !== 'textarea') continue;
      const hasText = !!(f as { placeholderDoc?: string }).placeholderDoc;
      const other = (f as { placeholderRu?: string; placeholderEn?: string });
      if (!hasText && !other.placeholderRu && !other.placeholderEn) {
        noPlaceholderDoc.push({ slug: t.slug, id: f.id });
      }
    }
  }
}

// nameI18n: страны без названий на других языках интерфейса
const noNameI18n = COUNTRIES.filter((c) => !c.nameI18n || Object.keys(c.nameI18n).length === 0);
// у категорий/подгрупп свойство называется titleI18n (аудит «Категорий/подгрупп без nameI18n»)
const catNoI18n = CATEGORY_TREE.flatMap((g) => [
  ...(g.titleI18n && Object.keys(g.titleI18n).length ? [] : [g.slug]),
  ...g.children.filter((s) => !s.titleI18n || Object.keys(s.titleI18n).length === 0).map((s) => s.slug),
]);

console.log(`Шаблонов всего: ${tpl.length} (GOV_PORTAL_ONLY пропущены для titleDoc/descDoc)`);
console.log(`\n[1] Без titleDoc (docLang ≠ ru/en): ${noTitleDoc.length}`);
if (noTitleDoc.length) console.log('  ' + noTitleDoc.slice(0, 40).join(', '));

console.log(`\n[2] Без descDoc (docLang ≠ ru): ${noDescDoc.length}`);
for (const [cc, n] of [...noDescDocByCountry.entries()].sort((a, b) => b[1] - a[1])) {
  console.log(`  ${cc} (${docLangOf.get(cc)}): ${n}`);
}

console.log(`\n[3] Стран без nameI18n: ${noNameI18n.length} из ${COUNTRIES.length}`);
if (noNameI18n.length) console.log('  ' + noNameI18n.map((c) => c.code).join(', '));
console.log(`Категорий/подгрупп без nameI18n: ${catNoI18n.length}`);
if (catNoI18n.length) console.log('  ' + catNoI18n.slice(0, 30).join(', '));

console.log(`\n[4] Полей без плейсхолдера вообще (docLang ≠ ru/en): ${noPlaceholderDoc.length}`);
if (noPlaceholderDoc.length) {
  for (const x of noPlaceholderDoc.slice(0, 30)) console.log(`  ${x.slug}:${x.id}`);
}
