import Link from "next/link";
import TypewriterRole from "./TypewriterRole";
import CtaButton from "@/components/ui/CtaButton";
import MonitorIcon from "@/components/icons/MonitorIcon";
import DownloadIcon from "@/components/icons/DownloadIcon";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>
            <span className={styles.firstName}>정태윤</span>
            <TypewriterRole />
          </h1>
          <div className={styles.cta}>
            <CtaButton as={Link} href="/projects" variant="primary" size="lg">
              <MonitorIcon />
              프로젝트 보기
            </CtaButton>
            <CtaButton
              as="a"
              href="/resume.pdf"
              download="프론트엔드 개발자 정태윤 이력서.pdf"
              variant="outline"
              size="lg"
            >
              <DownloadIcon />
              이력서 다운로드
            </CtaButton>
          </div>
        </div>

        <figure className={styles.visual}>
          <div className={styles.codeBlock}>
            <div className={styles.codeHeader}>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
              <span className={styles.dot}></span>
            </div>
            <pre className={styles.code}>
              <code>
                {`const developer = {
  name: "정태윤",
  role: "Frontend Developer",
  skills: ["React", "TypeScript", "Next.js"],
  status: "취업 준비 중 🚀"
};`}
              </code>
            </pre>
          </div>
        </figure>
      </div>

      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
