/* Антирегресс ENG-1 (аудит 2026-10-24, P1): кэш шрифтов pdf-lib между документами.
 *
 * Дефект: кэш хранил объекты PDFFont, привязанные к первому PDFDocument. Второй PDF
 * того же языка в том же процессе собирался битым (1 417 б, 0 объектов /FontFile2,
 * пустая страница). Сценарий массовый: «скачал PDF → поправил поле → скачал снова».
 *
 * Тест: 10 генераций подряд одного языка в одном процессе — каждый документ валиден:
 * размер > 8 КБ и содержит ≥1 объект /FontFile2 (встроенный TrueType-шрифт).
 * Критерий аудита: pdftoppm без ошибок на серии из 10 генераций (эмпирическая
 * сверка выполнялась вручную при закрытии находки).
 */
import { describe, test, expect, beforeAll, afterAll } from 'bun:test';
import { PDFDocument, PDFDict, PDFName } from 'pdf-lib';
import { buildPdf } from '../src/lib/docgen/pdf';
import type { DocBlock } from '../src/lib/types';

let server: { stop(closeActiveConnections?: boolean): void } | null = null;

beforeAll(async () => {
  const path = await import('node:path');
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
  server = srv;
  (globalThis as { location?: { href: string } }).location = { href: `http://127.0.0.1:${srv.port}/` };
});

afterAll(() => server?.stop(true));

const BLOCKS: Record<'zh' | 'ru', DocBlock[]> = {
  zh: [
    { type: 'lines', align: 'right', items: ['北京市朝阳区人民法院', '', '申请人：张三'] },
    { type: 'title', text: '支付令申请书' },
    { type: 'paragraph', text: '申请人因被申请人拖欠租金，依据《中华人民共和国民事诉讼法》第221条，请求人民法院向被申请人发出支付令，责令其给付租金人民币20,000元及逾期利息。本申请所述债权债务关系明确，请求依法审查并发出支付令。', justify: true },
    { type: 'list', items: ['申请书副本一份', '租赁合同复印件一份', '转账记录一份'] },
    { type: 'signature', leftText: '2026年10月24日', rightText: '申请人：张三' },
  ],
  ru: [
    { type: 'lines', align: 'right', items: ['Генеральному директору ООО «Пример»', 'Иванову И. И.', 'от Петрова П. П.'] },
    { type: 'title', text: 'ЗАЯВЛЕНИЕ' },
    { type: 'paragraph', text: 'Прошу рассмотреть настоящее заявление и предоставить ответ в установленный законом срок. Основание обращения изложено в приложенных документах, подтверждающих обстоятельства, на которые ссылаюсь. ' + 'Дополнительный текст для проверки переноса строк и выключки абзаца. '.repeat(6), justify: true },
    { type: 'signature', leftText: '«__» __________ 2026 г.', rightText: '_______________ / Петров П. П. /' },
  ],
};

describe('ENG-1: повторная генерация PDF одного языка в одном процессе', () => {
  /** Дескрипторы встроенных шрифтов: объекты с /Type /FontDescriptor (словари pdf-lib
   *  пакует в compressed object streams, поэтому считаем после загрузки) */
  async function embeddedFontDescriptors(bytes: Uint8Array): Promise<number> {
    const doc = await PDFDocument.load(bytes);
    let n = 0;
    for (const [, obj] of doc.context.enumerateIndirectObjects()) {
      if (obj instanceof PDFDict && obj.get(PDFName.of('Type'))?.toString() === '/FontDescriptor') n++;
    }
    return n;
  }

  for (const lang of ['zh', 'ru'] as const) {
    test(`серия из 10 PDF (${lang}): каждый валиден и содержит встроенный шрифт`, async () => {
      const sizes: number[] = [];
      for (let i = 0; i < 10; i++) {
        const bytes = await buildPdf(BLOCKS[lang], lang);
        const head = new TextDecoder().decode(bytes.slice(0, 8));
        expect(head).toMatch(/^%PDF-\d/);
        // битый «второй» документ из воспроизведения аудита был 1 417 б без шрифтов
        expect(bytes.length).toBeGreaterThan(8000);
        // pdf-lib пакует словари в compressed object streams — считаем дескрипторы
        // встроенных шрифтов после загрузки документа
        expect(await embeddedFontDescriptors(bytes)).toBeGreaterThanOrEqual(1);
        sizes.push(bytes.length);
      }
      // все документы серии сопоставимы по размеру (нет деградации)
      const min = Math.min(...sizes);
      const max = Math.max(...sizes);
      expect(max / min).toBeLessThan(3);
    });
  }
});
