import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: "홍길동 | Frontend Developer Portfolio",
  description: "프론트엔드 개발자 홍길동의 포트폴리오입니다. React, TypeScript, Next.js를 활용한 웹 개발",
  keywords: ["프론트엔드", "개발자", "포트폴리오", "React", "TypeScript", "Next.js"],
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
        <Footer />
      </body>
    </html>
  );
}
