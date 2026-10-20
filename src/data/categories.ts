// Дерево каталога: большие группы (уровень 1) → подгруппы (уровень 2).
// Общие для всех стран (ТЗ: работа, суды, медицина, образование, почта, ЖКХ + универсальные).
import type { GroupDef } from './types';

export const CATEGORY_TREE: GroupDef[] = [
  {
    slug: 'work', titleRu: 'Работа и трудовые отношения', titleEn: 'Work & employment', icon: 'Briefcase',
    children: [
      { slug: 'work-vacations', titleRu: 'Отпуска', titleEn: 'Vacations' },
      { slug: 'work-dismissal', titleRu: 'Увольнение', titleEn: 'Dismissal' },
      { slug: 'work-docs', titleRu: 'Документы с места работы', titleEn: 'Workplace documents' },
    ],
  },
  {
    slug: 'court', titleRu: 'Суды и правовая защита', titleEn: 'Courts & legal protection', icon: 'Scale',
    children: [
      { slug: 'court-claims', titleRu: 'Претензии', titleEn: 'Pre-court claims' },
      { slug: 'court-lawsuits', titleRu: 'Исковые заявления', titleEn: 'Lawsuits' },
      { slug: 'court-gov', titleRu: 'Жалобы в госорганы', titleEn: 'Complaints to authorities' },
      { slug: 'court-family', titleRu: 'Семейные и наследственные дела', titleEn: 'Family & inheritance' },
    ],
  },
  {
    slug: 'finance', titleRu: 'Налоги и банки', titleEn: 'Taxes & banking', icon: 'Landmark',
    children: [
      { slug: 'tax-docs', titleRu: 'Налоговые заявления', titleEn: 'Tax documents' },
      { slug: 'bank-docs', titleRu: 'Банки и кредиты', titleEn: 'Banks & loans' },
    ],
  },
  {
    slug: 'social', titleRu: 'Соцзащита и пенсии', titleEn: 'Social security & pensions', icon: 'HeartHandshake',
    children: [
      { slug: 'soc-benefits', titleRu: 'Пособия и выплаты', titleEn: 'Benefits & payments' },
      { slug: 'soc-pension', titleRu: 'Пенсии', titleEn: 'Pensions' },
    ],
  },
  {
    slug: 'medicine', titleRu: 'Медицина', titleEn: 'Healthcare', icon: 'HeartPulse',
    children: [
      { slug: 'med-appeals', titleRu: 'Обращения и жалобы', titleEn: 'Appeals & complaints' },
      { slug: 'med-records', titleRu: 'Медицинские документы', titleEn: 'Medical records' },
      { slug: 'med-services', titleRu: 'Платные услуги и доступ к помощи', titleEn: 'Paid services & access to care' },
      { slug: 'med-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services' },
    ],
  },
  {
    slug: 'education', titleRu: 'Образование', titleEn: 'Education', icon: 'GraduationCap',
    children: [
      { slug: 'edu-docs', titleRu: 'Заявления в школу и вуз', titleEn: 'School & university' },
      { slug: 'edu-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services' },
    ],
  },
  {
    slug: 'post', titleRu: 'Почта и доставка', titleEn: 'Post & delivery', icon: 'Mail',
    children: [
      { slug: 'post-claims', titleRu: 'Претензии и розыск', titleEn: 'Claims & search' },
      { slug: 'post-forms', titleRu: 'Бланки строгой формы', titleEn: 'Strict paper forms' },
      { slug: 'post-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services' },
    ],
  },
  {
    slug: 'utilities', titleRu: 'ЖКХ и жильё', titleEn: 'Housing & utilities', icon: 'Building2',
    children: [
      { slug: 'util-management', titleRu: 'Заявления управляющей организации и арендодателю', titleEn: 'To management company & landlord' },
      { slug: 'util-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services' },
    ],
  },
  {
    slug: 'universal', titleRu: 'Универсальные документы', titleEn: 'Universal documents', icon: 'Files',
    children: [
      { slug: 'uni-money', titleRu: 'Денежные документы', titleEn: 'Money documents' },
      { slug: 'uni-common', titleRu: 'Общие документы', titleEn: 'Common documents' },
    ],
  },
];
