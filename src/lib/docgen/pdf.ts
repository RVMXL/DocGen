// Генератор .pdf — работает ЦЕЛИКОМ НА КЛИЕНТЕ (без сервера):
// web, Android (Capacitor), десктоп (Electron) — документ собирается на устройстве.
// A4, серифный шрифт 14pt, поля 20/20/30/15 мм, абзацы по ширине, автоперенос страниц.
// Шрифт выбирается по языку ДОКУМЕНТА (гос. язык страны), загружается из /fonts.
import { PDFDocument, rgb, PDFFont, PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import type { DocBlock } from '../types';
import { isRTL, type DocLang } from './interpolate';

const A4 = { w: 595.28, h: 841.89 };
const M = { top: 56.7, bottom: 56.7, left: 85.05, right: 42.52 }; // 20/20/30/15 мм
const SIZE = 14;
const LINE_H = SIZE * 1.5;
const INDENT = 35.4; // 1.25 см

interface Fonts { regular: PDFFont; bold: PDFFont }

// Liberation Serif — кириллица (вкл. казахскую/таджикскую), латиница;
// FreeSerif — армянский (hy) и иврит (he);
// DocGenZh/Ja/Ko — подмножества Noto Serif для CJK (китайский, японский, корейский).
const FONT_FILES: Partial<Record<DocLang, { regular: string; bold: string }>> = {
  hy: { regular: 'FreeSerif-Regular.ttf', bold: 'FreeSerif-Bold.ttf' },
  he: { regular: 'FreeSerif-Regular.ttf', bold: 'FreeSerif-Bold.ttf' },
  zh: { regular: 'DocGenZh-Regular.ttf', bold: 'DocGenZh-Bold.ttf' },
  ja: { regular: 'DocGenJa-Regular.ttf', bold: 'DocGenJa-Bold.ttf' },
  ko: { regular: 'DocGenKo-Regular.ttf', bold: 'DocGenKo-Bold.ttf' },
};
const DEFAULT_FONTS = { regular: 'LiberationSerif-Regular.ttf', bold: 'LiberationSerif-Bold.ttf' };

const cache = new Map<DocLang, Fonts>();

/** URL шрифта: учитывает базовый путь сборки (хостинг в подкаталоге, Electron app://) */
function fontUrl(file: string): string {
  const loc = globalThis as { document?: { baseURI?: string }; location?: { href: string } };
  const base = loc.document?.baseURI || loc.location?.href || 'http://localhost/';
  return new URL('fonts/' + file, base).href;
}

async function loadFonts(pdfDoc: PDFDocument, docLang: DocLang): Promise<Fonts> {
  const hit = cache.get(docLang);
  if (hit) return hit;
  pdfDoc.registerFontkit(fontkit);
  const files = FONT_FILES[docLang] ?? DEFAULT_FONTS;
  const [regular, bold] = await Promise.all([
    fetch(fontUrl(files.regular)).then((r) => r.arrayBuffer()),
    fetch(fontUrl(files.bold)).then((r) => r.arrayBuffer()),
  ]);
  const fonts = {
    regular: await pdfDoc.embedFont(regular, { subset: true }),
    bold: await pdfDoc.embedFont(bold, { subset: true }),
  };
  cache.set(docLang, fonts);
  return fonts;
}

/**
 * Подготовка строки иврита к отрисовке (pdf-lib + fontkit).
 *
 * Эмпирика (проверено рендерами MuPDF/Poppler): fontkit при обнаружении
 * RTL-символов в строке разворачивает её ПОСИМВОЛЬНО ЦЕЛИКОМ (наивный BiDi
 * без сохранения LTR-последовательностей). Поэтому:
 *   1) логический порядок → визуальный (упрощённый UBA: полный разворот строки
 *      с восстановлением латиницы/цифр);
 *   2) компенсация наивного BiDi fontkit — ещё один полный разворот.
 * Итог: drawText получает fullreverse(visual), fontkit разворачивает обратно,
 * и на странице оказывается корректный визуальный порядок.
 * Строки без иврита не трогаем — fontkit их не изменяет.
 */
function rtlShape(line: string): string {
  if (!/[\u0590-\u05FF]/.test(line)) return line;
  const rev = Array.from(line).reverse().join('');
  const visual = rev.replace(/[A-Za-z0-9@#$%&/\\:;.,+\-–—()"'ʼ`*+=№€₪]{1,}/g, (seg) => Array.from(seg).reverse().join(''));
  return Array.from(visual).reverse().join('');
}

/** Разбивка строки на слова с учётом ширины */
function wrapWords(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const words = text.split(/\s+/).filter(Boolean);
  const lines: string[] = [];
  let cur = '';
  for (const w of words) {
    const probe = cur ? `${cur} ${w}` : w;
    if (font.widthOfTextAtSize(probe, size) <= maxWidth) {
      cur = probe;
    } else {
      if (cur) lines.push(cur);
      // очень длинное слово — жёсткая резка
      if (font.widthOfTextAtSize(w, size) > maxWidth) {
        let chunk = '';
        for (const ch of w) {
          if (font.widthOfTextAtSize(chunk + ch, size) > maxWidth) { lines.push(chunk); chunk = ch; }
          else chunk += ch;
        }
        cur = chunk;
      } else cur = w;
    }
  }
  if (cur) lines.push(cur);
  return lines;
}

function drawJustified(page: PDFPage, line: string, font: PDFFont, size: number, x: number, y: number, width: number) {
  const words = line.split(' ');
  const natural = font.widthOfTextAtSize(line, size);
  const gapCount = Math.max(1, words.length - 1);
  const extra = (width - natural) / gapCount;
  let cx = x;
  for (const w of words) {
    page.drawText(w, { x: cx, y, size, font, color: rgb(0.1, 0.1, 0.1) });
    cx += font.widthOfTextAtSize(w, size) + font.widthOfTextAtSize(' ', size) + extra;
  }
}

export async function buildPdf(blocks: DocBlock[], docLang: DocLang = 'ru'): Promise<Uint8Array> {
  const pdfDoc = await PDFDocument.create();
  const fonts = await loadFonts(pdfDoc, docLang);
  pdfDoc.setTitle('Document');
  const rtl = isRTL(docLang);

  let page = pdfDoc.addPage([A4.w, A4.h]);
  let y = A4.h - M.top;

  const contentWidth = A4.w - M.left - M.right;
  const ensureSpace = (needed: number) => {
    if (y - needed < M.bottom) {
      page = pdfDoc.addPage([A4.w, A4.h]);
      y = A4.h - M.top;
    }
  };

  // для RTL: строка предварительно переводится в визуальный порядок, поэтому
  // отрисовка остаётся слева направо; выравнивание соответствует указанному,
  // а выключка по ширине заменяется правым выравниванием (стандарт иврита)
  const drawLine = (text: string, f: PDFFont, x: number, width: number, mode: 'left' | 'center' | 'right' | 'just') => {
    const raw = rtl ? rtlShape(text) : text;
    const lines = wrapWords(raw, f, SIZE, width);
    for (const ln of lines) {
      ensureSpace(LINE_H);
      const m: 'left' | 'center' | 'right' | 'just' = rtl && mode === 'just' ? 'right' : mode;
      const lw = f.widthOfTextAtSize(ln, SIZE);
      let lx = x;
      if (m === 'center') lx = x + (width - lw) / 2;
      else if (m === 'right') lx = x + width - lw;
      if (m === 'just') drawJustified(page, ln, f, SIZE, x, y - SIZE, width);
      else page.drawText(ln, { x: lx, y: y - SIZE, size: SIZE, font: f, color: rgb(0.1, 0.1, 0.1) });
      y -= LINE_H;
    }
  };

  for (const b of blocks) {
    switch (b.type) {
      case 'lines':
        for (const item of b.items) {
          if (item.trim() === '') { y -= LINE_H * 0.5; continue; }
          drawLine(item, fonts.regular, M.left, contentWidth, b.align === 'left' ? 'left' : b.align);
        }
        break;
      case 'title': {
        ensureSpace(LINE_H * 2);
        y -= 18;
        drawLine(b.text, fonts.bold, M.left, contentWidth, 'center');
        y -= 12;
        break;
      }
      case 'subtitle':
        drawLine(b.text, fonts.regular, M.left, contentWidth, 'center');
        y -= 12;
        break;
      case 'paragraph': {
        y -= 6;
        const x = b.noIndent ? M.left : M.left + INDENT;
        const w = b.noIndent ? contentWidth : contentWidth - INDENT;
        drawLine(b.text, fonts.regular, x, w, b.justify ? 'just' : 'left');
        y -= 2;
        break;
      }
      case 'list':
        b.items.forEach((item, i) => {
          y -= 3;
          const prefix = b.numbered ? `${i + 1}. ` : '— ';
          drawLine(prefix + item, fonts.regular, M.left + INDENT, contentWidth - INDENT, 'just');
        });
        break;
      case 'attachment': {
        y -= 12;
        drawLine(b.label ?? 'Приложение:', fonts.regular, M.left, contentWidth, 'left');
        b.items.forEach((item, i) => {
          drawLine(`${i + 1}. ${item}`, fonts.regular, M.left + INDENT, contentWidth - INDENT, 'left');
        });
        break;
      }
      case 'signature': {
        ensureSpace(LINE_H * 2.5);
        y -= 18;
        let left = b.leftText ?? '';
        let right = b.rightText ?? '';
        if (rtl) { [left, right] = [right, left]; }
        const ls = rtl ? rtlShape(left) : left;
        const rs = rtl ? rtlShape(right) : right;
        page.drawText(ls, { x: M.left, y: y - SIZE, size: SIZE, font: fonts.regular, color: rgb(0.1, 0.1, 0.1) });
        const rw = fonts.regular.widthOfTextAtSize(rs, SIZE);
        page.drawText(rs, { x: A4.w - M.right - Math.min(rw, contentWidth * 0.55), y: y - SIZE, size: SIZE, font: fonts.regular, color: rgb(0.1, 0.1, 0.1) });
        y -= LINE_H;
        break;
      }
    }
  }

  return pdfDoc.save();
}
