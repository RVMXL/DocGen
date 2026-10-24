// Генератор .pdf — работает ЦЕЛИКОМ НА КЛИЕНТЕ (без сервера):
// web, Android (Capacitor), десктоп (Electron) — документ собирается на устройстве.
// A4; поля и кегль — по национальному стандарту страны (src/data/standards.ts):
// Россия — ГОСТ Р 7.0.97-2016 (20/20/30/10 мм, 14pt), Германия — DIN 5008,
// Китай — GB/T 9704-2012 и т.д.; абзацы по ширине, автоперенос страниц.
// Шрифт выбирается по языку ДОКУМЕНТА (гос. язык страны), загружается из /fonts.
import { PDFDocument, rgb, PDFFont, PDFPage } from 'pdf-lib';
import fontkit from '@pdf-lib/fontkit';
import type { DocBlock } from '../types';
import { isRTL, type DocLang } from './interpolate';
import type { DocStandard } from '../../data/standards';

const A4 = { w: 595.28, h: 841.89 };
const PT_PER_MM = 72 / 25.4; // pdf-lib работает в пунктах

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

// Кэшируются ТОЛЬКО БАЙТЫ шрифтов (ENG-1): объекты PDFFont привязаны к своему
// PDFDocument и не могут переиспользоваться между документами — второй PDF
// получал ссылки на ресурсы чужого контекста и собирался битым.
const fontBytesCache = new Map<DocLang, { regular: Uint8Array; bold: Uint8Array }>();

// ENG-25 (P1, обнаружено в волне 2 при эмпирической сверке pdftoppm):
// runtime-субсеттинг pdf-lib/fontkit ломает рендер CJK-шрифтов — большинство
// знаков превращается в пустые глифы (проверено на DocGenZh/Ja/Ko: с subset:true
// из абзаца остаются единичные иероглифы, с subset:false текст полный).
// Для пред-суженных Noto-подмножеств субсетирование в рантайме всё равно почти
// ничего не экономит — встраиваем шрифт целиком (PDF ≈ 1–1,5 МБ вместо 30 КБ).
// Liberation/FreeSerif субсетируются штатно и их не трогаем.
const CJK_NO_RUNTIME_SUBSET: ReadonlySet<DocLang> = new Set(['zh', 'ja', 'ko']);

/** URL шрифта: учитывает базовый путь сборки (хостинг в подкаталоге, Electron app://) */
function fontUrl(file: string): string {
  const loc = globalThis as { document?: { baseURI?: string }; location?: { href: string } };
  const base = loc.document?.baseURI || loc.location?.href || 'http://localhost/';
  return new URL('fonts/' + file, base).href;
}

async function loadFonts(pdfDoc: PDFDocument, docLang: DocLang): Promise<Fonts> {
  pdfDoc.registerFontkit(fontkit); // обязателен для КАЖДОГО нового документа
  const files = FONT_FILES[docLang] ?? DEFAULT_FONTS;
  let bytes = fontBytesCache.get(docLang);
  if (!bytes) {
    const [regular, bold] = await Promise.all([
      fetch(fontUrl(files.regular)).then((r) => r.arrayBuffer()),
      fetch(fontUrl(files.bold)).then((r) => r.arrayBuffer()),
    ]);
    bytes = { regular: new Uint8Array(regular), bold: new Uint8Array(bold) };
    fontBytesCache.set(docLang, bytes);
  }
  // embedFont вызывается для каждого нового PDFDocument (кэшировать объекты нельзя)
  const subset = !CJK_NO_RUNTIME_SUBSET.has(docLang);
  const fonts: Fonts = {
    regular: await pdfDoc.embedFont(bytes.regular, { subset }),
    bold: await pdfDoc.embedFont(bytes.bold, { subset }),
  };
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

// ─── CJK-типографика (ENG-4, аудит: волна 2) ─────────────────────────────────
// В zh/ja/ko текст почти без пробелов: разбиение по словам (wrapWords) превращает
// предложение в одно «длинное слово» и режет его посимвольно по границе — перенос
// попадает на знак препинания или открывающую скобку. Стандарты набора (kinsoku):
// закрывающая пунктуация не переносится в начало строки, открывающая — не остаётся
// в конце. Выключка по ширине — межзнаковая (растягивание промежутков между иероглифами).
const NO_LINE_START = new Set(Array.from('、。，．！？：；）】〕〉》」』…ー〜”’％‰°,.;:!?)]}%'));
const NO_LINE_END = new Set(Array.from('（【〔〈《「『“‘([{'));

/** Посимвольный перенос CJK-строки с правилами кансоку (экспорт — для юнит-теста) */
export function wrapCJK(text: string, font: PDFFont, size: number, maxWidth: number): string[] {
  const chars = Array.from(text);
  const lines: string[] = [];
  let cur = '';
  for (const ch of chars) {
    if (ch === ' ') {
      if (cur) { lines.push(cur); cur = ''; }
      continue;
    }
    if (cur && font.widthOfTextAtSize(cur + ch, size) > maxWidth) {
      if (NO_LINE_START.has(ch)) {
        // кансоку: знак не может начать строку — оставляем на текущей (лёгкий перелив)
        cur += ch;
        lines.push(cur);
        cur = '';
        continue;
      }
      if (NO_LINE_END.has(Array.from(cur).pop() ?? '')) {
        // кансоку: открывающая скобка не может остаться в конце — уносим вниз
        const carry = Array.from(cur).pop() as string;
        cur = cur.slice(0, cur.length - carry.length);
        lines.push(cur);
        cur = carry + ch;
      } else {
        lines.push(cur);
        cur = ch;
      }
    } else cur += ch;
  }
  if (cur) lines.push(cur);
  return lines;
}

/** Межзнаковая выключка CJK-строки по ширине */
function drawJustifiedCJK(page: PDFPage, line: string, font: PDFFont, size: number, x: number, y: number, width: number) {
  const chars = Array.from(line);
  if (chars.length < 2) {
    page.drawText(line, { x, y, size, font, color: rgb(0.1, 0.1, 0.1) });
    return;
  }
  const natural = font.widthOfTextAtSize(line, size);
  const extra = (width - natural) / (chars.length - 1);
  let cx = x;
  for (const ch of chars) {
    page.drawText(ch, { x: cx, y, size, font, color: rgb(0.1, 0.1, 0.1) });
    cx += font.widthOfTextAtSize(ch, size) + extra;
  }
}

export async function buildPdf(blocks: DocBlock[], docLang: DocLang = 'ru', std?: DocStandard): Promise<Uint8Array> {
  const s = std ?? {
    code: 'default', nameRu: '', nameEn: '', descRu: '', descEn: '',
    marginsMm: { top: 20, bottom: 20, left: 30, right: 15 },
    fontPt: 14, indentFirstLineMm: 12.5,
  };
  const M = {
    top: s.marginsMm.top * PT_PER_MM,
    bottom: s.marginsMm.bottom * PT_PER_MM,
    left: s.marginsMm.left * PT_PER_MM,
    right: s.marginsMm.right * PT_PER_MM,
  };
  const SIZE = s.fontPt;
  const LINE_H = SIZE * 1.5;
  const INDENT = s.indentFirstLineMm * PT_PER_MM; // красная строка стандарта (0 — блок-стиль)

  const pdfDoc = await PDFDocument.create();
  const fonts = await loadFonts(pdfDoc, docLang);
  pdfDoc.setTitle('Document');
  const rtl = isRTL(docLang);
  // ENG-4: CJK-языки набираются посимвольным переносом с кансоку
  const cjk = docLang === 'zh' || docLang === 'ja' || docLang === 'ko';

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
    const lines = cjk ? wrapCJK(raw, f, SIZE, width) : wrapWords(raw, f, SIZE, width);
    lines.forEach((ln, idx) => {
      ensureSpace(LINE_H);
      // ENG-3 (аудит): последняя строка выключенного абзаца не растягивается —
      // она выравнивается по левому краю (для RTL — по правому)
      const isLast = idx === lines.length - 1;
      const m: 'left' | 'center' | 'right' | 'just' =
        mode === 'just' && isLast ? (rtl ? 'right' : 'left')
        : rtl && mode === 'just' ? 'right' : mode;
      const lw = f.widthOfTextAtSize(ln, SIZE);
      let lx = x;
      if (m === 'center') lx = x + (width - lw) / 2;
      else if (m === 'right') lx = x + width - lw;
      if (m === 'just') {
        if (cjk) drawJustifiedCJK(page, ln, f, SIZE, x, y - SIZE, width);
        else drawJustified(page, ln, f, SIZE, x, y - SIZE, width);
      } else page.drawText(ln, { x: lx, y: y - SIZE, size: SIZE, font: f, color: rgb(0.1, 0.1, 0.1) });
      y -= LINE_H;
    });
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
        drawLine(b.label, fonts.regular, M.left, contentWidth, 'left');
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
        const lsW = fonts.regular.widthOfTextAtSize(ls, SIZE);
        const rsW = fonts.regular.widthOfTextAtSize(rs, SIZE);
        // ENG-5 (аудит): левая часть подписи не была ограничена — при длинных
        // должности/ФИО наложения двух частей друг на друга. Если в одну строку
        // не помещается (с зазором ≥ 6 pt), правая часть переносится ниже и
        // выравнивается по правому краю.
        const GAP = 6;
        if (ls && rs && lsW + GAP + rsW > contentWidth) {
          page.drawText(ls, { x: M.left, y: y - SIZE, size: SIZE, font: fonts.regular, color: rgb(0.1, 0.1, 0.1) });
          ensureSpace(LINE_H);
          page.drawText(rs, { x: A4.w - M.right - Math.min(rsW, contentWidth), y: y - LINE_H - SIZE, size: SIZE, font: fonts.regular, color: rgb(0.1, 0.1, 0.1) });
          y -= LINE_H * 2;
        } else {
          page.drawText(ls, { x: M.left, y: y - SIZE, size: SIZE, font: fonts.regular, color: rgb(0.1, 0.1, 0.1) });
          page.drawText(rs, { x: A4.w - M.right - Math.min(rsW, contentWidth * 0.55), y: y - SIZE, size: SIZE, font: fonts.regular, color: rgb(0.1, 0.1, 0.1) });
          y -= LINE_H;
        }
        break;
      }
    }
  }

  // ─── Нумерация страниц (ENG-6, аудит) ──────────────────────────────────────────
  // ГОСТ Р 7.0.97-2016 п. 6.6: номер — посредине верхнего поля, со второй страницы
  // (стандарты 'top'); западная практика — нижнее поле по центру ('bottom', умолчание).
  // Одностраничные документы не нумеруются ни по одному стандарту.
  const pageNumMode = s.pageNumber ?? 'bottom';
  if (pageNumMode !== 'none' && pdfDoc.getPageCount() > 1) {
    const pages = pdfDoc.getPages();
    const numSize = Math.max(10, SIZE - 2);
    for (let i = 1; i < pages.length; i++) {
      const label = String(i + 1);
      const lw = fonts.regular.widthOfTextAtSize(label, numSize);
      pages[i].drawText(label, {
        x: (A4.w - lw) / 2,
        y: pageNumMode === 'top' ? A4.h - 10 * PT_PER_MM : 10 * PT_PER_MM,
        size: numSize,
        font: fonts.regular,
        color: rgb(0.1, 0.1, 0.1),
      });
    }
  }

  return pdfDoc.save();
}
