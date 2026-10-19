// API: парсер данных формы → итоговый .docx / .pdf (ТЗ: Шаг 3)
// Язык документа берётся из шаблона (гос. язык страны) — язык интерфейса на документ не влияет.
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import { interpolateBlocks, formatFieldValues, type DocLang } from '@/lib/docgen/interpolate';
import { buildDocx } from '@/lib/docgen/docx';
import { buildPdf } from '@/lib/docgen/pdf';
import type { DocBlock, TemplateKind } from '@/lib/types';

const DOC_LANGS: DocLang[] = ['ru', 'uk', 'be', 'kk', 'uz', 'kg', 'tg', 'hy', 'az', 'ro', 'en'];

function toDocLang(v: string): DocLang {
  return (DOC_LANGS as string[]).includes(v) ? (v as DocLang) : 'ru';
}

export async function POST(req: NextRequest) {
  try {
    const body = (await req.json()) as {
      templateId?: string;
      locale?: 'ru' | 'en'; // язык интерфейса: только для имени файла (на документ не влияет)
      format?: 'docx' | 'pdf';
      data?: Record<string, string>;
    };

    const { templateId, locale = 'ru', format = 'docx', data = {} } = body;
    if (!templateId) {
      return NextResponse.json({ error: 'templateId is required' }, { status: 400 });
    }

    const t = await db.template.findUnique({ where: { id: templateId } });
    if (!t) {
      return NextResponse.json({ error: 'Template not found' }, { status: 404 });
    }

    const kind = t.kind as TemplateKind;
    // Инфо-карточки гос-порталов файлом не генерируются (по ТЗ)
    if (kind === 'GOV_PORTAL_ONLY') {
      return NextResponse.json({ error: 'This template is a gov-portal info card' }, { status: 400 });
    }

    // КЛЮЧЕВОЕ: даты и подстановки — на языке ДОКУМЕНТА (гос. язык страны шаблона)
    const docLang = toDocLang(t.lang);
    const blocks = JSON.parse(t.bodyJson) as DocBlock[];
    const fields = JSON.parse(t.fieldsJson) as { id: string; type: string }[];
    const normalized = formatFieldValues(fields as never, data, docLang);
    const filled = interpolateBlocks(blocks, normalized, docLang);

    const stamp = new Date().toISOString().slice(0, 10);
    const base = (locale === 'ru' ? t.titleRu : t.titleEn)
      .replace(/[^\p{L}\p{N} ]/gu, '')
      .replace(/\s+/g, '_')
      .slice(0, 60);

    if (format === 'docx') {
      const buf = await buildDocx(filled);
      return new NextResponse(new Uint8Array(buf), {
        headers: {
          'Content-Type': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
          'Content-Disposition': `attachment; filename="document_${stamp}.docx"; filename*=UTF-8''${encodeURIComponent(base)}_${stamp}.docx`,
        },
      });
    }

    const bytes = await buildPdf(filled, docLang);
    return new NextResponse(new Uint8Array(bytes), {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `attachment; filename="document_${stamp}.pdf"; filename*=UTF-8''${encodeURIComponent(base)}_${stamp}.pdf`,
      },
    });
  } catch (e) {
    console.error('generate error', e);
    return NextResponse.json({ error: 'Generation failed' }, { status: 500 });
  }
}
