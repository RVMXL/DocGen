// Языковые пакеты универсальных шаблонов: ТЕЛО документа и образцы значений
// на государственном языке страны (ТЗ: страна определяет язык документов).
// Язык интерфейса (ru/en) к содержимому документа не относится.
import type { DocLang } from '../src/lib/docgen/interpolate';

export type CisDocLang = Exclude<DocLang, 'ru' | 'en'>;

export interface LangPack {
  // --- шапка «кому» (заявления работодателю) ---
  headPosition: string;
  org: string;
  headName: string;
  applicantPosition: string;
  applicantName: string;
  /** префикс строки отправителя: «от» / «ад» / «від» / 'аз' / '' (для суффиксных языков) */
  fromPrefix: string;
  telLabel: string;
  // --- образцы значений (язык документа: значения подставляются в текст) ---
  sellerName: string;
  sellerAddress: string;
  applicantAddress: string;
  phone: string;
  product: string;
  proof: string;
  defect: string;
  documents: string;
  // --- заголовки в теле документа ---
  appTitle: string;
  claimTitle: string;
  // --- основные фразы ---
  vacationP: string;
  dismissalP1: string;
  dismissalP2: string;
  refP: string;
  claimP1: string;
  claimP2: string;
  claimP3: string;
  claimP4: string;
  claimOptions: string[];
  attachLabel: string;
  attachItem: string;
}

export const LANG_PACK: Record<CisDocLang, LangPack> = {
  // ================= КАЗАХСТАН (казахский) =================
  kk: {
    headPosition: 'Директорға',
    org: '«Компания» ЖШС',
    headName: 'Иванов И.И.ге',
    applicantPosition: 'менеджер',
    applicantName: 'Петрова Аннадан',
    fromPrefix: '',
    telLabel: 'тел.',
    sellerName: '«Дүкен» ЖШС',
    sellerAddress: 'Алматы қаласы, Ленина көшесі, 1-үй',
    applicantAddress: 'Алматы қаласы, Пушкин көшесі, 2-үй, 3-пәтер',
    phone: '+7 700 000-00-00',
    product: 'Samsung Galaxy A54 смартфоны',
    proof: '01.10.2026 ж. № 123 кассалық чек',
    defect: 'динамигі жұмыс істеуді тоқтатты',
    documents: 'лауазымым мен жалақымның мөлшері туралы жұмыс орнынан анықтаманы',
    appTitle: 'ӨТІНІШ',
    claimTitle: 'ПРЕТЕНЗИЯ',
    vacationP: 'Қазақстан Республикасының еңбек заңнамасына сәйкес Сізден маған {{days}} күнтізбелік күнге жыл сайынғы ақылы еңбек демалысын {{date_from}} бастап беруін сұраймын.',
    dismissalP1: 'Мені өз өтінішім бойынша {{date_to}} жылы жұмыстан босатуды сұраймын.',
    dismissalP2: 'Еңбек кітапшасын (еңбек қызметі туралы құжатты) және түпкі есептемені жұмыстан босату күні беруді сұраймын.',
    refP: 'Маған {{documents}} беруді сұраймын.',
    claimP1: '{{date_buy}} жылы мен сіздің ұйымыңыздан «{{product_name}}» тауарын {{price}} бағамен сатып алдым. Сатып алу фактісі расталады: {{proof}}.',
    claimP2: 'Пайдалану барысында тауарда ақау анықталды: {{defect}}.',
    claimP3: 'Қазақстан Республикасының тұтынушылардың құқықтарын қорғау саласындағы заңнамасына сәйкес {{demand}} талап етемін.',
    claimP4: 'Претензияны ерікті түрде қанағаттандырудан бас тартылған жағдайда сотқа жүгінуге мәжбүр боламын.',
    claimOptions: [
      'тауарға төленген ақшаны қайтаруды',
      'тауарды ұқсас тауарға ауыстыруды',
      'тауардың кепілдік жөндеуін жүргізуді',
      'тауар бағасын пропорционалды түрде азайтуды',
    ],
    attachLabel: 'Қосымша:',
    attachItem: 'Сатып алуды растайтын құжаттың көшірмесі.',
  },

  // ================= БЕЛАРУСЬ (белорусский) =================
  be: {
    headPosition: 'Дырэктару',
    org: 'ТАА «Кампанія»',
    headName: 'Іванову І.І.',
    applicantPosition: 'менеджара',
    applicantName: 'Петравой Ганны',
    fromPrefix: 'ад',
    telLabel: 'тэл.',
    sellerName: 'ТАА «Крама»',
    sellerAddress: 'г. Мінск, вул. Леніна, д. 1',
    applicantAddress: 'г. Мінск, вул. Пушкіна, д. 2, кв. 3',
    phone: '+375 29 000-00-00',
    product: 'смартфон Samsung Galaxy A54',
    proof: 'касовы чэк № 123 ад 01.10.2026',
    defect: 'перастаў працаваць дынамік',
    documents: 'даведку з месца працы пра пасаду і памер заработнай платы',
    appTitle: 'ЗАЯВА',
    claimTitle: 'ПРЭТЭНЗІЯ',
    vacationP: 'Прашу даць мне штогадовы аплатны водпуск працягласцю {{days}} каляндарных дзён з {{date_from}} у адпаведнасці з трудавым заканадаўствам Рэспублікі Беларусь.',
    dismissalP1: 'Прашу звольніць мяне па ўласным жаданні {{date_to}}.',
    dismissalP2: 'Прашу выдаць трудавую кніжку (дакумент аб трудавай дзейнасці) і канчатковы разлік у дзень звальнення.',
    refP: 'Прашу выдаць мне {{documents}}.',
    claimP1: '{{date_buy}} я набыў(ла) у вашай арганізацыі тавар «{{product_name}}» коштам {{price}}. Факт пакупкі пацвярджаецца: {{proof}}.',
    claimP2: 'У працэсе эксплуатацыі ў тавары выявіўся дэфект: {{defect}}.',
    claimP3: 'У адпаведнасці з заканадаўствам Рэспублікі Беларусь аб абароне правоў спажыўцоў патрабую {{demand}}.',
    claimP4: 'У выпадку адмовы ў добраахвотным задавальненні гэтай прэтэнзіі буду вымушаны(ая) звярнуцца ў суд.',
    claimOptions: [
      'вярнуць сплачаную за тавар суму',
      'замяніць тавар на аналагічны',
      'правесці гарантыйны рамонт тавару',
      'прапарцыйна зменшыць цану тавару',
    ],
    attachLabel: 'Дадатак:',
    attachItem: 'Копія дакумента, які пацвярджае пакупку.',
  },

  // ================= УКРАИНА (украинский) =================
  uk: {
    headPosition: 'Керівнику',
    org: 'ТОВ «Компанія»',
    headName: 'Іванову І.І.',
    applicantPosition: 'менеджера',
    applicantName: 'Петрової Анни',
    fromPrefix: 'від',
    telLabel: 'тел.',
    sellerName: 'ТОВ «Магазин»',
    sellerAddress: 'м. Київ, вул. Леніна, буд. 1',
    applicantAddress: 'м. Київ, вул. Пушкіна, буд. 2, кв. 3',
    phone: '+380 67 000-00-00',
    product: 'смартфон Samsung Galaxy A54',
    proof: 'касовий чек № 123 від 01.10.2026',
    defect: 'перестав працювати динамік',
    documents: 'довідку з місця роботи про посаду та розмір заробітної плати',
    appTitle: 'ЗАЯВА',
    claimTitle: 'ПРЕТЕНЗІЯ',
    vacationP: 'Прошу надати мені щорічну оплачувану відпустку тривалістю {{days}} календарних днів з {{date_from}} відповідно до законодавства України про працю.',
    dismissalP1: 'Прошу звільнити мене за власним бажанням {{date_to}}.',
    dismissalP2: 'Прошу видати трудову книжку (документ про трудову діяльність) та остаточний розрахунок у день звільнення.',
    refP: 'Прошу видати мені {{documents}}.',
    claimP1: '{{date_buy}} я придбав(ла) у вашій організації товар «{{product_name}}» вартістю {{price}}. Факт придбання підтверджується: {{proof}}.',
    claimP2: 'У процесі експлуатації в товарі виявлено недолік: {{defect}}.',
    claimP3: 'Відповідно до законодавства України про захист прав споживачів вимагаю {{demand}}.',
    claimP4: 'У разі відмови у добровільному задоволенні цієї претензії буду змушений(а) звернутися до суду.',
    claimOptions: [
      'повернути сплачену за товар суму',
      'замінити товар на аналогічний',
      'провести гарантійний ремонт товару',
      'пропорційно зменшити ціну товару',
    ],
    attachLabel: 'Додаток:',
    attachItem: 'Копія документа, що підтверджує придбання.',
  },

  // ================= УЗБЕКИСТАН (узбекский, латиница) =================
  uz: {
    headPosition: 'Direktorga',
    org: '«Kompaniya» MChJ',
    headName: 'Ivanov I.I.ga',
    applicantPosition: 'menejer',
    applicantName: 'Petrova Annadan',
    fromPrefix: '',
    telLabel: 'tel.',
    sellerName: '«Doʻkon» MChJ',
    sellerAddress: 'Toshkent sh., Lenina koʻchasi, 1-uy',
    applicantAddress: 'Toshkent sh., Pushkin koʻchasi, 2-uy, 3-xonadon',
    phone: '+998 90 000-00-00',
    product: 'Samsung Galaxy A54 smartfoni',
    proof: '01.10.2026-yilgi № 123 kassa cheki',
    defect: 'dinamikasi ishlamay qoldi',
    documents: 'lavozimim va ish haqim miqdori toʻgʻrisida ish joyidan maʼlumotnomani',
    appTitle: 'ARIZA',
    claimTitle: 'PRETENSIYA',
    vacationP: 'Oʻzbekiston Respublikasining mehnat qonunchiligiga muvofiq Sizdan menga {{date_from}} sanasidan boshlab {{days}} ta kalendar kun muddatga yillik pullik taʼtil berishingizni soʻrayman.',
    dismissalP1: 'Mening arizamga asosan menga {{date_to}} sanada ishdan boʻshatilishimni soʻrayman.',
    dismissalP2: 'Mehnat daftarchasini (mehnat faoliyati toʻgʻrisidagi hujjatni) va yakuniy hisob-kitobni ishdan boʻshatish kuni berilishini soʻrayman.',
    refP: 'Menga {{documents}} berilishini soʻrayman.',
    claimP1: '{{date_buy}} sanada men sizning tashkilotingizdan «{{product_name}}» mahsulotini {{price}} narxda sotib oldim. Sotib olish fakti tasdiqlanadi: {{proof}}.',
    claimP2: 'Foydalanish jarayonida mahsulotda nuqson aniqlandi: {{defect}}.',
    claimP3: 'Oʻzbekiston Respublikasining isteʼmolchilar huquqlarini himoya qilish sohasidagi qonunchiligiga muvofiq {{demand}} talab qilaman.',
    claimP4: 'Ushbu pretensiya ixtiyoriy ravishda qanoatlantirilishidan bosh tortilsa, sudga murojaat qilishga majbur boʻlaman.',
    claimOptions: [
      'mahsulot uchun toʻlangan summani qaytarishni',
      'mahsulotni oʻxshash mahsulotga almashtirishni',
      'mahsulotning kafolat taʼmirini bajarishni',
      'mahsulot narxini mutanosib ravishda kamaytirishni',
    ],
    attachLabel: 'Ilova:',
    attachItem: 'Sotib olishni tasdiqlovchi hujjatning nusxasi.',
  },

  // ================= КЫРГЫЗСТАН (киргизский) =================
  kg: {
    headPosition: 'Директорго',
    org: '«Компания» ЖШК',
    headName: 'Иванов И.И.ге',
    applicantPosition: 'менеджер',
    applicantName: 'Петрова Аннадан',
    fromPrefix: '',
    telLabel: 'тел.',
    sellerName: '«Дүкөн» ЖШК',
    sellerAddress: 'Бишкек шаары, Ленина көчөсү, 1-үй',
    applicantAddress: 'Бишкек шаары, Пушкин көчөсү, 2-үй, 3-пәтер',
    phone: '+996 700 000-000',
    product: 'Samsung Galaxy A54 смартфону',
    proof: '01.10.2026 ж. № 123 кассалык чек',
    defect: 'динамиги иштөөнү токтотту',
    documents: 'кызматым жана эмгек акымдын өлчөмү тууралуу иш жеринен маалыматты',
    appTitle: 'АРИЗА',
    claimTitle: 'ПРЕТЕНЗИЯ',
    vacationP: 'Кыргыз Республикасынын эмгек мыйзамдарына ылайык Сизден мага {{days}} календардык күнгө жылдык акы төлөнүүчү дем алышты {{date_from}} күнүнөн тартып берилишин сураймын.',
    dismissalP1: 'Мени өз каалоом боюнча {{date_to}} күнү иштен бошотулушумду сураймын.',
    dismissalP2: 'Эмгек китебин (эмгек ишмердүүлүгү жөнүндө документти) жана акыркы эсептешүүнү иштен бошотулган күнү берилишин сураймын.',
    refP: 'Мага {{documents}} берилишин сураймын.',
    claimP1: '{{date_buy}} жылы мен сиздин уюмуңуздан «{{product_name}}» товарды {{price}} баасы менен сатып алдым. Сатып алуу фактысы тастыкталат: {{proof}}.',
    claimP2: 'Пайдалануу учурунда товарда кемчилик табылды: {{defect}}.',
    claimP3: 'Кыргыз Республикасынын керектөөчүлөрдүн укуктарын коргоо жөнүндөгү мыйзамдарына ылайык {{demand}} талап кылам.',
    claimP4: 'Бул претензияны ыктыярдуу түрдө канааттандыруудан баш тартылса, сотко кайрылууга мажбур болом.',
    claimOptions: [
      'товар үчүн төлөнгөн сумманы кайтарууну',
      'товарды окшош товарга алмаштырууну',
      'товардын кепилдик ремонун жүргүзүүнү',
      'товардын баасын пропорциялуу түрдө азайттырууну',
    ],
    attachLabel: 'Тиркеме:',
    attachItem: 'Сатып алууну тастыктаган документтин көчүрмөсү.',
  },

  // ================= ТАДЖИКИСТАН (таджикский) =================
  tg: {
    headPosition: 'Ба директори',
    org: 'ҶДММ «Компания»',
    headName: 'Иванов И.И.',
    applicantPosition: 'менеджер',
    applicantName: 'Петрова Анна',
    fromPrefix: 'аз',
    telLabel: 'тел.',
    sellerName: 'ҶДММ «Дукон»',
    sellerAddress: 'ш. Душанбе, кӯч. Ленин, х. 1',
    applicantAddress: 'ш. Душанбе, кӯч. Пушкин, х. 2, ҳ. 3',
    phone: '+992 90 000-00-00',
    product: 'телефони Samsung Galaxy A54',
    proof: 'чеки касса № 123 аз 01.10.2026',
    defect: 'динамики он кор накард',
    documents: 'маълумотномаи ҷои кор дар бораи вазифа ва андозаи музди кор',
    appTitle: 'АРИЗА',
    claimTitle: 'ПРЕТЕНЗИЯ',
    vacationP: 'Мутобиқи қонунгузии меҳнати Ҷумҳурии Тоҷикистон аз Шумо хоҳиш мекунам, ба ман таътили ҳарсолаи пулакӣ ба муддати {{days}} рӯзи тақвимӣ аз {{date_from}} дода шавад.',
    dismissalP1: 'Хоҳиш мекунам ман аз рӯи хоҳиши шахсии худ дар таърихи {{date_to}} аз кор озод карда шавам.',
    dismissalP2: 'Хоҳиш мекунам дафтари корӣ (ҳуҷҷати фаъолияти меҳнатӣ) ва ҳисоби ниҳоиро дар рӯзи озодшавӣ аз кор диҳанд.',
    refP: 'Хоҳиш мекунам ба ман {{documents}} диҳанд.',
    claimP1: 'Дар таърихи {{date_buy}} ман аз ташкилоти Шумо моли «{{product_name}}»-ро ба баҳои {{price}} харидорӣ кардам. Факти харидорӣ тасдиқ мешавад: {{proof}}.',
    claimP2: 'Дар давраи истифода дар мол нуқс ошкор гардид: {{defect}}.',
    claimP3: 'Мутобиқи қонунгузии Ҷумҳурии Тоҷикистон оиди ҳимояи ҳуқуқи истеъмолкунандагон {{demand}} талаб мекунам.',
    claimP4: 'Дар сурати рад кардани ихтиёрии ин претензия ба суд муроҷиат хоҳам кард.',
    claimOptions: [
      'баргардонидани маблағи пардохтшуда барои мол',
      'иваз намудани мол бо моли монанд',
      'таъмири кафолатии молро гузаронидан',
      'мутаносибан арзиши молро паст кардан',
    ],
    attachLabel: 'Илова:',
    attachItem: 'Нусхаи ҳуҷҷате, ки харидориро тасдиқ мекунад.',
  },

  // ================= АРМЕНИЯ (армянский) =================
  hy: {
    headPosition: 'Տնօրենին',
    org: '«Կոմպանիա» ՍՊԸ',
    headName: 'Իվանով Ի.Ի.-ին',
    applicantPosition: 'մենեջեր',
    applicantName: 'Պետրովա Աննայից',
    fromPrefix: '',
    telLabel: 'հեռ.',
    sellerName: '«Խանութ» ՍՊԸ',
    sellerAddress: 'ք. Երևան, Լենինի փող., շենք 1',
    applicantAddress: 'ք. Երևան, Պուշկինի փող., շենք 2, բն. 3',
    phone: '+374 91 000-000',
    product: 'Samsung Galaxy A54 սմարթֆոն',
    proof: '01.10.2026 թ. № 123 դրամարկղային կտրոն',
    defect: 'դադարել է աշխատել բարձրախոսը',
    documents: 'աշխատանքի վայրից տեղեկանք՝ պաշտոնի և աշխատավարձի չափի վերաբերյալ',
    appTitle: 'ԴԻՄՈՒՄ',
    claimTitle: 'ՊԱՀԱՆՋ',
    vacationP: 'Հայաստանի Հանրապետության աշխատանքային օրենսդրությանը համապատասխան՝ խնդրում եմ ինձ տրամադրել տարեկան վճարովի արձակուրդ {{days}} օր ժամկետով՝ {{date_from}}-ից սկսած։',
    dismissalP1: 'Խնդրում եմ ինձ ազատել աշխատանքից սեփական ցանկությամբ {{date_to}}-ին։',
    dismissalP2: 'Խնդրում եմ աշխատանքային գրքույկը (աշխատանքային գործունեության փաստաթուղթը) և վերջնահաշիվը տրամադրել աշխատանքից ազատվելու օրը։',
    refP: 'Խնդրում եմ ինձ տրամադրել {{documents}}։',
    claimP1: '{{date_buy}}-ին ձեր կազմակերպությունից գնեցի «{{product_name}}» ապրանքը՝ {{price}} արժեքով։ Գնման փաստը հաստատվում է՝ {{proof}}։',
    claimP2: 'Շահագործման ընթացքում ապրանքի մեջ հայտնաբերվեց արատ՝ {{defect}}։',
    claimP3: 'Հայաստանի Հանրապետության սպառողների իրավունքների պաշտպանության վերաբերյալ օրենսդրությանը համապատասխան՝ պահանջում եմ {{demand}}։',
    claimP4: 'Սույն պահանջը կամավոր բավարարելուց հրաժարվելու դեպքում ստիպված կլինեմ դիմել դատարան։',
    claimOptions: [
      'ապրանքի դիմաց վճարված գումարի վերադարձը',
      'ապրանքի փոխարինումը նմանատիպ ապրանքով',
      'ապրանքի երաշխային վերանորոգումը',
      'ապրանքի գնի համամասնական նվազեցումը',
    ],
    attachLabel: 'Կից՝',
    attachItem: 'Գնումը հաստատող փաստաթղթի պատճեն։',
  },

  // ================= АЗЕРБАЙДЖАН (азербайджанский) =================
  az: {
    headPosition: 'Direktora',
    org: '«Şirkət» MMC',
    headName: 'İvanov İ.İ.-yə',
    applicantPosition: 'menecer',
    applicantName: 'Petrova Annadan',
    fromPrefix: '',
    telLabel: 'tel.',
    sellerName: '«Mağaza» MMC',
    sellerAddress: 'Bakı ş., Lenina küç., ev 1',
    applicantAddress: 'Bakı ş., Puşkin küç., ev 2, mənzil 3',
    phone: '+994 50 000-00-00',
    product: 'Samsung Galaxy A54 smartfonu',
    proof: '01.10.2026 tarixli № 123 kassa çeki',
    defect: 'dinamiki işləməyi dayandırdı',
    documents: 'iş yerindən vəzifəm və əmək haqqımın məbləği haqqında arayışı',
    appTitle: 'ƏRZİ',
    claimTitle: 'TƏLƏB',
    vacationP: 'Azərbaycan Respublikasının əmək qanunvericiliyinə uyğun olaraq Sizdən mənə {{date_from}} tarixindən başlayaraq {{days}} təqvim günü müddətinə illik ödənişli məzuniyyət verilməsini xahiş edirəm.',
    dismissalP1: 'Mənim ərzimə əsasən {{date_to}} tarixində işdən çıxarılmağımı xahiş edirəm.',
    dismissalP2: 'Əmək kitabçasının (əmək fəaliyyəti haqqında sənədin) və yekun hesablaşmanın işdən çıxarıldığı gün verilməsini xahiş edirəm.',
    refP: 'Mənə {{documents}} verilməsini xahiş edirəm.',
    claimP1: '{{date_buy}} tarixində sizin təşkilatınızdan «{{product_name}}» məhsulunu {{price}} qiymətə almışam. Alış faktı təsdiqlənir: {{proof}}.',
    claimP2: 'İstifadə zamanı məhsulda qüsur aşkarlanmışdır: {{defect}}.',
    claimP3: 'Azərbaycan Respublikasının istehlakçıların hüquqlarının müdafiəsi haqqında qanunvericiliyinə uyğun olaraq {{demand}} tələb edirəm.',
    claimP4: 'Bu tələbin könüllü qaydada yerinə yetirilməsindən imtina ediləcəyi halda məhkəməyə müraciət etməyə məcbur olacağam.',
    claimOptions: [
      'məhsula ödənilən məbləğin qaytarılmasını',
      'məhsulun oxşar məhsulla əvəz olunmasını',
      'məhsulun zəmanət təmirinin aparılmasını',
      'məhsulun qiymətinin mütənasib azaldılmasını',
    ],
    attachLabel: 'Əlavə:',
    attachItem: 'Alışı təsdiqləyən sənədin surəti.',
  },

  // ================= МОЛДОВА (румынский) =================
  ro: {
    headPosition: 'Directorului',
    org: 'S.C. «Compania» S.R.L.',
    headName: 'Ivanov I.I.',
    applicantPosition: 'managerului',
    applicantName: 'Petrova Anna',
    fromPrefix: 'din partea',
    telLabel: 'tel.',
    sellerName: 'S.C. «Magazinul» S.R.L.',
    sellerAddress: 'or. Chișinău, str. Lenin, 1',
    applicantAddress: 'or. Chișinău, str. Pușkin, 2, ap. 3',
    phone: '+373 69 000-000',
    product: 'smartfon Samsung Galaxy A54',
    proof: 'chitul de casă nr. 123 din 01.10.2026',
    defect: 'difuzorul a încetat să funcționeze',
    documents: 'atestatului de la locul de muncă privind funcția și cuantumul salariului',
    appTitle: 'CERERE',
    claimTitle: 'NOTIFICARE',
    vacationP: 'Vă solicit acordarea concediului anual plătit pe o durată de {{days}} zile calendaristice începând cu {{date_from}}, în conformitate cu legislația muncii a Republicii Moldova.',
    dismissalP1: 'Vă solicit încetarea contractului individual de muncă din propria inițiativă la data de {{date_to}}.',
    dismissalP2: 'Vă solicit eliberarea carnetului de muncă (documentului privind activitatea de muncă) și decontarea finală în ziua încetării activității.',
    refP: 'Vă solicit eliberarea următoarelor documente: {{documents}}.',
    claimP1: 'La data de {{date_buy}} am achiziționat în organizația dumneavoastră produsul «{{product_name}}» în valoare de {{price}}. Faptul achiziției este confirmat de: {{proof}}.',
    claimP2: 'În timpul utilizării a fost depistat un defect al produsului: {{defect}}.',
    claimP3: 'În conformitate cu legislația Republicii Moldova privind protecția drepturilor consumatorilor, solicit {{demand}}.',
    claimP4: 'În cazul refuzului de a satisface în mod voluntar prezenta notificare, voi fi nevoit(ă) să mă adresez instanței de judecată.',
    claimOptions: [
      'returnarea sumei achitate pentru produs',
      'înlocuirea produsului cu unul analogic',
      'efectuarea reparației în garanție a produsului',
      'reducerea proporțională a prețului produsului',
    ],
    attachLabel: 'Anexă:',
    attachItem: 'Copie a documentului care confirmă achiziția.',
  },
};
