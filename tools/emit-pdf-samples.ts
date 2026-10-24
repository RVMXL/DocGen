// Эмпирическая сверка ENG-3…6: генерирует sample-PDF и пишет в out-pdf-samples/
// (проверяется pdftotext/pdftoppm вручную). Запуск: bun tools/emit-pdf-samples.ts
import { buildPdf } from '../src/lib/docgen/pdf';
import { STANDARDS } from '../src/data/standards';
import type { DocBlock } from '../src/lib/types';
import * as fs from 'node:fs';
import * as path from 'node:path';

// мини-сервер шрифтов (как в юнит-тестах)
const FONTS_DIR = path.join(import.meta.dir, '..', 'public', 'fonts');
const srv = Bun.serve({
  port: 0,
  async fetch(req) {
    const url = new URL(req.url);
    const file = path.join(FONTS_DIR, path.basename(url.pathname));
    const f = Bun.file(file);
    if (await f.exists) return new Response(f);
    return new Response(null, { status: 404 });
  },
});
(globalThis as { location?: { href: string } }).location = { href: `http://127.0.0.1:${srv.port}/` };

const OUT = path.join(import.meta.dir, '..', 'out-pdf-samples');
fs.mkdirSync(OUT, { recursive: true });

const LONG_RU: DocBlock[] = [
  { type: 'lines', align: 'right', items: ['Генеральному директору ООО «Пример»', 'от Петрова П. П.'] },
  { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
  { type: 'paragraph', text: ('Обстоятельства дела изложены в приложенных документах, подтверждающих заявленные требования о взыскании задолженности. '.repeat(40)).trim(), justify: true },
  { type: 'signature', leftText: 'Руководитель отдела документационного обеспечения управления делами', rightText: '_______________ / Петров Пётр Петрович /' },
];
const LONG_ZH: DocBlock[] = [
  { type: 'title', text: '支付令申请书' },
  { type: 'paragraph', text: '申请人因被申请人拖欠租金，依据《中华人民共和国民事诉讼法》第221条，请求人民法院向被申请人发出支付令，责令其给付租金人民币20,000元及逾期利息。'.repeat(15), justify: true },
  { type: 'signature', leftText: '2026年10月24日', rightText: '申请人：张三' },
];

const samples: Array<[string, DocBlock[], 'ru' | 'zh', typeof STANDARDS.RU | undefined]> = [
  ['gost-2pages-ru.pdf', LONG_RU, 'ru', STANDARDS.RU],
  ['gost-1page-ru.pdf', [
    { type: 'title', text: 'Короткий документ' },
    { type: 'paragraph', text: 'Одна страница, без номера.' },
    { type: 'signature', rightText: '_______________ / Петров П. П. /' },
  ], 'ru', STANDARDS.RU],
  ['din-bottom-de.pdf', [
    { type: 'title', text: 'Mietminderung' },
    { type: 'paragraph', text: ('Sehr geehrte Damen und Herren, hiermit mindere ich die Miete wegen der seit Wochen bestehenden Mängel an der Heizungsanlage. '.repeat(25)).trim(), justify: true },
    { type: 'signature', leftText: 'Max Mustermann, Musterstraße 12, 12345 Berlin', rightText: '_______________ / Max Mustermann /' },
  ], 'de' as never, STANDARDS.DE],
  ['cjk-zh-justify.pdf', LONG_ZH, 'zh', STANDARDS.CN],
];

for (const [name, blocks, lang, std] of samples) {
  const bytes = await buildPdf(blocks, lang as never, std as never);
  fs.writeFileSync(path.join(OUT, name), bytes);
  console.log(`${name}: ${(bytes.length / 1024).toFixed(0)} КБ`);
}
srv.stop(true);
console.log('готово:', OUT);
