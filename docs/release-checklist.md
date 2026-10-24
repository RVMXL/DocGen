# Чек-лист релиза DocGen

Порядок выпуска версии (проверено на v0.4.0…v0.6.1; INFRA-5, аудит).

## 1. Подготовка

- [ ] Все запланированные находки `docs/audit-fix-plan.csv` закрыты
      (столбец `status` = `done`) либо отложены осознанно.
- [ ] Гейт локально: `bun test` · `bun tools/check-data.ts` ·
      `bunx tsc --noEmit` · `bunx next build` — зелёные.
- [ ] Эмпирическая проверка PDF: сэмплы zh/ru через `pdftoppm`/`pdftotext`
      (скрипт `scripts/emit-pdf-samples.ts` — локально, в git не входит).

## 2. CHANGELOG и версии

- [ ] `CHANGELOG.md`: секция `## [X.Y.Z] — ГГГГ-ММ-ДД` заполнена по волнам;
      формат = источник примечаний релиза (release.yml извлекает её
      автоматически, fail-fast при отсутствии).
- [ ] `package.json` → `"version": "X.Y.Z"` и `desktop/package.json` —
      та же версия (тест-гейт structure.test.ts ловит рассинхрон).
- [ ] Коммит `release: vX.Y.Z — …` → push в `main`.

## 3. Тег и публикация

- [ ] `git tag vX.Y.Z && git push origin vX.Y.Z` — запускает release-конвейер
      (сборки Windows/Linux/macOS/Android/web одним выпуском, `prerelease`).
- [ ] Тело релиза = секция CHANGELOG + блурб об артефактах +
      «Full Changelog» (generate_release_notes).
- [ ] macOS .dmg досылается mac-джобой позже остальных артефактов — это
      норма (mac-раннеры в очереди), тело релиза не трогать.
- [ ] Проверка страницы релиза: артефакты на месте, примечания = CHANGELOG.

## 4. После релиза

- [ ] CI на `main` зелёный.
- [ ] Dependabot-PR'ы просмотрены (SEC-2).
- [ ] Обновить таблицу поддерживаемых версий в `SECURITY.md`, если
      меняется минорная линия.
