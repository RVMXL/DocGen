// Генератор .docx — работает ЦЕЛИКОМ НА КЛИЕНТЕ (без сервера).
// A4, Times New Roman 14pt (для CJK/иврита — национальные шрифты), поля по
// ГОСТ Р 7.0.97-2016 (левое 30мм, правое 15мм, верх/низ 20мм), полуторный интервал.
// Для языков с письмом справа налево (иврит) абзацы — двунаправленные.
import {
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, convertMillimetersToTwip,
} from 'docx';
import type { DocBlock, DocAlign } from '../types';
import type { DocLang } from './interpolate';

/** Шрифт документа в .docx — стандартный шрифт делопроизводства соответствующей страны.
 *  Word/WPS подставят его на устройстве пользователя; сам файл шрифта не встраивается. */
const FONT_BY_LANG: Partial<Record<DocLang, string>> = {
  zh: '宋体',          // SimSun — стандарт деловой переписки КНР
  ja: 'ＭＳ 明朝',     // MS Mincho — стандарт Японии
  ko: '바탕',          // Batang — стандарт Южной Кореи
  he: 'David',        // стандартный шрифт официальных документов Израиля
};

const SIZE = 28; // полпункта → 14pt
const LINE = 360; // полуторный интервал (в 240-х долях строки)
const INDENT = 709; // абзацный отступ 1.25 см

function fontOf(docLang?: DocLang): string {
  return (docLang && FONT_BY_LANG[docLang]) || 'Times New Roman';
}

function alignOf(a: DocAlign): (typeof AlignmentType)[keyof typeof AlignmentType] {
  if (a === 'right') return AlignmentType.RIGHT;
  if (a === 'center') return AlignmentType.CENTER;
  return AlignmentType.LEFT;
}

function runs(text: string, bold: boolean, font: string): TextRun[] {
  return [new TextRun({ text, bold, font, size: SIZE })];
}

function signatureBlock(leftText: string, rightText: string, font: string): Table {
  const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideHorizontal: noBorder, insideVertical: noBorder },
    rows: [new TableRow({
      children: [
        new TableCell({
          width: { size: 45, type: WidthType.PERCENTAGE },
          children: [new Paragraph({ spacing: { before: 360, line: LINE }, children: runs(leftText, false, font) })],
        }),
        new TableCell({
          width: { size: 55, type: WidthType.PERCENTAGE },
          children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 360, line: LINE }, children: runs(rightText, false, font) })],
        }),
      ],
    })],
  });
}

export async function buildDocx(blocks: DocBlock[], docLang: DocLang = 'ru'): Promise<Blob> {
  const font = fontOf(docLang);
  const rtl = docLang === 'he';
  const children: (Paragraph | Table)[] = [];

  for (const b of blocks) {
    switch (b.type) {
      case 'lines':
        for (const item of b.items) {
          children.push(new Paragraph({
            alignment: alignOf(b.align),
            bidirectional: rtl,
            spacing: { line: LINE, after: 0 },
            children: runs(item, b.bold ?? false, font),
          }));
        }
        break;
      case 'title':
        children.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          bidirectional: rtl,
          spacing: { before: 360, after: 240, line: LINE },
          children: runs(b.text, true, font),
        }));
        break;
      case 'subtitle':
        children.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          bidirectional: rtl,
          spacing: { after: 240, line: LINE },
          children: runs(b.text, false, font),
        }));
        break;
      case 'paragraph':
        children.push(new Paragraph({
          alignment: b.justify ? AlignmentType.JUSTIFIED : AlignmentType.LEFT,
          bidirectional: rtl,
          indent: b.noIndent || rtl ? undefined : { firstLine: INDENT },
          spacing: { line: LINE, before: 120 },
          children: runs(b.text, false, font),
        }));
        break;
      case 'list':
        b.items.forEach((item, i) => {
          const prefix = b.numbered ? `${i + 1}. ` : '— ';
          children.push(new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            bidirectional: rtl,
            indent: rtl ? undefined : { firstLine: INDENT },
            spacing: { line: LINE, before: 60 },
            children: runs(prefix + item, false, font),
          }));
        });
        break;
      case 'attachment':
        children.push(new Paragraph({
          alignment: AlignmentType.LEFT,
          bidirectional: rtl,
          spacing: { before: 240, line: LINE },
          children: runs(b.label ?? 'Приложение:', false, font),
        }));
        b.items.forEach((item, i) => {
          children.push(new Paragraph({
            alignment: AlignmentType.LEFT,
            bidirectional: rtl,
            indent: rtl ? undefined : { left: INDENT },
            spacing: { line: LINE },
            children: runs(`${i + 1}. ${item}`, false, font),
          }));
        });
        break;
      case 'signature':
        children.push(signatureBlock(b.leftText ?? '{{date_today}}', b.rightText ?? 'Подпись: _______________', font));
        break;
    }
  }

  const doc = new Document({
    styles: {
      default: {
        document: {
          run: { font, size: SIZE },
        },
      },
    },
    sections: [{
      properties: {
        page: {
          size: { width: convertMillimetersToTwip(210), height: convertMillimetersToTwip(297) },
          margin: {
            top: convertMillimetersToTwip(20),
            bottom: convertMillimetersToTwip(20),
            left: convertMillimetersToTwip(30),
            right: convertMillimetersToTwip(10),
          },
        },
      },
      children,
    }],
  });

  return Packer.toBlob(doc);
}
