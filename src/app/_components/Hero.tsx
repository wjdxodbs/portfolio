import Image from "next/image";
import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
import { Monitor, Download } from "lucide-react";
import styles from "./Hero.module.css";
import HeroStats from "./HeroStats";

export default function Hero() {
  const year = new Date().getFullYear();

  return (
    <section id="hero" className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div className={styles.headBlock}>
            <div className={styles.meta}>
              <div className={styles.eyebrow} aria-hidden="true">
                <span className={styles.eyebrowText}>
                  Frontend · Seoul · {year}
                </span>
              </div>
              <p className={styles.status}>
                <span className={styles.statusDot} aria-hidden="true" />
                취업 준비 중
              </p>
            </div>

            <h1 className={styles.headline}>
              <span>정태윤,</span>
              <span>
                AI로 빠르게,{" "}
                <em className={styles.headlineAccent}>디테일은 확실하게.</em>
              </span>
            </h1>
            <p className={styles.lead}>
              React · Next.js · TypeScript 기반의 프론트엔드 개발자입니다.
            </p>
          </div>

          <figure className={styles.photo}>
            <Image
              src="/id_photo.jpg"
              alt="프로필 이미지"
              fill
              sizes="200px"
              className={styles.photoImage}
            />
          </figure>
        </div>

        <ul className={styles.capList}>
          <li>
            Cursor, Claude Code 등 다양한 AI 코딩 도구를 개발 워크플로우에
            활용해 구현 속도를 높이고, 코드 리뷰와 리팩토링으로 품질을
            확보합니다.
          </li>
          <li>
            실서비스 운영 중 Node.js 지원 종료(EOL) 대응, 결제 API 로직 결함 등
            이슈에 직접 대응해 서비스 안정성을 지킵니다.
          </li>
          <li>
            Vanilla JS 기반 기존 서비스 유지보수부터 Next.js 신규 개발까지, 서로
            다른 코드베이스에 빠르게 적응합니다.
          </li>
          <li>
            기획 의도 파악을 위해 적극적으로 커뮤니케이션하고, 담당 기능은
            끝까지 책임지고 완수합니다.
          </li>
        </ul>

        <div className={styles.foot}>
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
