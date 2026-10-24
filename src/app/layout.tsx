import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "sonner";

export const metadata: Metadata = {
  title: "ДокГен — официальные документы по шаблонам",
  description:
    "Приложение для автоматической генерации официальных документов, заявлений и исков по шаблонам с экспортом в .docx/.pdf и прямой печатью. 22 страны, документы на государственном языке каждой страны.",
  icons: {
    icon: "/logo.png",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover", // safe-area insets в WebView (Android 15 edge-to-edge, iPhone)
  themeColor: "#0f766e",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" suppressHydrationWarning>
      <head>
        {/* SEC-1 (аудит, волна 2): defense-in-depth для статического экспорта.
            Разрешены только собственные ресурсы + инлайн (статический Next инлайнит
            flight-данные и критический CSS); object/base-uri/form-action закрыты.
            scheme-специфика WebView (capacitor://, app:// Electron) не ломается:
            'self' совпадает с origin страницы. frame-ancestors в meta не работает
            по спецификации CSP — щёлкается только HTTP-заголовком на хостинге. */}
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data:; font-src 'self'; connect-src 'self'; media-src 'none'; object-src 'none'; base-uri 'self'; form-action 'none'"
        />
        <meta name="referrer" content="strict-origin-when-cross-origin" />
      </head>
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        {/* ENG-2 (аудит): контейнер sonner — без него toast.success/error из
            doc-preview не отображались никогда; тосты видны и в WebView Android */}
        <Toaster position="top-center" richColors visibleToasts={2} />
      </body>
    </html>
  );
}
