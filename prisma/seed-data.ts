// Справочники: языки, страны (МVP: Россия + СНГ), дерево категорий
// Критическое ограничение ТЗ: официальные ссылки на гос-порталы проверены (октябрь 2026).

export const LANGUAGES = [
  { code: 'ru', nativeName: 'Русский', available: true, order: 1 },
  { code: 'en', nativeName: 'English', available: true, order: 2 },
  { code: 'kk', nativeName: 'Қазақша', available: false, order: 10 },
  { code: 'be', nativeName: 'Беларуская', available: false, order: 11 },
  { code: 'uz', nativeName: 'Oʻzbekcha', available: false, order: 12 },
];

export const COUNTRIES = [
  // --- MVP: Россия и СНГ (приоритет первого этапа по ТЗ) ---
  // docLang — государственный язык страны: им определяются язык шаблонов и итогового документа
  // (язык интерфейса выбирается отдельно в онбординге и на документы не влияет).
  { code: 'RU', nameRu: 'Россия', nameEn: 'Russia', flag: '🇷🇺', region: 'CIS', docLang: 'ru', currencyRu: 'рубль', currencyEn: 'ruble', available: true, order: 1 },
  { code: 'KZ', nameRu: 'Казахстан', nameEn: 'Kazakhstan', flag: '🇰🇿', region: 'CIS', docLang: 'kk', currencyRu: 'тенге', currencyEn: 'tenge', available: true, order: 2 },
  { code: 'BY', nameRu: 'Беларусь', nameEn: 'Belarus', flag: '🇧🇾', region: 'CIS', docLang: 'be', currencyRu: 'белорусский рубль', currencyEn: 'Belarusian ruble', available: true, order: 3 },
  { code: 'UA', nameRu: 'Украина', nameEn: 'Ukraine', flag: '🇺🇦', region: 'CIS', docLang: 'uk', currencyRu: 'гривна', currencyEn: 'hryvnia', available: true, order: 4 },
  { code: 'UZ', nameRu: 'Узбекистан', nameEn: 'Uzbekistan', flag: '🇺🇿', region: 'CIS', docLang: 'uz', currencyRu: 'сум', currencyEn: 'sum', available: true, order: 5 },
  { code: 'KG', nameRu: 'Кыргызстан', nameEn: 'Kyrgyzstan', flag: '🇰🇬', region: 'CIS', docLang: 'kg', currencyRu: 'сом', currencyEn: 'som', available: true, order: 6 },
  { code: 'TJ', nameRu: 'Таджикистан', nameEn: 'Tajikistan', flag: '🇹🇯', region: 'CIS', docLang: 'tg', currencyRu: 'сомони', currencyEn: 'somoni', available: true, order: 7 },
  { code: 'AM', nameRu: 'Армения', nameEn: 'Armenia', flag: '🇦🇲', region: 'CIS', docLang: 'hy', currencyRu: 'драм', currencyEn: 'dram', available: true, order: 8 },
  { code: 'AZ', nameRu: 'Азербайджан', nameEn: 'Azerbaijan', flag: '🇦🇿', region: 'CIS', docLang: 'az', currencyRu: 'манат', currencyEn: 'manat', available: true, order: 9 },
  { code: 'MD', nameRu: 'Молдова', nameEn: 'Moldova', flag: '🇲🇩', region: 'CIS', docLang: 'ro', currencyRu: 'лей', currencyEn: 'leu', available: true, order: 10 },
  // --- Бэклог по ТЗ: США, Европа, Китай, Япония, Ю.Корея, Австралия, Турция, Израиль, Бразилия, Аргентина ---
  { code: 'US', nameRu: 'США', nameEn: 'United States', flag: '🇺🇸', region: 'BACKLOG', currencyRu: 'доллар', currencyEn: 'dollar', available: false, order: 100 },
  { code: 'DE', nameRu: 'Европа (ЕС)', nameEn: 'Europe (EU)', flag: '🇪🇺', region: 'BACKLOG', currencyRu: 'евро', currencyEn: 'euro', available: false, order: 101 },
  { code: 'CN', nameRu: 'Китай', nameEn: 'China', flag: '🇨🇳', region: 'BACKLOG', currencyRu: 'юань', currencyEn: 'yuan', available: false, order: 102 },
  { code: 'JP', nameRu: 'Япония', nameEn: 'Japan', flag: '🇯🇵', region: 'BACKLOG', currencyRu: 'иена', currencyEn: 'yen', available: false, order: 103 },
  { code: 'KR', nameRu: 'Южная Корея', nameEn: 'South Korea', flag: '🇰🇷', region: 'BACKLOG', currencyRu: 'вона', currencyEn: 'won', available: false, order: 104 },
  { code: 'AU', nameRu: 'Австралия', nameEn: 'Australia', flag: '🇦🇺', region: 'BACKLOG', currencyRu: 'австралийский доллар', currencyEn: 'Australian dollar', available: false, order: 105 },
  { code: 'TR', nameRu: 'Турция', nameEn: 'Turkey', flag: '🇹🇷', region: 'BACKLOG', currencyRu: 'лира', currencyEn: 'lira', available: false, order: 106 },
  { code: 'IL', nameRu: 'Израиль', nameEn: 'Israel', flag: '🇮🇱', region: 'BACKLOG', currencyRu: 'шекель', currencyEn: 'shekel', available: false, order: 107 },
  { code: 'BR', nameRu: 'Бразилия', nameEn: 'Brazil', flag: '🇧🇷', region: 'BACKLOG', currencyRu: 'реал', currencyEn: 'real', available: false, order: 108 },
  { code: 'AR', nameRu: 'Аргентина', nameEn: 'Argentina', flag: '🇦🇷', region: 'BACKLOG', currencyRu: 'песо', currencyEn: 'peso', available: false, order: 109 },
];

/** Большие группы (уровень 1) и подгруппы (уровень 2) */
export const CATEGORY_TREE: {
  slug: string; titleRu: string; titleEn: string; icon: string; order: number;
  children: { slug: string; titleRu: string; titleEn: string; order: number }[];
}[] = [
  {
    slug: 'work', titleRu: 'Работа и трудовые отношения', titleEn: 'Work & employment', icon: 'Briefcase', order: 1,
    children: [
      { slug: 'work-vacations', titleRu: 'Отпуска', titleEn: 'Vacations', order: 1 },
      { slug: 'work-dismissal', titleRu: 'Увольнение', titleEn: 'Dismissal', order: 2 },
      { slug: 'work-docs', titleRu: 'Документы с места работы', titleEn: 'Workplace documents', order: 3 },
    ],
  },
  {
    slug: 'court', titleRu: 'Суды и правовая защита', titleEn: 'Courts & legal protection', icon: 'Scale', order: 2,
    children: [
      { slug: 'court-claims', titleRu: 'Претензии', titleEn: 'Pre-court claims', order: 1 },
      { slug: 'court-lawsuits', titleRu: 'Исковые заявления', titleEn: 'Lawsuits', order: 2 },
    ],
  },
  {
    slug: 'medicine', titleRu: 'Медицина', titleEn: 'Healthcare', icon: 'HeartPulse', order: 3,
    children: [
      { slug: 'med-appeals', titleRu: 'Обращения и жалобы', titleEn: 'Appeals & complaints', order: 1 },
      { slug: 'med-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services', order: 2 },
    ],
  },
  {
    slug: 'education', titleRu: 'Образование', titleEn: 'Education', icon: 'GraduationCap', order: 4,
    children: [
      { slug: 'edu-docs', titleRu: 'Заявления в школу и вуз', titleEn: 'School & university', order: 1 },
      { slug: 'edu-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services', order: 2 },
    ],
  },
  {
    slug: 'post', titleRu: 'Почта и доставка', titleEn: 'Post & delivery', icon: 'Mail', order: 5,
    children: [
      { slug: 'post-claims', titleRu: 'Претензии и розыск', titleEn: 'Claims & search', order: 1 },
      { slug: 'post-forms', titleRu: 'Бланки строгой формы', titleEn: 'Strict paper forms', order: 2 },
      { slug: 'post-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services', order: 3 },
    ],
  },
  {
    slug: 'utilities', titleRu: 'ЖКХ', titleEn: 'Housing & utilities', icon: 'Building2', order: 6,
    children: [
      { slug: 'util-management', titleRu: 'Заявления в управляющую организацию', titleEn: 'To management company', order: 1 },
      { slug: 'util-online', titleRu: 'Онлайн-сервисы', titleEn: 'Online services', order: 2 },
    ],
  },
  {
    slug: 'universal', titleRu: 'Универсальные документы', titleEn: 'Universal documents', icon: 'Files', order: 7,
    children: [
      { slug: 'uni-money', titleRu: 'Денежные документы', titleEn: 'Money documents', order: 1 },
      { slug: 'uni-common', titleRu: 'Общие документы', titleEn: 'Common documents', order: 2 },
    ],
  },
];
