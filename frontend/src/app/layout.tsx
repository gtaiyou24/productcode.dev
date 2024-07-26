import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {clsx} from "clsx";
import Providers from "@/components/provider";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Code | エンジニアのためのコード共有サービス",
  description: "Codeは構築済みアプリ、APIを共有するサービスです。Codeに共有されているコードを使ってアプリ開発、プログラミング勉強をスタートさせましょう。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta httpEquiv="content-language" content="ja" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={clsx(inter.className, 'flex flex-col min-h-screen')}>
        <Providers>
          <main className="flex-grow">{children}</main>
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
