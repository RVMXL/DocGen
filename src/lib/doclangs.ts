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
  en: { native: 'English', ru: 'английском', en: 'English' },
};

/** Самоназвание языка документа (или код как fallback) */
export function docLangNative(code: string): string {
  return DOC_LANGS[code]?.native ?? code;
}

/** Показывать ли чип/уведомление о языке документа (если он не совпадает с языком интерфейса) */
export function docLangDiffers(docLang: string, uiLang: string): boolean {
  return docLang !== uiLang;
}
