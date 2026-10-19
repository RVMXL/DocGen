import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  // pdf-lib + fontkit нельзя пропускать через webpack-трансформацию:
  // бандлинг ломает cmap/embedding шрифтов → в PDF вместо кириллицы рендерятся
  // неверные глифы. Оставляем их внешними серверными пакетами (require из node_modules).
  serverExternalPackages: ["pdf-lib", "@pdf-lib/fontkit"],
};

export default nextConfig;
