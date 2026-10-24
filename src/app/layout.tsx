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
      <body className="antialiased bg-background text-foreground min-h-screen flex flex-col">
        {children}
        {/* ENG-2 (аудит): контейнер sonner — без него toast.success/error из
            doc-preview не отображались никогда; тосты видны и в WebView Android */}
        <Toaster position="top-center" richColors visibleToasts={2} />
      </body>
    </html>
  );
}
