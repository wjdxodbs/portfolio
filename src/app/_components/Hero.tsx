import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
import { Monitor, Download } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.eyebrow} aria-hidden="true">
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>
            Frontend Developer · Seoul · 2025
          </span>
        </div>

        <h1 className={styles.headline}>
          <span>정태윤,</span>
          <span className={styles.headlineOutline}>웹을 만드는</span>
          <em className={styles.headlineAccent}>사람.</em>
        </h1>

        <div className={styles.body}>
          <p className={styles.desc}>
            <strong>React · TypeScript · Next.js</strong>로 인터페이스를
            설계하고, 사용자가 원하는 것을 직관적으로 찾을 수 있는 경험을
            만듭니다. 코드의 가독성과 유지보수를 언제나 먼저 생각합니다.
          </p>

          <div className={styles.right}>
            <dl className={styles.stats}>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Projects</dt>
                <dd className={styles.statNum}>4+</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>SSAFY 수상</dt>
                <dd className={styles.statNum}>2관왕</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Curiosity</dt>
                <dd className={styles.statNum}>∞</dd>
              </div>
            </dl>

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
