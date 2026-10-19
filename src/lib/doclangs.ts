// Государственные языки документов (страна → язык документа).
// Язык интерфейса выбирается отдельно и на язык документа НЕ влияет.
export interface DocLangInfo {
  native: string; // самоназвание («Azərbaycan dili»)
  ru: string; // «на азербайджанском» — для фраз интерфейса
  en: string;
}

export const DOC_LANGS: Record<string, DocLangInfo> = {
  ru: { native: 'Русский', ru: 'русском', en: 'Russian' },
  uk: { native: 'Українська', ru: 'украинском', en: 'Ukrainian' },
  be: { native: 'Беларуская', ru: 'белорусском', en: 'Belarusian' },
  kk: { native: 'Қазақша', ru: 'казахском', en: 'Kazakh' },
  uz: { native: 'Oʻzbekcha', ru: 'узбекском', en: 'Uzbek' },
  kg: { native: 'Кыргызча', ru: 'киргизском', en: 'Kyrgyz' },
  tg: { native: 'Тоҷикӣ', ru: 'таджикском', en: 'Tajik' },
  hy: { native: 'Հայերեն', ru: 'армянском', en: 'Armenian' },
  az: { native: 'Azərbaycan dili', ru: 'азербайджанском', en: 'Azerbaijani' },
  ro: { native: 'Română', ru: 'румынском', en: 'Romanian' },
  de: { native: 'Deutsch', ru: 'немецком', en: 'German' },
  fr: { native: 'Français', ru: 'французском', en: 'French' },
  pl: { native: 'Polski', ru: 'польском', en: 'Polish' },
  en: { native: 'English', ru: 'английском', en: 'English' },
  zh: { native: '中文', ru: 'китайском', en: 'Chinese' },
  ja: { native: '日本語', ru: 'японском', en: 'Japanese' },
  ko: { native: '한국어', ru: 'корейском', en: 'Korean' },
  tr: { native: 'Türkçe', ru: 'турецком', en: 'Turkish' },
  he: { native: 'עברית', ru: 'иврите', en: 'Hebrew' },
  pt: { native: 'Português', ru: 'португальском', en: 'Portuguese' },
  es: { native: 'Español', ru: 'испанском', en: 'Spanish' },
};

/** Самоназвание языка документа (или код как fallback) */
export function docLangNative(code: string): string {
  return DOC_LANGS[code]?.native ?? code;
}

/** Показывать ли чип/уведомление о языке документа (если он не совпадает с языком интерфейса) */
export function docLangDiffers(docLang: string, uiLang: string): boolean {
  return docLang !== uiLang;
}
