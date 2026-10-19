import type { NextConfig } from "next";

// Приложение самодостаточное: статический экспорт без сервера.
// `next build` собирает сайт в out/ — он же используется в Android (Capacitor)
// и десктопе (Electron): документ генерируется прямо на устройстве.
const nextConfig: NextConfig = {
  output: "export",
  images: { unoptimized: true },
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
};

export default nextConfig;
