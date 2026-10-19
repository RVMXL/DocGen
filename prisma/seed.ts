// Заполнение БД: страны, языки, дерево категорий, шаблоны (Россия + СНГ)
import { PrismaClient } from '@prisma/client';
import { LANGUAGES, COUNTRIES, CATEGORY_TREE } from './seed-data';
import { TEMPLATES_RU_A, TplDef } from './seed-ru-a';
import { TEMPLATES_RU_B as TEMPLATES_RU_B2 } from './seed-ru-b';
import { CIS, universalTemplates } from './seed-cis';

const db = new PrismaClient();

async function main() {
  console.log('→ Языки');
  for (const l of LANGUAGES) {
    await db.language.upsert({ where: { code: l.code }, update: l, create: l });
  }

  console.log('→ Страны');
  for (const c of COUNTRIES) {
    await db.country.upsert({ where: { code: c.code }, update: c, create: c });
  }

  console.log('→ Дерево категорий');
  const catIds = new Map<string, string>();
  for (const root of CATEGORY_TREE) {
    const parent = await db.category.upsert({
      where: { slug: root.slug },
      update: { titleRu: root.titleRu, titleEn: root.titleEn, icon: root.icon, order: root.order, parentId: null },
      create: { slug: root.slug, titleRu: root.titleRu, titleEn: root.titleEn, icon: root.icon, order: root.order },
    });
    catIds.set(root.slug, parent.id);
    for (const child of root.children) {
      const sub = await db.category.upsert({
        where: { slug: child.slug },
        update: { titleRu: child.titleRu, titleEn: child.titleEn, order: child.order, parentId: parent.id },
        create: { slug: child.slug, titleRu: child.titleRu, titleEn: child.titleEn, order: child.order, parentId: parent.id },
      });
      catIds.set(child.slug, sub.id);
    }
  }

  console.log('→ Шаблоны');
  const all: TplDef[] = [
    ...TEMPLATES_RU_A,
    ...TEMPLATES_RU_B2,
  ];
  // Универсальные шаблоны СНГ: тело уже на государственном языке страны (языковые пакеты)
  for (const c of CIS) {
    all.push(...universalTemplates(c));
  }

  for (const t of all) {
    const categoryId = catIds.get(t.categorySlug);
    if (!categoryId) throw new Error(`Не найдена категория ${t.categorySlug} для ${t.slug}`);
    const countryCode = t.slug.startsWith('ru-') ? 'RU' : t.slug.slice(0, 2).toUpperCase();
    const country = COUNTRIES.find((c) => c.code === countryCode);
    if (!country) throw new Error(`Не найдена страна ${countryCode} для ${t.slug}`);
    // Язык тела документа = государственный язык страны (не язык интерфейса)
    const lang = t.lang ?? country.docLang;
    const data = {
      kind: t.kind,
      lang,
      titleRu: t.titleRu, titleEn: t.titleEn,
      descRu: t.descRu, descEn: t.descEn,
      refRu: t.refRu ?? null, refEn: t.refEn ?? null,
      warningRu: t.warningRu ?? null, warningEn: t.warningEn ?? null,
      portalUrl: t.portalUrl ?? null, portalName: t.portalName ?? null,
      portalDescRu: t.portalDescRu ?? null, portalDescEn: t.portalDescEn ?? null,
      fieldsJson: JSON.stringify(t.fields),
      bodyJson: JSON.stringify(t.body),
      categoryId,
      countryCode,
    };
    await db.template.upsert({ where: { slug: t.slug }, update: data, create: { slug: t.slug, ...data } });
  }

  const counts = await Promise.all([
    db.template.count(),
    db.category.count(),
    db.country.count(),
  ]);
  console.log(`✓ Шаблонов: ${counts[0]}, категорий: ${counts[1]}, стран: ${counts[2]}`);
}

main()
  .catch((e) => { console.error(e); process.exit(1); })
  .finally(() => db.$disconnect());
