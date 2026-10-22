// Статический каталог: сборка дерева страны из модулей данных (без сервера и БД).
import { CATEGORY_TREE } from './categories';
import { getCountry } from './countries';
import type { CatalogResponse, GroupDTO, SubgroupDTO, TemplateDTO } from '../lib/types';
import type { TplDef } from './types';

import { TEMPLATES_RU } from './templates/ru';
import { TEMPLATES_RU_WORK_CORE } from './templates/ru-work';
import { TEMPLATES_RU_WORK_A } from './templates/ru-work-a';
import { TEMPLATES_RU_WORK_B } from './templates/ru-work-b';
import { TEMPLATES_RU_WORK_C } from './templates/ru-work-c';
import { TEMPLATES_RU_WORK_D } from './templates/ru-work-d';
import { TEMPLATES_KZ } from './templates/kz';
import { TEMPLATES_BY } from './templates/by';
import { TEMPLATES_UA } from './templates/ua';
import { TEMPLATES_UZ } from './templates/uz';
import { TEMPLATES_KG } from './templates/kg';
import { TEMPLATES_TJ } from './templates/tj';
import { TEMPLATES_AM } from './templates/am';
import { TEMPLATES_AZ } from './templates/az';
import { TEMPLATES_MD } from './templates/md';
import { TEMPLATES_US } from './templates/us';
import { TEMPLATES_DE } from './templates/de';
import { TEMPLATES_FR } from './templates/fr';
import { TEMPLATES_PL } from './templates/pl';
import { TEMPLATES_CN } from './templates/cn';
import { TEMPLATES_JP } from './templates/jp';
import { TEMPLATES_KR } from './templates/kr';
import { TEMPLATES_AU } from './templates/au';
import { TEMPLATES_TR } from './templates/tr';
import { TEMPLATES_IL } from './templates/il';
import { TEMPLATES_BR } from './templates/br';
import { TEMPLATES_AR } from './templates/ar';
import { TEMPLATES_GB } from './templates/gb';
import { TEMPLATES_IT } from './templates/it';
import { TEMPLATES_ES } from './templates/es';
import { TEMPLATES_CH } from './templates/ch';
import { TEMPLATES_AT } from './templates/at';
import { TEMPLATES_IN } from './templates/in';
import { TEMPLATES_CA } from './templates/ca';
import { TEMPLATES_MX } from './templates/mx';
import { TEMPLATES_NL } from './templates/nl';
import { TEMPLATES_BE } from './templates/be';
import { TEMPLATES_PT } from './templates/pt';
import { TEMPLATES_SE } from './templates/se';
import { TEMPLATES_NO } from './templates/no';
import { TEMPLATES_DK } from './templates/dk';
import { TEMPLATES_FI } from './templates/fi';
import { TEMPLATES_GR } from './templates/gr';

const ALL: TplDef[] = [
  ...TEMPLATES_RU, ...TEMPLATES_RU_WORK_CORE, ...TEMPLATES_RU_WORK_A, ...TEMPLATES_RU_WORK_B,
  ...TEMPLATES_RU_WORK_C, ...TEMPLATES_RU_WORK_D,
  ...TEMPLATES_KZ, ...TEMPLATES_BY, ...TEMPLATES_UA, ...TEMPLATES_UZ,
  ...TEMPLATES_KG, ...TEMPLATES_TJ, ...TEMPLATES_AM, ...TEMPLATES_AZ, ...TEMPLATES_MD,
  ...TEMPLATES_US, ...TEMPLATES_DE, ...TEMPLATES_FR, ...TEMPLATES_PL,
  ...TEMPLATES_CN, ...TEMPLATES_JP, ...TEMPLATES_KR, ...TEMPLATES_AU,
  ...TEMPLATES_TR, ...TEMPLATES_IL, ...TEMPLATES_BR, ...TEMPLATES_AR,
  ...TEMPLATES_GB, ...TEMPLATES_IT, ...TEMPLATES_ES, ...TEMPLATES_CH, ...TEMPLATES_AT,
  ...TEMPLATES_IN, ...TEMPLATES_CA, ...TEMPLATES_MX,
  ...TEMPLATES_NL, ...TEMPLATES_BE, ...TEMPLATES_PT, ...TEMPLATES_SE,
  ...TEMPLATES_NO, ...TEMPLATES_DK, ...TEMPLATES_FI, ...TEMPLATES_GR,
];

const bySlug = new Map(ALL.map((t) => [t.slug, t]));

/** Все шаблоны (для проверок) */
export function allTemplates(): TplDef[] {
  return ALL;
}

export function templateBySlug(slug: string): TplDef | undefined {
  return bySlug.get(slug);
}

/** Код страны по slug шаблона: 'ru-work-vacation' → 'RU' */
export function countryOfSlug(slug: string): string {
  return slug.slice(0, 2).toUpperCase();
}

/**
 * Дерево каталога для страны. Каждый шаблон принадлежит ровно одной стране
 * (префикс slug = код страны): никаких «групповых» каталогов.
 * Язык документа шаблона = государственный язык страны.
 */
export function buildCatalog(countryCode: string): CatalogResponse | null {
  const country = getCountry(countryCode);
  if (!country) return null;

  const groups: GroupDTO[] = [];
  for (const g of CATEGORY_TREE) {
    const subgroups: SubgroupDTO[] = [];
    for (const sg of g.children) {
      const tpls = ALL
        .filter((t) => t.categorySlug === sg.slug && countryOfSlug(t.slug) === country.code)
        .sort((a, b) => a.titleRu.localeCompare(b.titleRu, 'ru'));
      if (tpls.length === 0) continue;
      subgroups.push({
        id: sg.slug,
        slug: sg.slug,
        titleRu: sg.titleRu,
        titleEn: sg.titleEn,
        titleI18n: sg.titleI18n,
        templates: tpls.map((t): TemplateDTO => ({
          id: t.slug,
          slug: t.slug,
          kind: t.kind,
          lang: country.docLang,
          titleRu: t.titleRu,
          titleEn: t.titleEn,
          titleDoc: t.titleDoc ?? null,
          descRu: t.descRu,
          descEn: t.descEn,
          descDoc: t.descDoc ?? null,
          refRu: t.refRu ?? null,
          refEn: t.refEn ?? null,
          warningRu: t.warningRu ?? null,
          warningEn: t.warningEn ?? null,
          portalUrl: t.portalUrl ?? null,
          portalName: t.portalName ?? null,
          portalDescRu: t.portalDescRu ?? null,
          portalDescEn: t.portalDescEn ?? null,
          fields: t.fields,
          body: t.body,
        })),
      });
    }
    if (subgroups.length > 0) {
      groups.push({ id: g.slug, slug: g.slug, titleRu: g.titleRu, titleEn: g.titleEn, titleI18n: g.titleI18n, icon: g.icon, subgroups });
    }
  }

  return {
    country: {
      code: country.code, nameRu: country.nameRu, nameEn: country.nameEn, nameI18n: country.nameI18n,
      flag: country.flag, docLang: country.docLang,
      currencyRu: country.currencyRu, currencyEn: country.currencyEn,
    },
    groups,
  };
}
