# БРИФ: добавление шаблонов в статический каталог DocGen

Проект: `/home/z/my-project/my-project` — DocGen, автономное приложение-генератор официальных документов (Next.js + TypeScript, статический каталог без БД).

## Твоя задача
Добавить НОВЫЕ шаблоны документов в ТВОИ страновые файлы `src/data/templates/<xx>.ts` (допиши в конец массива `TEMPLATES_XX`), а также добавить `titleDoc` к СУЩЕСТВУЮЩИМ шаблонам твоих файлов (см. ниже).

## ОБЯЗАТЕЛЬНО прочитай перед работой (в этом порядке)
1. `/home/z/my-project/my-project/worklog.md` — контекст проекта (читай, потом ДОБАВЬ свою запись в конец).
2. `src/data/types.ts` — TplDef (обрати внимание: `titleDoc?`, `descDoc?` — опциональные поля).
3. `src/lib/types.ts` — FieldDef, DocBlock (types: lines/title/subtitle/paragraph/list/attachment/signature).
4. `src/data/templates/helpers.ts` — хелперы F(), hdr(), workHdr(), stdSign(), courtHdr().
5. ТВОИ файлы целиком (например `src/data/templates/ru.ts`) — чтобы НЕ дублировать существующие slug/темы.
6. `src/data/categories.ts` — доступные categorySlug.
7. `src/data/countries.ts` — сверь docLang своих стран.
8. `src/lib/docgen/interpolate.ts` — как работают {{placeholder}}, date_today, форматы дат.

## Правила шаблонов
- **Язык тела документа** = государственный язык страны (docLang страны из countries.ts). Официально-деловой стиль, как в реальном делопроизводстве этой страны. НЕ русский (кроме RU).
- **Плейсхолдеры** `{{field_id}}` в тексте тела — каждое должно иметь поле в `fields`. Служебный: `{{date_today}}`.
- **Поля** через хелпер: `F('id', 'Название по-русски', 'Label in English', 'text'|'textarea'|'date'|'number'|'select', { half: true, placeholderDoc: 'образец НА ЯЗЫКЕ ДОКУМЕНТА', hintRu: 'подсказка', hintEn: 'hint', options: [...] })`. Для полей типа date — placeholderDoc НЕ нужен. labelRu/labelEn — язык ИНТЕРФЕЙСА (не документа!).
- **Образцы значений** (placeholderDoc) — реалистичные, вымышленные (Иванов Иван Иванович → на языке страны).
- **refRu/refEn** (правовое основание) — РЕАЛЬНЫЕ нормы: номер статьи/закона. ПРОВЕРЬ через WebSearch! Если не уверен в номере статьи — укажи только название закона без номера статьи (запрещено выдумывать).
- **kind**: 'STANDARD' (обычные), 'HANDWRITTEN_REQUIRED' (бланки строгой формы, заполняются от руки — тогда ОБЯЗАТЕЛЬНЫ warningRu/warningEn + portalDescRu/portalDescEn чек-лист, без тела), 'GOV_PORTAL_ONLY' (услуга полностью онлайн — portalUrl реальный https-адрес гос-портала, portalDescRu/En чек-лист, без полей и тела).
- **titleDoc**: заголовок документа НА ЯЗЫКЕ ДОКУМЕНТА. ОБЯЗАТЕЛЕН для всех шаблонов, чей docLang НЕ ru и НЕ en (и для новых, и добавь к существующим шаблонам твоих файлов). Для docLang ru/en НЕ добавляй.
- **descDoc**: 1-2 предложения на языке документа — что делает документ (опционально, добавляй к новым, если просто).
- **slug**: `<cc>-<category>-<название>`, где cc — код страны нижним регистром (kz, uz...). Уникальный.
- **body**: шапка (hdr/workHdr/courtHdr вручную через lines), заголовок (title, ПРОПИСНЫМИ как принято в стране), абзацы, список требований, attachment (копии документов), signature (stdSign).

## Доступные categorySlug
work-vacations, work-dismissal, work-docs,
court-claims, court-lawsuits, court-gov (жалобы в госорганы: полиция/прокуратура/омбудсмен), court-family (семейные/наследственные),
tax-docs, bank-docs,
soc-benefits, soc-pension,
med-appeals, med-records, med-services (платные услуги в гос. больнице, доступ к помощи), med-online,
edu-docs, edu-online,
post-claims, post-forms, post-online,
util-management, util-online,
uni-money, uni-common

## Метод работы
1. Составь список тем (из задания в твоём промпте) под ЗАКОНЫ СВОЕЙ страны. WebSearch: актуальные нормы (можно искать на гос-порталах и юридических сайтах страны). НЕ переноси российские нормы в другие страны!
2. Добавь шаблоны в конец массива своего файла. Используй локальные хелперы-фабрики шапки, если в файле они уже есть (посмотри как устроен файл).
3. Добавь `titleDoc` к существующим шаблонам файла (только не-ru/en языки).
4. Проверка: `cd /home/z/my-project/my-project && bun tools/check-data.ts` — должно быть без ошибок. ЕСЛИ ошибки указывают на ЧУЖИЕ страны — игнорируй (другие агенты правят параллельно), исправляй только СВОИ. Отсутствие `titleDoc` у твоих не-ru/en шаблонов — ошибка, но check-data её пока не ловит — следи сам. tsc НЕ запускай.
5. Запрещено: править любые другие файлы, package.json, git-команды, трогать не-твои страновые файлы.

## Запись в worklog
В конец `/home/z/my-project/my-project/worklog.md` добавь (формат строго):

---
Task ID: <твой ID>
Agent: <твоё имя>
Task: <что сделал>

Work Log:
- шаги

Stage Summary:
- сколько шаблонов добавлено в какие страны, какие темы закрыты
