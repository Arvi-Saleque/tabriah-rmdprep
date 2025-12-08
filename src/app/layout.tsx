import type { Metadata } from "next";
import { Noto_Sans_Bengali, Noto_Naskh_Arabic } from 'next/font/google';
import LoadingScreen from '@/components/LoadingScreen';
import "./globals.css";

const notoSansBengali = Noto_Sans_Bengali({
  subsets: ['bengali'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-bangla',
  display: 'swap',
});

const notoNaskhArabic = Noto_Naskh_Arabic({
  subsets: ['arabic'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-arabic',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "রমজানের প্রস্তুতি | Ramadan Preparation Course",
  description: "২ মাসে ১৬ ক্লাস - পরিপূর্ণ নামাজ, বেসিক ১১ টা সূরা এবং দৈনন্দিন মাসনূন আমল শিখুন",
  icons: {
    icon: '/images/logo.png',
    apple: '/images/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="bn">
      <body className={`${notoSansBengali.variable} ${notoNaskhArabic.variable} font-bangla antialiased`}>
        <LoadingScreen />
        {children}
      </body>
    </html>
  );
}
