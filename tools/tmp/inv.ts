import { allTemplates } from '../../src/data/catalog.ts';
const cats = {};
for (const t of allTemplates()) {
  const c = t.slug.slice(0,2).toUpperCase();
  cats[c] ??= {};
  cats[c][t.categorySlug] = (cats[c][t.categorySlug]||0)+1;
}
for (const [c, g] of Object.entries(cats).sort()) {
  console.log(c.padEnd(3), Object.entries(g).map(([k,v])=>k+':'+v).join('  '));
}
const total = allTemplates().length;
console.log('TOTAL:', total);
// titles per country for briefs
const titles = {};
for (const t of allTemplates()) {
  const c = t.slug.slice(0,2).toUpperCase();
  (titles[c] ??= []).push(t.titleRu + ' | ' + t.titleEn);
}
for (const [c, arr] of Object.entries(titles).sort()) {
  if (c === 'RU') continue;
  console.log('\n=== ' + c + ' (' + arr.length + ') ===');
  for (const s of arr) console.log('  ' + s);
}
