import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
import { Monitor, Download } from "lucide-react";
import styles from "./Hero.module.css";
import HeroStats from "./HeroStats";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.eyebrow} aria-hidden="true">
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>
            Frontend Developer · Seoul · 2026
          </span>
        </div>

        <h1 className={styles.headline}>
          <span>정태윤,</span>
          <span className={styles.headlineOutline}>웹을 만드는</span>
          <em className={styles.headlineAccent}>사람.</em>
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
    </section>
  );
}
