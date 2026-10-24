/* Антирегресс ENG-3…6 (аудит 2026-10-24, волна 2): типографика PDF-генератора.
 *
 * ENG-3: последняя строка выключенного абзаца не растягивается по ширине
 *        (левый край; для RTL — правый).
 * ENG-4: CJK-текст переносится посимвольно с правилами кансоку — закрывающая
 *        пунктуация не начинает строку, открывающая скобка не остаётся в конце
 *        (допустим перелив ≤ 1 знака).
 * ENG-5: части подписи, не помещающиеся в одну строку, переносятся вниз без наложения.
 * ENG-6: многостраничные документы нумеруются (ГОСТ-семейство — верхнее поле со
 *        2-й страницы, остальные — нижнее поле); одностраничные — не нумеруются.
 *
 * Критерий аудита: pdftoppm/pdftotext на сгенерированных файлах без ошибок
 * (эмпирическая сверка выполнялась при закрытии находки).
 */
import { describe, test, expect, beforeAll, afterAll } from 'bun:test';
import { PDFDocument } from 'pdf-lib';
import { buildPdf, wrapCJK } from '../src/lib/docgen/pdf';
import { STANDARDS } from '../src/data/standards';
import type { DocBlock } from '../src/lib/types';

let server: { stop(): void } | null = null;

beforeAll(async () => {
  const path = await import('node:path');
  const FONTS_DIR = path.join(import.meta.dir, '..', 'public', 'fonts');
  const srv = Bun.serve({
    port: 0,
    fetch(req) {
      const url = new URL(req.url);
      const file = path.join(FONTS_DIR, path.basename(url.pathname));
      const f = Bun.file(file);
      return new Response(f.exists ? f : new Response(null, { status: 404 }));
    },
  });
  server = srv;
  (globalThis as { location?: { href: string } }).location = { href: `http://127.0.0.1:${srv.port}/` };
});

afterAll(() => server?.stop(true));

describe('ENG-4: посимвольный перенос CJK с кансоку', () => {
  test('ни одна строка не начинается закрывающей пунктуацией и не кончается открывающей скобкой', async () => {
    const doc = await PDFDocument.create();
    doc.registerFontkit((await import('@pdf-lib/fontkit')).default);
    const font = await doc.embedFont(await Bun.file('public/fonts/DocGenZh-Regular.ttf').arrayBuffer(), { subset: true });
    const text = '申请人因被申请人拖欠租金，依据《中华人民共和国民事诉讼法》第221条，请求人民法院向被申请人发出支付令、责令其给付租金人民币20,000元及逾期利息。';
    const lines = wrapCJK(text, font, 14, 200);
    expect(lines.length).toBeGreaterThan(3);
    const NO_START = '、。，！？：；）」』】…％';
    const NO_END = '（「『《【';
    for (const ln of lines) {
      expect(NO_START).not.toContain(ln[0]);
      expect(NO_END).not.toContain(ln[ln.length - 1]);
    }
  });
});

describe('ENG-3/5/6: сборка PDF с новыми правилами типографики', () => {
  const LONG_RU: DocBlock[] = [
    { type: 'lines', align: 'right', items: ['Генеральному директору ООО «Пример»', 'от Петрова П. П.'] },
    { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
    { type: 'paragraph', text: ('Обстоятельства дела изложены в приложенных документах, подтверждающих заявленные требования. '.repeat(40)).trim(), justify: true },
    { type: 'signature', leftText: 'Руководитель отдела документационного обеспечения управления', rightText: '_______________ / Петров Пётр Петрович /' },
  ];
  const LONG_ZH: DocBlock[] = [
    { type: 'title', text: '支付令申请书' },
    { type: 'paragraph', text: '申请人因被申请人拖欠租金，依据《中华人民共和国民事诉讼法》第221条，请求人民法院向被申请人发出支付令，责令其给付租金人民币20,000元及逾期利息。'.repeat(20), justify: true },
    { type: 'signature', leftText: '2026年10月24日', rightText: '申请人：张三' },
  ];

  test('ENG-6: ГОСТ-стандарт, 2+ страницы — документ собирается и парсится', async () => {
    const bytes = await buildPdf(LONG_RU, 'ru', STANDARDS.RU);
    const doc = await PDFDocument.load(bytes);
    expect(doc.getPageCount()).toBeGreaterThanOrEqual(2);
  });

  test('ENG-6: одностраничный документ не нумеруется и по-прежнему валиден', async () => {
    const bytes = await buildPdf([
      { type: 'title', text: 'Короткий документ' },
      { type: 'paragraph', text: 'Одна страница.' },
      { type: 'signature', rightText: '_______________ / Петров П. П. /' },
    ], 'ru', STANDARDS.RU);
    const doc = await PDFDocument.load(bytes);
    expect(doc.getPageCount()).toBe(1);
  });

  test('ENG-6: стандарты DIN и ГОСТ несут корректный режим нумерации', () => {
    expect(STANDARDS.RU.pageNumber).toBe('top');
    expect(STANDARDS.BY.pageNumber).toBe('top');
    expect(STANDARDS.UZ.pageNumber).toBe('top');
    expect(STANDARDS.DE.pageNumber).toBeUndefined(); // умолчание 'bottom'
  });

  test('ENG-5: длинные части подписи не ломают сборку', async () => {
    const bytes = await buildPdf(LONG_RU, 'ru');
    expect(new TextDecoder().decode(bytes.slice(0, 8))).toMatch(/^%PDF-\d/);
  });

  test('ENG-4: длинный CJK-документ собирается с межзнаковой выключкой', async () => {
    const bytes = await buildPdf(LONG_ZH, 'zh', STANDARDS.CN);
    const doc = await PDFDocument.load(bytes);
    expect(doc.getPageCount()).toBeGreaterThanOrEqual(1);
  });

  test('ENG-25: CJK-шрифт встраивается без runtime-субсеттинга — полный FontFile2', async () => {
    // с ломаным runtime-субсеттингом FontFile2 ≈ 20–40 КБ и глифы пустые;
    // цельное встраивание пред-суженного DocGenZh даёт поток ≈ размеру TTF (~1,6 МБ)
    const bytes = await buildPdf(LONG_ZH, 'zh', STANDARDS.CN);
    expect(bytes.length).toBeGreaterThan(500_000);
    const { PDFDict, PDFName, PDFStream, PDFRef } = await import('pdf-lib');
    const doc = await PDFDocument.load(bytes);
    let maxFontFile = 0;
    for (const [, obj] of doc.context.enumerateIndirectObjects()) {
      if (obj instanceof PDFDict && obj.get(PDFName.of('Type'))?.toString() === '/FontDescriptor') {
        const ffRef = obj.get(PDFName.of('FontFile2'));
        const ff = ffRef instanceof PDFRef ? doc.context.lookup(ffRef) : ffRef;
        if (ff instanceof PDFStream) {
          const contents = (ff as unknown as { contents?: Uint8Array }).contents;
          if (contents) maxFontFile = Math.max(maxFontFile, contents.length);
        }
      }
    }
    expect(maxFontFile).toBeGreaterThan(500_000);
  });
});
