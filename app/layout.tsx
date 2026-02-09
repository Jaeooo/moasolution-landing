import type { Metadata } from "next";
import { Geist } from "next/font/google";
import localFont from "next/font/local";
import { ThemeProvider } from "next-themes";
import "./globals.css";

const defaultUrl = process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "http://localhost:3000";

export const metadata: Metadata = {
  metadataBase: new URL(defaultUrl),
  title: "모아솔루션 - 단골 관리를 쉽고 편리하게",
  description: "사장님은 장사만 하세요. 단골 관리는 모아가 합니다. 복잡한 설치 없이 태블릿 하나로 끝나는 검증된 적립·마케팅 솔루션",
};

const geistSans = Geist({
  variable: "--font-geist-sans",
  display: "swap",
  subsets: ["latin"],
});

// SUIT 폰트 설정
const suit = localFont({
  src: [
    {
      path: "../public/fonts/SUIT-Thin.woff2",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-ExtraLight.woff2",
      weight: "200",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-SemiBold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-ExtraBold.woff2",
      weight: "800",
      style: "normal",
    },
    {
      path: "../public/fonts/SUIT-Heavy.woff2",
      weight: "900",
      style: "normal",
    },
  ],
  variable: "--font-suit",
  display: "swap",
  fallback: ["system-ui", "arial"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" suppressHydrationWarning>
      <body className={`${suit.variable} ${geistSans.variable} font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
