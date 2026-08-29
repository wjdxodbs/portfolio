import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
import { Monitor, Download } from "lucide-react";
import styles from "./Hero.module.css";
import HeroStats from "./HeroStats";

interface MarqueeWord {
  word: string;
  accent?: boolean;
}

const MARQUEE_ROWS: MarqueeWord[][] = [
  [
    { word: "BUILD" },
    { word: "BREAK", accent: true },
    { word: "SHIP" },
    { word: "LEARN" },
  ],
  [
    { word: "SYSTEMS", accent: true },
    { word: "INTERFACES" },
    { word: "DETAILS" },
  ],
  [{ word: "CURIOUS" }, { word: "RIGOROUS", accent: true }, { word: "VERIFY" }],
];

export default function Hero() {
  const year = new Date().getFullYear();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.marqueeStack} aria-hidden="true">
        {MARQUEE_ROWS.map((row, rowIdx) => (
          <div
            key={rowIdx}
            className={
              rowIdx === 1
                ? `${styles.marqueeRow} ${styles.marqueeReverse}`
                : styles.marqueeRow
            }
          >
            <div className={styles.marqueeTrack}>
              {[...row, ...row, ...row].map((item, i) => (
                <span
                  key={i}
                  className={item.accent ? styles.marqueeAccent : undefined}
                >
                  {item.word}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className={styles.inner}>
        <div className={styles.card}>
          <div className={styles.eyebrow} aria-hidden="true">
            <span className={styles.eyebrowLine} />
            <span className={styles.eyebrowText}>
              Frontend · Seoul · {year}
            </span>
          </div>

          <h1 className={styles.headline}>
            <span>정태윤,</span>
            <span>
              AI로 빠르게,{" "}
              <em className={styles.headlineAccent}>디테일은 확실하게.</em>
            </span>
          </h1>

          <div className={styles.body}>
            <HeroStats />

            <div className={styles.ctas}>
              <CtaButton as={Link} href="/projects" variant="primary" size="lg">
                <Monitor size={16} aria-hidden="true" />
                프로젝트 보기
              </CtaButton>
              <CtaButton
                as="a"
                href="/resume.pdf"
                download="프론트엔드 개발자 정태윤 이력서.pdf"
                variant="outline"
                size="lg"
              >
                <Download size={16} aria-hidden="true" />
                이력서 다운로드
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
