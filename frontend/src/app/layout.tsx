import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {clsx} from "clsx";
import Providers from "@/components/provider";
import {Toaster} from "@/components/ui/toaster";
import {APP_NAME, BASE_URL, X_CREATOR} from "@/constants";
import Footer from "@/components/layout/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
      default: `${APP_NAME} | エンジニアのためのコード共有サービス`,
      template: `%s | ${APP_NAME}`
  },
  description: "Codeは構築済みアプリ、APIを共有するサービスです。Codeに共有されているコードを使ってアプリ開発、プログラミング勉強をスタートさせましょう。",
  keywords: ["Code", "コード", "プログラミング"],
  robots: {
    follow: true,
    index: true
  },
  ...(X_CREATOR &&
      BASE_URL && {
      twitter: {
        card: 'summary_large_image',
        creator: X_CREATOR,
        site: BASE_URL
      }
  }),
  icons: {
    apple: [
        {
            media: '(prefers-color-scheme: light)',
            url: '/favicons/light/apple-touch-icon.png',
            href: '/favicons/light/apple-touch-icon.png',
        },
        {
            media: '(prefers-color-scheme: dark)',
            url: '/favicons/dark/apple-touch-icon.png',
            href: '/favicons/dark/apple-touch-icon.png',
        },
    ],
    icon: [
        {
            media: '(prefers-color-scheme: light)',
            type: 'image/png',
            url: '/favicons/light/favicon-32x32.png',
            href: '/favicons/light/favicon-32x32.png',
        },
        {
            media: '(prefers-color-scheme: dark)',
            type: 'image/png',
            url: '/favicons/dark/favicon-32x32.png',
            href: '/favicons/dark/favicon-32x32.png',
        },
    ]
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" suppressHydrationWarning>
      <head>
        <meta httpEquiv="content-language" content="ja" />
        <meta name="google" content="notranslate" />
      </head>
      <body className={clsx(inter.className, 'flex flex-col min-h-screen')}>
        <Providers>
          <main className="flex-grow">{children}</main>
          <Footer />
          <Toaster />
        </Providers>
      </body>
    </html>
  );
}
