import { allTemplates } from '../../src/data/catalog.ts';
for (const t of allTemplates()) {
  if (!t.titleDoc) console.log(t.slug + '\t' + t.titleRu);
}
