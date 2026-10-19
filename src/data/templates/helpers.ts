// Общие хелперы для страновых файлов шаблонов.
import type { DocBlock, FieldDef } from '../../lib/types';

/** Поле формы (required по умолчанию true) */
export const F = (
  id: string,
  labelRu: string,
  labelEn: string,
  type: FieldDef['type'],
  opts: Partial<FieldDef> = {}
): FieldDef => ({ id, labelRu, labelEn, type, required: true, ...opts });

/** Шапка «кому/от кого» в правом верхнем углу (стандарт делопроизводства) */
export const hdr = (to: string[], from: string[]): DocBlock => ({
  type: 'lines', align: 'right', items: [...to, '', ...from],
});

/** Шапка заявления работодателю: адресат справа, заявитель ниже */
export const workHdr = (fromPrefixed: boolean): DocBlock => ({
  type: 'lines',
  align: 'right',
  items: ['{{head_position}}', '{{org_name}}', '{{head_name}}', '',
    ...(fromPrefixed ? ['{{applicant_position}}'] : []),
    '{{applicant_name}}'],
});

/** Стандартная подпись */
export const stdSign = (namePh: string): DocBlock => ({
  type: 'signature', rightText: `_______________ / ${namePh} /`,
});

/** Обращение в суд: суд/стороны справа (общая схема континентального процесса) */
export const courtHdr = (extra: string[] = []): DocBlock => ({
  type: 'lines',
  align: 'right',
  items: ['{{court_name}}', '', ...extra, '', '{{plaintiff_name}}', '{{plaintiff_address}}'],
});
