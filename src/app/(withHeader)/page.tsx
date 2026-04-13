import type { Metadata } from "next";
import Hero from "@/app/_components/Hero";
import About from "@/app/_components/About";
import Skills from "@/app/_components/Skills";
import Experience from "@/app/_components/Experience";
import SectionDots from "@/app/_components/SectionDots";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "정태윤 | Frontend Developer Portfolio",
    description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
    url: SITE_URL,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function Home() {
  return (
    <>
      <SectionDots />
      <Hero />
      <About />
      <Skills />
      <Experience />
    </>
  );
}
