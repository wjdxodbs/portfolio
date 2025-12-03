import Link from "next/link";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <p className={styles.greeting}>안녕하세요, 저는</p>
          <h1 className={styles.name}>
            <span className={styles.firstName}>홍길동</span>
            <span className={styles.role}>Frontend Developer</span>
          </h1>
          <p className={styles.description}>
            사용자 중심의 웹 경험을 만드는{" "}
            <span className={styles.highlight}>프론트엔드 개발자</span>입니다.
            <br />
            React, TypeScript, Next.js를 활용하여 직관적이고 아름다운
            인터페이스를 구현합니다.
          </p>
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
  name: "홍길동",
  role: "Frontend Developer",
  skills: ["React", "TypeScript", "Next.js"],
  passion: "사용자 경험",
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
