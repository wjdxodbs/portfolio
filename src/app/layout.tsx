import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans_KR, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

const ibmPlexSansKR = IBM_Plex_Sans_KR({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "정태윤 | Frontend Developer Portfolio",
  description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
  keywords: [
    "프론트엔드",
    "프론트엔드 개발자",
    "정태윤",
    "개발자",
    "포트폴리오",
    "React",
    "TypeScript",
    "Next.js",
    "웹 개발자",
    "Frontend Developer",
    "Frontend",
  ],
  authors: [{ name: "정태윤" }],
  creator: "정태윤",
  publisher: "정태윤",
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "정태윤 | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
    url: SITE_URL,
    siteName: "정태윤 포트폴리오",
    locale: "ko_KR",
    type: "website",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "정태윤 | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
    images: ["/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: "#000000",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${ibmPlexSansKR.variable} ${jetbrainsMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>{children}</body>
    </html>
  );
}
