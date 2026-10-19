// Парсер данных интерактивной формы в структуру документа (ТЗ: Шаг 3)
// Язык документа (docLang) — государственный язык страны, НЕ зависит от языка интерфейса.
import type { DocBlock, FieldDef } from '../types';

/** Языки интерфейса (локализация UI) */
export type Locale = 'ru' | 'en';

/** Языки тела документа = государственные языки поддерживаемых стран */
export type DocLang = 'ru' | 'uk' | 'be' | 'kk' | 'uz' | 'kg' | 'tg' | 'hy' | 'az' | 'ro' | 'en';

/** Месяцы в родительном падеже для дат в делопроизводстве */
const MONTHS_GEN: Record<string, string[]> = {
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  uk: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
  be: ['студзеня', 'лютага', 'сакавіка', 'красавіка', 'траўня', 'чэрвеня',
    'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'],
  ro: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
    'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
};
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

/** Формат длинной даты: ru/uk/be — «02 ноября 2026 г.», ro — «02 noiembrie 2026», остальные — цифровой */
function longDate(y: string, mm: string, dd: string, lang: DocLang): string {
  const idx = parseInt(mm, 10) - 1;
  if (lang === 'ru') return `${dd} ${MONTHS_GEN.ru[idx]} ${y} г.`;
  if (lang === 'uk') return `${dd} ${MONTHS_GEN.uk[idx]} ${y} р.`;
  if (lang === 'be') return `${dd} ${MONTHS_GEN.be[idx]} ${y} г.`;
  if (lang === 'ro') return `${dd} ${MONTHS_GEN.ro[idx]} ${y}`;
  if (lang === 'en') return `${MONTHS_EN[idx]} ${String(parseInt(dd, 10))}, ${y}`;
  // kk, uz, kg, tg, hy, az — в делопроизводстве этих стран распространён цифровой формат
  return `${dd}.${mm}.${y}`;
}

/** ISO-дата из <input type=date> → официальная форма делопроизводства языка документа */
export function fmtDateISO(iso: string, docLang: DocLang): string {
  const m = /^(\d{4})-(\d{2})-(\d{2})$/.exec(iso.trim());
  if (!m) return iso;
  const [, y, mm, dd] = m;
  return longDate(y, mm, dd, docLang);
}

/** Приведение значений формы к документному виду (даты → длинная форма языка документа) */
export function formatFieldValues(fields: FieldDef[], data: Record<string, string>, docLang: DocLang): Record<string, string> {
  const out: Record<string, string> = { ...data };
  for (const f of fields) {
    if (f.type === 'date' && out[f.id]) out[f.id] = fmtDateISO(out[f.id], docLang);
  }
  return out;
}

/** Дата today в официальной длинной форме делопроизводства языка документа */
export function fmtToday(docLang: DocLang): string {
  const d = new Date();
  const dd = String(d.getDate()).padStart(2, '0');
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const y = String(d.getFullYear());
  if (docLang === 'ru' || docLang === 'be') return `«${dd}» ${MONTHS_GEN[docLang][d.getMonth()]} ${y} г.`;
  if (docLang === 'uk') return `«${dd}» ${MONTHS_GEN.uk[d.getMonth()]} ${y} р.`;
  if (docLang === 'ro') return `${dd} ${MONTHS_GEN.ro[d.getMonth()]} ${y}`;
  if (docLang === 'en') return `${MONTHS_EN[d.getMonth()]} ${dd}, ${y}`;
  return `${dd}.${mm}.${y}`;
}

/** Устранение двойных пунктуационных знаков после подстановки («г..» → «г.», «р..» → «р.») */
export function cleanupPunct(text: string): string {
  return text
    .replace(/([гр])\.\./g, '$1.') // рус./укр. сокращения года
    .replace(/\s+,/g, ',')
    .replace(/\s{2,}/g, ' ');
}

/**
 * Замена {{placeholder}} в тексте блока значениями из формы.
 * Пустое необязательное значение -> подчёркивание для заполнения от руки.
 * Служебный {{date_today}} -> сегодняшняя дата на языке документа.
 */
export function interpolateText(text: string, data: Record<string, string>, docLang: DocLang): string {
  return cleanupPunct(text.replace(/\{\{(\w+)\}\}/g, (_m, key: string) => {
    if (key === 'date_today') return fmtToday(docLang);
    const v = (data[key] ?? '').trim();
    return v.length > 0 ? v : '________________';
  }));
}

/** Замена во всех блоках документа */
export function interpolateBlocks(blocks: DocBlock[], data: Record<string, string>, docLang: DocLang): DocBlock[] {
  const f = (t: string) => interpolateText(t, data, docLang);
  return blocks.map((b) => {
    switch (b.type) {
      case 'lines':
        return { ...b, items: b.items.map(f) };
      case 'title':
        return { ...b, text: f(b.text) };
      case 'subtitle':
        return { ...b, text: f(b.text) };
      case 'paragraph':
        return { ...b, text: f(b.text) };
      case 'list':
        return { ...b, items: b.items.map(f) };
      case 'attachment':
        return { ...b, items: b.items.map(f) };
      case 'signature':
        return { ...b, leftText: f(b.leftText ?? '{{date_today}}'), rightText: f(b.rightText ?? 'Подпись: _______________') };
      default:
        return b;
    }
  });
}
