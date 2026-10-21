// Генерация и сохранение файлов ДОКУМЕНТА ПРЯМО НА УСТРОЙСТВЕ (без сервера):
// web, Android (Capacitor), десктоп (Electron) используют один и тот же код.
import { interpolateBlocks, formatFieldValues, toDocLang } from './docgen/interpolate';
import { buildDocx } from './docgen/docx';
import { buildPdf } from './docgen/pdf';
import { standardOf } from '../data/standards';
import { saveFile } from './native';
import type { Locale } from './i18n';
import type { TemplateDTO } from './types';

export type GenFormat = 'docx' | 'pdf';

/** Имя файла по заголовку шаблона + дата (для ru — русский, иначе латиница titleEn) */
export function fileName(template: TemplateDTO, locale: Locale, format: GenFormat): string {
  const stamp = new Date().toISOString().slice(0, 10);
  const base = (locale === 'ru' ? template.titleRu : template.titleEn)
    .replace(/[^\p{L}\p{N} ]/gu, '')
    .replace(/\s+/g, '_')
    .slice(0, 60);
  return `${base}_${stamp}.${format}`;
}

/** Готовые (интерполированные) блоки документа */
export function renderBlocks(template: TemplateDTO, data: Record<string, string>) {
  const docLang = toDocLang(template.lang);
  const normalized = formatFieldValues(template.fields, data, docLang);
  return interpolateBlocks(template.body, normalized, docLang);
}

/** Национальный стандарт оформления по стране шаблона (префикс slug = код страны) */
export function standardOfTemplate(template: TemplateDTO) {
  return standardOf(template.slug.slice(0, 2).toUpperCase());
}

/** Сформировать файл документа в памяти устройства */
export async function generateFile(
  template: TemplateDTO,
  data: Record<string, string>,
  format: GenFormat
): Promise<Blob> {
  const docLang = toDocLang(template.lang);
  const filled = renderBlocks(template, data);
  const std = standardOfTemplate(template);
  if (format === 'docx') return buildDocx(filled, docLang, std);
  const bytes = await buildPdf(filled, docLang, std);
  return new Blob([bytes as unknown as BlobPart], { type: 'application/pdf' });
}

/** Сформировать и сохранить файл: WebView (Share-меню), браузер/Electron (<a download>) */
export async function downloadGenerated(
  template: TemplateDTO,
  locale: Locale,
  data: Record<string, string>,
  format: GenFormat
): Promise<void> {
  const blob = await generateFile(template, data, format);
  await saveFile(blob, fileName(template, locale, format));
}
