import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.name}>
            <span className={styles.firstName}>정태윤</span>
            <span className={styles.role}>Frontend Developer</span>
          </h1>
          <div className={styles.cta}>
            <Link
              href="/projects"
              className={`btn btn-primary ${styles.btnPrimary}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <rect x="2" y="3" width="20" height="14" rx="2" />
                <path d="M8 21h8M12 17v4" />
              </svg>
              프로젝트 보기
            </Link>
            <a
              href="/프론트엔드 개발자 정태윤 이력서.pdf"
              download
              className={`btn btn-secondary ${styles.btnResume}`}
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
              이력서 다운로드
            </a>
          </div>
        </div>

        <div className={styles.visual}>
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
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>Scroll</span>
        <div className={styles.scrollLine}></div>
      </div>
    </section>
  );
}
