import Hero from "@/app/_components/Hero";
import About from "@/app/_components/About";
import Skills from "@/app/_components/Skills";
import Experience from "@/app/_components/Experience";
import SectionDots from "@/app/_components/SectionDots";

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
