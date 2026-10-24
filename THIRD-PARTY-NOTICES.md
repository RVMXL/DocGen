# Third-party notices

DocGen использует сторонние компоненты с открытым исходным кодом. Этот файл — сводка авторов и лицензий; полные тексты лицензий распространяются вместе с соответствующими пакетами (в `node_modules/<пакет>/LICENSE`) и доступны в репозиториях проектов.

Версии соответствуют `bun.lock` на момент выпуска; полный список зависимостей — в `package.json`.

## Ядро приложения

| Компонент | Автор / правообладатель | Версия | Лицензия |
|---|---|---|---|
| [Next.js](https://nextjs.org) | Vercel, Inc. | 16.x | MIT |
| [React](https://react.dev) | Meta Platforms, Inc. и участники | 19.x | MIT |
| [React DOM](https://react.dev) | Meta Platforms, Inc. и участники | 19.x | MIT |
| [TypeScript](https://www.typescriptlang.org) | Microsoft Corporation | 5.x | Apache-2.0 |

## Генерация документов

| Компонент | Автор / правообладатель | Версия | Лицензия |
|---|---|---|---|
| [docx](https://github.com/dolanmiu/docx) | Dolan Miu и участники | 9.12.0 | MIT |
| [pdf-lib](https://github.com/Hopding/pdf-lib) | Andrew Dillon | 1.17.1 | MIT |
| [@pdf-lib/fontkit](https://github.com/Hopding/pdf-lib) | Andrew Dillon (форк fontkit) | 1.1.1 | MIT |

`pdf-lib`/`fontkit` выполняют генерацию PDF на устройстве пользователя, включая встраивание подмножеств юникод-шрифтов (кириллица, армянский, иврит, CJK).

## UI

| Компонент | Автор / правообладатель | Версия | Лицензия |
|---|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | Tailwind Labs, Inc. | 4.x | MIT |
| [shadcn/ui](https://ui.shadcn.com) — компоненты `button`, `card`, `input`, `label`, `select`, `textarea`, `alert`, `badge` | shadcn и участники | — | MIT |
| [Radix UI Primitives](https://www.radix-ui.com) (`react-select`, `react-label`, `react-slot`) | WorkOS / Radix UI и участники | 1.x–2.x | MIT |
| [lucide-react](https://lucide.dev) | Lucide Contributors (иконки; ответвление Feather Icons) | 0.525.0 | ISC |
| [zustand](https://github.com/pmndrs/zustand) | Poimandres и участники | 5.0.10 | MIT |
| [sonner](https://sonner.emilkowal.ski) | Emil Kowalski | 2.0.7 | MIT |
| [class-variance-authority](https://cva.style) | Joe Bell | 0.7.1 | Apache-2.0 |
| [clsx](https://github.com/lukeed/clsx) | Luke Edwards | 2.1.1 | MIT |
| [tailwind-merge](https://github.com/dcastil/tailwind-merge) | Dany Castillo | 3.3.1 | MIT |
| [tw-animate-css](https://github.com/Wombosvideo/tw-animate-css) | Wombosvideo | 1.3.5 | MIT |

## Мобильная и настольная обёртки

| Компонент | Автор / правообладатель | Версия | Лицензия |
|---|---|---|---|
| [Capacitor](https://capacitorjs.com) (`core`, `android`, `app`, `filesystem`, `share`, `cli`) | Ionic / Drifty Co. и участники | 7.6.x | MIT |
| [Electron](https://www.electronjs.org) | OpenJS Foundation и участники | 38.x | MIT |
| [electron-builder](https://www.electron.build) | Stéphane Goetz и участники | 26.x | MIT |

## Инструменты сборки (только разработка)

| Компонент | Автор / правообладатель | Лицензия |
|---|---|---|
| [Bun](https://bun.sh) | Oven, Inc. | MIT (раннер; собственный менеджер пакетов) |
| [ESLint](https://eslint.org) + `eslint-config-next` | OpenJS Foundation / Vercel | MIT |
| [fontTools](https://fonttools.readthedocs.io) (Python) | Just van Rossum и участники (используется в `tools/make-cjk-fonts.py` для подготовки шрифтов) | MIT/BSD-подобная (MIT) |

## Шрифты, входящие в состав приложения

| Шрифт | Правообладатель | Лицензия | Назначение |
|---|---|---|---|
| Liberation Serif | Liberation Fonts Project (оригинал © Hasso Plattner Institute) | SIL OFL 1.1 | PDF-документы: кириллица, латиница |
| GNU FreeFont (FreeSerif) | GNU FreeFont contributors | GNU GPL v3 + шрифтовое исключение | PDF: армянский, иврит |
| Noto Serif SC / JP / KR | Google LLC и участники | SIL OFL 1.1 | PDF: китайский, японский, корейский (встраиваются подмножества, см. `tools/make-cjk-fonts.py`) |

Примечание: в .docx шрифты не встраиваются — в документе указываются стандартные шрифты делопроизводства (Times New Roman, 宋体, ＭＳ 明朝, 바탕, David), которые рендерит система пользователя.

## Формы и правовые материалы

Страновые шаблоны DocGen — оригинальные тексты приложения, составленные по общепринятым стандартам делопроизводства соответствующих стран со ссылками на публичные нормы (кодексы и законы доступны на официальных правовых порталах стран). Официальные бланки (например, Cerfa 15399, ф. 112ЭП) не копируются — приложение показывает чек-лист подготовки и/или ссылку на официальный источник.

## Права

All rights reserved. This code is for viewing purposes only. You are not allowed to use, copy, distribute, or modify this code.
