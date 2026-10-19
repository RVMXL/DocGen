@echo off
rem DocGen server — запуск (Windows). Требуется Node.js 20+ (nodejs.org).
cd /d "%~dp0"
if not exist data mkdir data
if not exist data\docgen.db copy db\docgen.db data\docgen.db >nul
if "%PORT%"=="" set PORT=3000
set "DATABASE_URL=file:%cd:\=/%/data/docgen.db"
echo ^> DocGen: http://localhost:%PORT%
node server.js
