import styles from "./page.module.css";

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Projects</span>
          <h1 className={styles.title}>프로젝트</h1>
          <p className={styles.subtitle}>
            지금까지 진행한 개인 프로젝트와 팀 프로젝트입니다.
          </p>
        </div>

        <section className={styles.notionContainer}>
          <iframe
            src="https://exultant-dish-a7c.notion.site/ebd/31d0758d87ad4f8faaf07f11553411b2?v=b8ed41eeebc4446087cb5383b4bae6e1"
            allow="fullscreen"
            loading="lazy"
            className={styles.notionIframe}
            title="프로젝트"
            sandbox="allow-scripts allow-same-origin allow-forms allow-popups allow-presentation"
          />
        </section>
      </div>
    </div>
  );
}
