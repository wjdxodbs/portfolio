import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";

export const metadata: Metadata = {
  title: "정태윤 | Frontend Developer Portfolio",
  description: "프론트엔드 개발자 정태윤의 포트폴리오입니다. ",
  keywords: [
    "프론트엔드",
    "개발자",
    "포트폴리오",
    "React",
    "TypeScript",
    "Next.js",
  ],
  authors: [{ name: "정태윤" }],
  creator: "정태윤",
  publisher: "정태윤",
  openGraph: {
    title: "정태윤 | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
    url: "https://portfolio-lake-delta-ms83rd5i7f.vercel.app/",
    siteName: "정태윤 포트폴리오",
    images: [
      {
        url: "/id_photo.jpg",
        width: 1200,
        height: 630,
        alt: "정태윤 - 프론트엔드 개발자",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}
