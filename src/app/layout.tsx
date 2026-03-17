import type { Metadata, Viewport } from "next";
import { Outfit, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
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
  metadataBase: new URL("https://wjdxodbs-portfolio.vercel.app/"),
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
    canonical: "https://wjdxodbs-portfolio.vercel.app/",
  },
  openGraph: {
    title: "정태윤 | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
    url: "https://wjdxodbs-portfolio.vercel.app/",
    siteName: "정태윤 포트폴리오",
    // images: [
    //   {
    //     url: "https://wjdxodbs-portfolio.vercel.app/id_photo.jpg",
    //     width: 1200,
    //     height: 630,
    //     alt: "정태윤 - 프론트엔드 개발자",
    //   },
    // ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "정태윤 | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
    images: ["https://wjdxodbs-portfolio.vercel.app/id_photo.jpg"],
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
      className={`${outfit.variable} ${jetbrainsMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
