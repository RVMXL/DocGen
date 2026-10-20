// Типы слоя данных DocGen.
// Каталог теперь статический (TypeScript-модули) — сервер и БД не нужны:
// приложение самодостаточно и генерирует документы прямо на устройстве.
import type { DocBlock, FieldDef } from '../lib/types';

/** Определение шаблона в каталоге (исходник) */
export interface TplDef {
  slug: string; // начинается с кода страны в нижнем регистре: ru-, kz-, us-…
  kind: 'STANDARD' | 'HANDWRITTEN_REQUIRED' | 'GOV_PORTAL_ONLY';
  categorySlug: string; // slug подгруппы из categories.ts
  titleRu: string;
  titleEn: string;
  /** Заголовок на языке ДОКУМЕНТА (гос. язык страны). Для ru-шаблонов = titleRu */
  titleDoc?: string;
  descRu: string;
  descEn: string;
  /** Описание на языке документа (опционально) */
  descDoc?: string;
  refRu?: string; // правовое основание (для интерфейса, ru)
  refEn?: string;
  warningRu?: string;
  warningEn?: string;
  portalUrl?: string; // для GOV_PORTAL_ONLY
  portalName?: string;
  portalDescRu?: string;
  portalDescEn?: string;
  fields: FieldDef[];
  body: DocBlock[];
}

/** Регион для группировки в онбординге */
export type Region = 'cis' | 'europe' | 'asia' | 'americas' | 'oceania';

/** Страна: docLang — государственный язык (язык шаблонов и документов) */
export interface CountryDef {
  code: string; // RU, KZ…
  nameRu: string;
  nameEn: string;
  nameI18n?: Partial<Record<string, string>>; // название страны на других языках интерфейса
  flag: string;
  region: Region;
  docLang: string; // код государственного языка (kk, az, de…)
  currencyRu: string; // валюта в именительном («тенге»)
  currencyIn: string; // валюта в предложном для фраз («тенге», «долларах США»)
  currencyEn: string;
  /** Официальные гос-порталы страны (электронные услуги) */
  portals: { nameRu: string; nameEn: string; url: string; descRu: string; descEn: string }[];
}

/** Подгруппа каталога (уровень 2) */
export interface SubgroupDef {
  slug: string;
  titleRu: string;
  titleEn: string;
  titleI18n?: Partial<Record<string, string>>;
}

/** Большая группа каталога (уровень 1) */
export interface GroupDef {
  slug: string;
  titleRu: string;
  titleEn: string;
  titleI18n?: Partial<Record<string, string>>; // названия на других языках интерфейса (≠ ru/en)
  icon: string;
  children: SubgroupDef[];
}
