// Генератор .docx: A4, Times New Roman 14pt, поля по ГОСТ Р 7.0.97-2016
// (левое 30мм, правое 15мм, верх/низ 20мм), полуторный интервал.
import {
  Document, Packer, Paragraph, TextRun, AlignmentType, Table, TableRow, TableCell,
  WidthType, BorderStyle, convertMillimetersToTwip,
} from 'docx';
import type { DocBlock, DocAlign } from '../types';

const FONT = 'Times New Roman';
const SIZE = 28; // полпункта → 14pt
const LINE = 360; // полуторный интервал (в 240-х долях строки)
const INDENT = 709; // абзацный отступ 1.25 см

function alignOf(a: DocAlign): (typeof AlignmentType)[keyof typeof AlignmentType] {
  if (a === 'right') return AlignmentType.RIGHT;
  if (a === 'center') return AlignmentType.CENTER;
  return AlignmentType.LEFT;
}

function runs(text: string, bold = false): TextRun[] {
  return [new TextRun({ text, bold, font: FONT, size: SIZE })];
}

function signatureBlock(leftText: string, rightText: string): Table {
  const noBorder = { style: BorderStyle.NONE, size: 0, color: 'FFFFFF' };
  return new Table({
    width: { size: 100, type: WidthType.PERCENTAGE },
    borders: { top: noBorder, bottom: noBorder, left: noBorder, right: noBorder, insideHorizontal: noBorder, insideVertical: noBorder },
    rows: [new TableRow({
      children: [
        new TableCell({
          width: { size: 45, type: WidthType.PERCENTAGE },
          children: [new Paragraph({ spacing: { before: 360, line: LINE }, children: runs(leftText) })],
        }),
        new TableCell({
          width: { size: 55, type: WidthType.PERCENTAGE },
          children: [new Paragraph({ alignment: AlignmentType.RIGHT, spacing: { before: 360, line: LINE }, children: runs(rightText) })],
        }),
      ],
    })],
  });
}

export async function buildDocx(blocks: DocBlock[]): Promise<Buffer> {
  const children: (Paragraph | Table)[] = [];

  for (const b of blocks) {
    switch (b.type) {
      case 'lines':
        for (const item of b.items) {
          children.push(new Paragraph({
            alignment: alignOf(b.align),
            spacing: { line: LINE, after: 0 },
            children: runs(item, b.bold ?? false),
          }));
        }
        break;
      case 'title':
        children.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { before: 360, after: 240, line: LINE },
          children: runs(b.text, true),
        }));
        break;
      case 'subtitle':
        children.push(new Paragraph({
          alignment: AlignmentType.CENTER,
          spacing: { after: 240, line: LINE },
          children: runs(b.text, false),
        }));
        break;
      case 'paragraph':
        children.push(new Paragraph({
          alignment: b.justify ? AlignmentType.JUSTIFIED : AlignmentType.LEFT,
          indent: b.noIndent ? undefined : { firstLine: INDENT },
          spacing: { line: LINE, before: 120 },
          children: runs(b.text),
        }));
        break;
      case 'list':
        b.items.forEach((item, i) => {
          const prefix = b.numbered ? `${i + 1}. ` : '— ';
          children.push(new Paragraph({
            alignment: AlignmentType.JUSTIFIED,
            indent: { firstLine: INDENT },
            spacing: { line: LINE, before: 60 },
            children: runs(prefix + item),
          }));
        });
        break;
      case 'attachment':
        children.push(new Paragraph({
          alignment: AlignmentType.LEFT,
          spacing: { before: 240, line: LINE },
          children: runs(b.label ?? 'Приложение:', false),
        }));
        b.items.forEach((item, i) => {
          children.push(new Paragraph({
            alignment: AlignmentType.LEFT,
            indent: { left: INDENT },
            spacing: { line: LINE },
            children: runs(`${i + 1}. ${item}`),
          }));
        });
        break;
      case 'signature':
        children.push(signatureBlock(b.leftText ?? '{{date_today}}', b.rightText ?? 'Подпись: _______________'));
        break;
    }
  }

  const doc = new Document({
    sections: [{
      properties: {
        page: {
          size: { width: convertMillimetersToTwip(210), height: convertMillimetersToTwip(297) },
          margin: {
            top: convertMillimetersToTwip(20),
            bottom: convertMillimetersToTwip(20),
            left: convertMillimetersToTwip(30),
            right: convertMillimetersToTwip(15),
          },
        },
      },
      children,
    }],
  });

  return Packer.toBuffer(doc);
}
