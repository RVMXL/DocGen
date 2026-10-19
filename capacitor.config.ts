import type { CapacitorConfig } from '@capacitor/cli';

/**
 * DocGen Android — ПОЛНОСТЬЮ АВТОНОМНОЕ приложение:
 * статический веб-каталог (out/, см. next.config.ts output:'export')
 * упаковывается в assets через `cap sync`; документы (.docx/.pdf)
 * генерируются прямо на устройстве (docx + pdf-lib в WebView).
 * Сервер не нужен, приложение работает офлайн.
 */
const config: CapacitorConfig = {
  appId: 'ru.rvmxl.docgen',
  appName: 'DocGen',
  webDir: 'out',
};

export default config;
