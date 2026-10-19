// Генерация и сохранение файлов ДОКУМЕНТА ПРЯМО НА УСТРОЙСТВЕ (без сервера):
// web, Android (Capacitor), десктоп (Electron) используют один и тот же код.
import { interpolateBlocks, formatFieldValues, toDocLang } from './docgen/interpolate';
import { buildDocx } from './docgen/docx';
import { buildPdf } from './docgen/pdf';
import type { TemplateDTO } from './types';

export type GenFormat = 'docx' | 'pdf';

/** Имя файла по заголовку шаблона + дата */
export function fileName(template: TemplateDTO, locale: 'ru' | 'en', format: GenFormat): string {
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

/** Сформировать файл документа в памяти устройства */
export async function generateFile(
  template: TemplateDTO,
  data: Record<string, string>,
  format: GenFormat
): Promise<Blob> {
  const docLang = toDocLang(template.lang);
  const filled = renderBlocks(template, data);
  if (format === 'docx') return buildDocx(filled, docLang);
  return new Blob([await buildPdf(filled, docLang)], { type: 'application/pdf' });
}

/** Сформировать и сохранить файл (загрузка браузера / Electron / WebView) */
export async function downloadGenerated(
  template: TemplateDTO,
  locale: 'ru' | 'en',
  data: Record<string, string>,
  format: GenFormat
): Promise<void> {
  const blob = await generateFile(template, data, format);
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = fileName(template, locale, format);
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
