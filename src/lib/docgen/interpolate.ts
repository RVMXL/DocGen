// Парсер данных интерактивной формы в структуру документа (ТЗ: Шаг 3)
// Язык документа (docLang) — государственный язык страны, НЕ зависит от языка интерфейса.
import type { DocBlock, FieldDef } from '../types';

/** Языки интерфейса (локализация UI) */
export type Locale = 'ru' | 'en';

/**
 * Языки тела документа = государственные языки поддерживаемых стран.
 * ru/uk/be/kk/uz/kg/tg/hy/az/ro — Россия и СНГ;
 * de/fr/pl/it/nl/sv/no/da/fi/el — Европа;
 * en — США, Великобритания, Канада, Индия, Австралия;
 * zh/ja/ko — Китай/Япония/Корея; tr — Турция; he — Израиль;
 * pt — Бразилия, Португалия; es — Испания, Аргентина, Мексика.
 */
export type DocLang =
  | 'ru' | 'uk' | 'be' | 'kk' | 'uz' | 'kg' | 'tg' | 'hy' | 'az' | 'ro'
  | 'de' | 'fr' | 'pl' | 'en' | 'zh' | 'ja' | 'ko' | 'tr' | 'he' | 'pt' | 'es' | 'it'
  | 'nl' | 'sv' | 'no' | 'da' | 'fi' | 'el';

export const DOC_LANG_LIST: DocLang[] = [
  'ru', 'uk', 'be', 'kk', 'uz', 'kg', 'tg', 'hy', 'az', 'ro',
  'de', 'fr', 'pl', 'en', 'zh', 'ja', 'ko', 'tr', 'he', 'pt', 'es', 'it',
  'nl', 'sv', 'no', 'da', 'fi', 'el',
];

export function toDocLang(v: string): DocLang {
  return (DOC_LANG_LIST as string[]).includes(v) ? (v as DocLang) : 'ru';
}

/** Языки с письмом справа налево (требуют BiDi-обработки в PDF) */
export function isRTL(lang: DocLang): boolean {
  return lang === 'he';
}

/** Языки, где длинные даты в родительном падеже / согласовании */
const MONTHS_GEN: Partial<Record<DocLang, string[]>> = {
  ru: ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня',
    'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'],
  uk: ['січня', 'лютого', 'березня', 'квітня', 'травня', 'червня',
    'липня', 'серпня', 'вересня', 'жовтня', 'листопада', 'грудня'],
  be: ['студзеня', 'лютага', 'сакавіка', 'красавіка', 'траўня', 'чэрвеня',
    'ліпеня', 'жніўня', 'верасня', 'кастрычніка', 'лістапада', 'снежня'],
  ro: ['ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
    'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'],
  de: ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'],
  fr: ['janvier', 'février', 'mars', 'avril', 'mai', 'juin',
    'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre'],
  pl: ['stycznia', 'lutego', 'marca', 'kwietnia', 'maja', 'czerwca',
    'lipca', 'sierpnia', 'września', 'października', 'listopada', 'grudnia'],
  pt: ['janeiro', 'fevereiro', 'março', 'abril', 'maio', 'junho',
    'julho', 'agosto', 'setembro', 'outubro', 'novembro', 'dezembro'],
  es: ['enero', 'febrero', 'marzo', 'abril', 'mayo', 'junio',
    'julio', 'agosto', 'septiembre', 'octubre', 'noviembre', 'diciembre'],
  tr: ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran',
    'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'],
  it: ['gennaio', 'febbraio', 'marzo', 'aprile', 'maggio', 'giugno',
    'luglio', 'agosto', 'settembre', 'ottobre', 'novembre', 'dicembre'],
  // nl — существительное без предлога после числа; датская/норвежская конвенция — точка после числа
  nl: ['januari', 'februari', 'maart', 'april', 'mei', 'juni',
    'juli', 'augustus', 'september', 'oktober', 'november', 'december'],
  sv: ['januari', 'februari', 'mars', 'april', 'maj', 'juni',
    'juli', 'augusti', 'september', 'oktober', 'november', 'december'],
  no: ['januar', 'februar', 'mars', 'april', 'mai', 'juni',
    'juli', 'august', 'september', 'oktober', 'november', 'desember'],
  da: ['januar', 'februar', 'marts', 'april', 'maj', 'juni',
    'juli', 'august', 'september', 'oktober', 'november', 'december'],
  // fi — партитив: «1. tammikuuta 2026»
  fi: ['tammikuuta', 'helmikuuta', 'maaliskuuta', 'huhtikuuta', 'toukokuuta', 'kesäkuuta',
    'heinäkuuta', 'elokuuta', 'syyskuuta', 'lokakuuta', 'marraskuuta', 'joulukuuta'],
  // el — родительный падеж: «1 Ιανουαρίου 2026»
  el: ['Ιανουαρίου', 'Φεβρουαρίου', 'Μαρτίου', 'Απριλίου', 'Μαΐου', 'Ιουνίου',
    'Ιουλίου', 'Αυγούστου', 'Σεπτεμβρίου', 'Οκτωβρίου', 'Νοεμβρίου', 'Δεκεμβρίου'],
};
const MONTHS_EN = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'];

/** Формат длинной даты по стандартам делопроизводства языка документа */
function longDate(y: string, mm: string, dd: string, lang: DocLang): string {
  const idx = parseInt(mm, 10) - 1;
  const d = String(parseInt(dd, 10)); // без ведущего нуля для словесных форм
  switch (lang) {
    case 'ru': return `${dd} ${MONTHS_GEN.ru![idx]} ${y} г.`;
    case 'uk': return `${dd} ${MONTHS_GEN.uk![idx]} ${y} р.`;
    case 'be': return `${dd} ${MONTHS_GEN.be![idx]} ${y} г.`;
    case 'ro': return `${dd} ${MONTHS_GEN.ro![idx]} ${y}`;
    case 'de': return `${d}. ${MONTHS_GEN.de![idx]} ${y}`;
    case 'fr': return `${d} ${MONTHS_GEN.fr![idx]} ${y}`;
    case 'pl': return `${d} ${MONTHS_GEN.pl![idx]} ${y} r.`;
    case 'pt': return `${d} de ${MONTHS_GEN.pt![idx]} de ${y}`;
    case 'es': return `${d} de ${MONTHS_GEN.es![idx]} de ${y}`;
    case 'tr': return `${d} ${MONTHS_GEN.tr![idx]} ${y}`;
    case 'it': return `${d === '1' ? '1º' : d} ${MONTHS_GEN.it![idx]} ${y}`;
    case 'nl': return `${d} ${MONTHS_GEN.nl![idx]} ${y}`;
    case 'sv': return `${d} ${MONTHS_GEN.sv![idx]} ${y}`;
    case 'no': return `${d}. ${MONTHS_GEN.no![idx]} ${y}`;
    case 'da': return `${d}. ${MONTHS_GEN.da![idx]} ${y}`;
    case 'fi': return `${d}. ${MONTHS_GEN.fi![idx]} ${y}`;
    case 'el': return `${d} ${MONTHS_GEN.el![idx]} ${y}`;
    case 'en': return `${MONTHS_EN[idx]} ${d}, ${y}`;
    case 'zh': case 'ja': return `${y}年${parseInt(mm, 10)}月${d}日`;
    case 'ko': return `${y}년 ${parseInt(mm, 10)}월 ${d}일`;
    // kk, uz, kg, tg, hy, az, he — в делопроизводстве распространён цифровой формат
    default: return `${dd}.${mm}.${y}`;
  }
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
  const dNum = String(d.getDate());
  const mm = String(d.getMonth() + 1).padStart(2, '0');
  const y = String(d.getFullYear());
  const m = d.getMonth();
  switch (docLang) {
    case 'ru': case 'be': return `«${dd}» ${MONTHS_GEN[docLang]![m]} ${y} г.`;
    case 'uk': return `«${dd}» ${MONTHS_GEN.uk![m]} ${y} р.`;
    case 'ro': return `${dd} ${MONTHS_GEN.ro![m]} ${y}`;
    case 'de': return `${dNum}. ${MONTHS_GEN.de![m]} ${y}`;
    case 'fr': return `${dNum} ${MONTHS_GEN.fr![m]} ${y}`;
    case 'pl': return `${dNum} ${MONTHS_GEN.pl![m]} ${y} r.`;
    case 'pt': return `${dNum} de ${MONTHS_GEN.pt![m]} de ${y}`;
    case 'es': return `${dNum} de ${MONTHS_GEN.es![m]} de ${y}`;
    case 'tr': return `${dNum} ${MONTHS_GEN.tr![m]} ${y}`;
    case 'it': return `${dNum === '1' ? '1º' : dNum} ${MONTHS_GEN.it![m]} ${y}`;
    case 'nl': return `${dNum} ${MONTHS_GEN.nl![m]} ${y}`;
    case 'sv': return `${dNum} ${MONTHS_GEN.sv![m]} ${y}`;
    case 'no': return `${dNum}. ${MONTHS_GEN.no![m]} ${y}`;
    case 'da': return `${dNum}. ${MONTHS_GEN.da![m]} ${y}`;
    case 'fi': return `${dNum}. ${MONTHS_GEN.fi![m]} ${y}`;
    case 'el': return `${dNum} ${MONTHS_GEN.el![m]} ${y}`;
    case 'en': return `${MONTHS_EN[m]} ${dNum}, ${y}`;
    case 'zh': case 'ja': return `${y}年${m + 1}月${dNum}日`;
    case 'ko': return `${y}년 ${m + 1}월 ${dNum}일`;
    default: return `${dd}.${mm}.${y}`;
  }
}

/** Устранение двойных пунктуационных знаков после подстановки («г..» → «г.», «р..» → «р.») */
export function cleanupPunct(text: string): string {
  return text
    .replace(/([гр])\.\./g, '$1.') // рус./укр. сокращения года
    .replace(/([rgjr])\.\./g, '$1.') // de/fr/pl сокращения года
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
