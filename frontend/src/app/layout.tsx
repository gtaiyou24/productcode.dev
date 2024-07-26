import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code | エンジニアのためのコード発見サービス",
  description: "Codeは構築済みアプリ、APIを共有するサービスです。Codeに共有されているコードを使ってアプリ開発、プログラミング勉強をスタートさせましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
