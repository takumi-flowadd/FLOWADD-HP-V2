import "./globals.css";
import { GoogleAnalytics } from "@next/third-parties/google";
import type { Metadata } from "next";
import Header from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  metadataBase: new URL('https://flowadd.net'),
  title: {
    template: '%s | FLOWADD -フローアド- | ドライフラワー',
    default: 'FLOWADD -フローアド- | ドライフラワー',
  },
  description:
    'ドライフラワーを使ったブーケや花飾りの販売店！結婚式や成人式などの特別なタイミングで使える花飾りから、プレゼントや今話題の祝電で送れる花飾りまで多数ご用意しています。大切な人のため、自分のために華やかでお手軽なドライフラワーを選んでみませんか？',
  openGraph: {
    title: 'FLOWADD -フローアド- | ドライフラワー',
    description:
      'ドライフラワーを使ったブーケや花飾りの販売店！結婚式や成人式などの特別なタイミングで使える花飾りから、プレゼントや今話題の祝電で送れる花飾りまで多数ご用意しています。大切な人のため、自分のために華やかでお手軽なドライフラワーを選んでみませんか？',
    images: ['/ogp.png'],
  },
  alternates: {
    canonical: 'https://flowadd.net',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
      <GoogleAnalytics gaId="G-HTNR3NG646" />
    </html>
  );
}