// Одноразовый конвертер: prisma/seed-ru-a.ts + seed-ru-b.ts → src/data/templates/ru.ts
// (после рефакторинга на статический каталог Prisma удаляется)
import { writeFileSync } from 'fs';
import { TEMPLATES_RU_A } from '../prisma/seed-ru-a';
import { TEMPLATES_RU_B } from '../prisma/seed-ru-b';

const header = `// Шаблоны для России — портированы из исходных сидов (этап MVP).
// Все шаблоны основаны на реальных нормах законодательства РФ (ТЗ: не выдумывать).
import type { TplDef } from '../types';

export const TEMPLATES_RU: TplDef[] = `;

const body = JSON.stringify([...TEMPLATES_RU_A, ...TEMPLATES_RU_B], null, 2)
  .replace(/"type": "([^"]+)"/g, "type: '$1'")
  .replace(/"required": true/g, 'required: true')
  .replace(/"half": true/g, 'half: true')
  .replace(/"justify": true/g, 'justify: true')
  .replace(/"numbered": true/g, 'numbered: true')
  .replace(/"noIndent": true/g, 'noIndent: true')
  .replace(/"bold": true/g, 'bold: true');

writeFileSync(new URL('../src/data/templates/ru.ts', import.meta.url), header + body + ';\n');
console.log('OK, templates:', TEMPLATES_RU_A.length + TEMPLATES_RU_B.length);
