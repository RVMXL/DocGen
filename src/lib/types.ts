// Общие типы шаблонов и документов (ТЗ: Шаг 1 — структура БД, Шаг 3 — парсер)

export type TemplateKind = 'STANDARD' | 'HANDWRITTEN_REQUIRED' | 'GOV_PORTAL_ONLY';

export type FieldType = 'text' | 'textarea' | 'date' | 'number' | 'select';

/** Определение поля интерактивной формы (хранится в Template.fieldsJson) */
export interface FieldDef {
  id: string; // ключ placeholder: applicant_name
  labelRu: string;
  labelEn: string;
  type: FieldType;
  required: boolean;
  placeholderRu?: string; // образец значения (используется и как подпись-подсказка)
  placeholderEn?: string;
  placeholderDoc?: string; // образец на языке ДОКУМЕНТА (приоритетнее placeholderRu/En — значение попадает в документ)
  hintRu?: string;
  hintEn?: string;
  half?: boolean; // половина ширины в сетке формы
  options?: string[]; // варианты для select (язык документа — значение вставляется в текст)
}

export type DocAlign = 'left' | 'center' | 'right';

/**
 * Блок структуры итогового документа (хранится в Template.bodyJson).
 * Текст блоков содержит {{placeholder}}, заменяемый парсером (Шаг 3 ТЗ).
 */
export type DocBlock =
  // шапка документа (адресат — в правом верхнем углу, стандарт делопроизводства)
  | { type: 'lines'; align: DocAlign; items: string[]; bold?: boolean }
  // заголовок документа по центру, прописными
  | { type: 'title'; text: string }
  // подзаголовок по центру (строка после заголовка)
  | { type: 'subtitle'; text: string }
  // абзац основного текста
  | { type: 'paragraph'; text: string; justify?: boolean; noIndent?: boolean }
  // перечисление (пункты требований)
  | { type: 'list'; items: string[]; numbered?: boolean }
  // приложение (копии документов)
  | { type: 'attachment'; items: string[]; label: string } // label — «Приложение:» на языке документа (гейт check-data)
  // стандартная подпись: дата слева, ФИО/подпись справа
  | { type: 'signature'; leftText?: string; rightText: string };

/** Структура каталога для клиента */
export interface TemplateDTO {
  id: string;
  slug: string;
  kind: TemplateKind;
  lang: string; // язык тела документа (гос. язык страны) — НЕ зависит от языка интерфейса
  titleRu: string;
  titleEn: string;
  titleDoc: string | null; // заголовок на языке документа (для UI ≠ ru/en)
  descRu: string;
  descEn: string;
  descDoc: string | null;
  refRu: string | null;
  refEn: string | null;
  warningRu: string | null;
  warningEn: string | null;
  portalUrl: string | null;
  portalName: string | null;
  portalDescRu: string | null;
  portalDescEn: string | null;
  fields: FieldDef[];
  body: DocBlock[]; // структура документа (для предпросмотра на клиенте)
}

export interface SubgroupDTO {
  id: string;
  slug: string;
  titleRu: string;
  titleEn: string;
  titleI18n?: Partial<Record<string, string>>; // названия на других языках интерфейса
  templates: TemplateDTO[];
}

export interface GroupDTO {
  id: string;
  slug: string;
  titleRu: string;
  titleEn: string;
  titleI18n?: Partial<Record<string, string>>;
  icon: string;
  subgroups: SubgroupDTO[];
}

export interface CatalogResponse {
  country: { code: string; nameRu: string; nameEn: string; nameI18n?: Partial<Record<string, string>>; flag: string; docLang: string; currencyRu: string; currencyEn: string };
  groups: GroupDTO[];
}

/** Валидация kind (SQLite без enum) */
export function isTemplateKind(v: string): v is TemplateKind {
  return v === 'STANDARD' || v === 'HANDWRITTEN_REQUIRED' || v === 'GOV_PORTAL_ONLY';
}
