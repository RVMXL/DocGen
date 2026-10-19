import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

export const metadata: Metadata = {
  title: "ДокГен — официальные документы по шаблонам",
  description:
    "MVP-приложение для автоматической генерации официальных документов, заявлений и исков по шаблонам с экспортом в .docx/.pdf и прямой печатью. Россия и СНГ.",
  icons: {
    icon: "https://z-cdn.chatglm.cn/z-ai/static/logo.svg",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
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
