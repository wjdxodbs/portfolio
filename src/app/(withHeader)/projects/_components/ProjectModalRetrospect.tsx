import styles from "./ProjectModalRetrospect.module.css";

interface ProjectModalRetrospectProps {
  items: string[];
}

export default function ProjectModalRetrospect({
  items,
}: ProjectModalRetrospectProps) {
  if (items.length === 0) return null;

  return (
    <div className={styles.section}>
      <span className={styles.label}>프로젝트 회고</span>
      <ul className={styles.list}>
        {items.map((item, idx) => (
          <li key={idx} className={styles.item}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
