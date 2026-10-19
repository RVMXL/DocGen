// Проверка целостности статического каталога (CI + локально):
// - каждый шаблон принадлежит стране (префикс slug) и существующей подгруппе;
// - slugs уникальны; в каждой стране есть шаблоны; kind валиден;
// - у STANDARD/HANDWRITTEN есть поля и тело; у GOV_PORTAL_ONLY — ссылка на портал.
// Запуск: bun tools/check-data.ts (или node --experimental-strip-types)
import { allTemplates, countryOfSlug } from '../src/data/catalog';
import { COUNTRIES } from '../src/data/countries';
import { CATEGORY_TREE } from '../src/data/categories';

const subgroups = new Set(CATEGORY_TREE.flatMap((g) => g.children.map((s) => s.slug)));
const countryCodes = new Set(COUNTRIES.map((c) => c.code));
const tpl = allTemplates();
const errors: string[] = [];
const seen = new Set<string>();
const perCountry = new Map<string, number>();

for (const t of tpl) {
  const cc = countryOfSlug(t.slug);
  if (!countryCodes.has(cc)) errors.push(`${t.slug}: неизвестная страна ${cc}`);
  if (!subgroups.has(t.categorySlug)) errors.push(`${t.slug}: неизвестная подгруппа ${t.categorySlug}`);
  if (seen.has(t.slug)) errors.push(`${t.slug}: дубликат slug`);
  seen.add(t.slug);
  perCountry.set(cc, (perCountry.get(cc) ?? 0) + 1);
  if (!['STANDARD', 'HANDWRITTEN_REQUIRED', 'GOV_PORTAL_ONLY'].includes(t.kind)) {
    errors.push(`${t.slug}: некорректный kind ${t.kind}`);
  }
  if (t.kind === 'GOV_PORTAL_ONLY') {
    if (!t.portalUrl || !/^https:\/\//.test(t.portalUrl)) errors.push(`${t.slug}: портал должен быть https`);
  } else if (t.kind === 'HANDWRITTEN_REQUIRED' && t.fields.length === 0) {
    // бланк строгой формы: без тела/полей — экран показывает чек-лист подготовки
    if (!t.warningRu || !t.portalDescRu) errors.push(`${t.slug}: бланк от руки требует warning и чек-лист`);
  } else {
    if (t.fields.length === 0) errors.push(`${t.slug}: нет полей`);
    if (t.body.length === 0) errors.push(`${t.slug}: нет тела документа`);
  }
  // плейсхолдеры тела должны существовать среди полей или быть служебными
  const fieldIds = new Set(t.fields.map((f) => f.id));
  const texts: string[] = [];
  for (const b of t.body) {
    if (b.type === 'lines') texts.push(...b.items);
    else if (b.type === 'title' || b.type === 'subtitle' || b.type === 'paragraph') texts.push(b.text);
    else if (b.type === 'list') texts.push(...b.items);
    else if (b.type === 'attachment') { texts.push(...b.items); if (b.label) texts.push(b.label); }
    else if (b.type === 'signature') { if (b.leftText) texts.push(b.leftText); if (b.rightText) texts.push(b.rightText); }
  }
  for (const txt of texts) {
    for (const m of txt.matchAll(/\{\{(\w+)\}\}/g)) {
      const key = m[1];
      if (key !== 'date_today' && !fieldIds.has(key)) errors.push(`${t.slug}: плейсхолдер {{${key}}} не найден среди полей`);
    }
  }
}

// в каждой стране должен быть каталог с шаблонами
const missing = COUNTRIES.filter((c) => !perCountry.has(c.code));
if (missing.length) errors.push(`страны без шаблонов: ${missing.map((c) => c.code).join(', ')}`);

console.log(`Стран: ${COUNTRIES.length}, шаблонов: ${tpl.length}`);
for (const c of COUNTRIES) {
  console.log(`  ${c.code} (${c.docLang}): ${perCountry.get(c.code) ?? 0}`);
}
if (errors.length) {
  console.error(`\n✗ Ошибки (${errors.length}):`);
  for (const e of errors) console.error('  - ' + e);
  process.exit(1);
}
console.log('✓ Каталог целостен');
