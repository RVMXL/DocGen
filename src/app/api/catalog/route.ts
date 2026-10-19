// API: дерево каталога для выбранной страны (большие группы → подгруппы → шаблоны)
import { NextRequest, NextResponse } from 'next/server';
import { db } from '@/lib/db';
import type { GroupDTO, SubgroupDTO, TemplateDTO, TemplateKind } from '@/lib/types';

export async function GET(req: NextRequest) {
  const countryCode = req.nextUrl.searchParams.get('country') ?? 'RU';
  const country = await db.country.findUnique({ where: { code: countryCode } });
  if (!country) {
    return NextResponse.json({ error: 'Country not found' }, { status: 404 });
  }

  const roots = await db.category.findMany({
    where: { parentId: null },
    orderBy: { order: 'asc' },
    include: {
      children: { orderBy: { order: 'asc' }, include: { templates: { where: { countryCode }, orderBy: { titleRu: 'asc' } } } },
    },
  });

  const toTemplateDTO = (t: {
    id: string; slug: string; kind: string; lang: string; titleRu: string; titleEn: string;
    descRu: string; descEn: string; refRu: string | null; refEn: string | null;
    warningRu: string | null; warningEn: string | null;
    portalUrl: string | null; portalName: string | null;
    portalDescRu: string | null; portalDescEn: string | null; fieldsJson: string; bodyJson: string;
  }): TemplateDTO => ({
    id: t.id, slug: t.slug, kind: t.kind as TemplateKind, lang: t.lang,
    titleRu: t.titleRu, titleEn: t.titleEn, descRu: t.descRu, descEn: t.descEn,
    refRu: t.refRu, refEn: t.refEn, warningRu: t.warningRu, warningEn: t.warningEn,
    portalUrl: t.portalUrl, portalName: t.portalName,
    portalDescRu: t.portalDescRu, portalDescEn: t.portalDescEn,
    fields: JSON.parse(t.fieldsJson),
    body: JSON.parse(t.bodyJson),
  });

  const groups: GroupDTO[] = roots.map((root) => ({
    id: root.id, slug: root.slug, titleRu: root.titleRu, titleEn: root.titleEn, icon: root.icon ?? 'FileText',
    subgroups: root.children.map((child): SubgroupDTO => ({
      id: child.id, slug: child.slug, titleRu: child.titleRu, titleEn: child.titleEn,
      templates: child.templates.map(toTemplateDTO),
    })),
  }));

  return NextResponse.json({
    country: {
      code: country.code, nameRu: country.nameRu, nameEn: country.nameEn,
      flag: country.flag, docLang: country.docLang,
      currencyRu: country.currencyRu, currencyEn: country.currencyEn,
    },
    groups,
  });
}
