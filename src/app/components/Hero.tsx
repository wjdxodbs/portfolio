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
              프로젝트 보기
              <span className={styles.arrow}>→</span>
            </Link>
            <Link
              href="/contact"
              className={`btn btn-secondary ${styles.btnSecondary}`}
            >
              연락하기
            </Link>
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
