import type { NextConfig } from "next";

// Приложение самодостаточное: статический экспорт без сервера.
// `next build` собирает сайт в out/ — он же используется в Android (Capacitor)
// и десктопе (Electron): документ генерируется прямо на устройстве.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  // SEC-4 (аудит, волна 2): type-check при сборке больше не отключается —
  // регрессия типов падает в CI (tsc --noEmit по проекту чистый).
  reactStrictMode: false,
};

export default nextConfig;
