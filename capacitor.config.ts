import type { CapacitorConfig } from '@capacitor/cli';

/**
 * DocGen Android-обёртка: тонкий клиент к серверу DocGen.
 * Стартовый экран (mobile-shell) спрашивает адрес сервера и переходит на него;
 * генерация документов всегда выполняется на сервере.
 */
const config: CapacitorConfig = {
  appId: 'ru.rvmxl.docgen',
  appName: 'DocGen',
  webDir: 'mobile-shell',
  android: {
    // http://-адреса локальной сети разрешает стартовый экран явно (allowMixedContent не нужен):
    // без cleartext нельзя открыть http-сервер в LAN — это осознанный компромисс,
    // трафик по https вне зависимости от настройки, http пользователь включает сам, вводя адрес.
    allowMixedContent: false,
  },
  server: {
    androidScheme: 'https',
  },
};

export default config;
