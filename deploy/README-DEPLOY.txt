DocGen — серверная сборка (сайт)
=================================

Что это: готовый сервер DocGen (Next.js standalone) с предзаполненным
каталогом шаблонов (SQLite). Документы генерируются здесь; браузер — только
интерфейс. Тот же адрес используйте в Android-приложении DocGen как сервер.

ТРЕБОВАНИЯ
----------
- Node.js 20 или новее: https://nodejs.org (для Docker не нужен)
- 100 МБ диска; порт по умолчанию 3000

БЫСТРЫЙ СТАРТ
-------------
Linux / macOS:
  1. Распакуйте архив целиком:  tar -xzf DocGen-<ver>-server.tar.gz
  2. cd DocGen-server && chmod +x start.sh
  3. ./start.sh
  4. Откройте http://localhost:3000

Windows:
  1. Распакуйте архив целиком.
  2. Двойной клик по start.cmd (или в консоли: start.cmd)
  3. Откройте http://localhost:3000

Docker:
  1. Распакуйте архив, зайдите в папку.
  2. docker compose up -d --build
  3. http://localhost:3000

ПЕРЕМЕННЫЕ ОКРУЖЕНИЯ
--------------------
PORT          порт HTTP-сервера (по умолчанию 3000)
DOCGEN_HOSTNAME  интерфейс привязки; 0.0.0.0 — доступ извне (по умолчанию).
              Переменную HOSTNAME скрипт игнорирует: bash задаёт её сама
DATABASE_URL  путь к БД, по умолчанию file:<папка>/data/docgen.db (создаётся
              автоматически из db/docgen.db при первом запуске)

systemd (Linux, автозапуск)
---------------------------
/etc/systemd/system/docgen.service:
  [Unit]
  Description=DocGen
  After=network.target

  [Service]
  User=docgen
  WorkingDirectory=/opt/docgen
  ExecStart=/opt/docgen/start.sh
  Restart=on-failure

  [Install]
  WantedBy=multi-user.target

  # cp -r DocGen-server/. /opt/docgen && useradd -r docgen
  # chown -R docgen:docgen /opt/docgen
  # systemctl enable --now docgen

ОБНОВЛЕНИЕ
----------
1. Остановите сервер (systemctl stop docgen / Ctrl+C / docker compose down).
2. Распакуйте новый архив в новую папку и перенесите data/docgen.db
   из старой установки (там ваши настройки, если появятся).
3. Запустите заново.

БЕЗОПАСНОСТЬ
------------
- Встроенной аутентификации НЕТ — для локальной сети это нормально.
  Для публичного домена закройте DocGen за reverse-proxy (nginx/Caddy)
  с HTTPS и ограничением доступа (basic auth / allowlist).
- Введённые в формы данные нигде не сохраняются: файлы .docx/.pdf
  собираются в памяти и отдаются браузеру напрямую.
- Внешних запросов сервер не делает (ссылки на госпорталы открывает
  пользователь в браузере).

СТРУКТУРА
---------
server.js      входная точка (node server.js)
.next/         собранное приложение
public/        статика, шрифты
db/docgen.db   эталонная БД с каталогом шаблонов (69 шаблонов, 10 стран)
data/          рабочая БД (создаётся при первом запуске)
