import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

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
        <Toaster />
      </body>
    </html>
  );
}
