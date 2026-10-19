#!/usr/bin/env bash
# DocGen server — запуск (Linux/macOS). Требуется Node.js 20+.
set -e
cd "$(dirname "$0")"
mkdir -p data
# при первом запуске — копия каталога шаблонов
if [ ! -f data/docgen.db ]; then
  cp db/docgen.db data/docgen.db
  echo "→ БД каталога скопирована в data/docgen.db"
fi
export DATABASE_URL="file:$(pwd)/data/docgen.db"
export PORT="${PORT:-3000}"
export HOSTNAME="${DOCGEN_HOSTNAME:-0.0.0.0}"
echo "→ DocGen: http://localhost:${PORT}"
exec node server.js
