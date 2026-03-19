import type { ExperienceItem } from "@/app/_types/experience";
import styles from "./ExperienceList.module.css";

interface ExperienceListProps {
  items: ExperienceItem[];
}

export default function ExperienceList({ items }: ExperienceListProps) {
  return (
    <ul className={styles.itemsGrid}>
      {items.map((item, idx) => (
        <li key={idx} className={styles.card}>
          <div className={styles.cardHeader}>
            <span className={styles.period}>{item.period}</span>
          </div>

          <h3 className={styles.cardTitle}>{item.title}</h3>
          <p className={styles.organization}>{item.organization}</p>

          {item.highlights.length > 0 && (
            <ul className={styles.highlights}>
              {item.highlights.map((highlight) => (
                <li key={highlight} className={styles.highlightItem}>
                  {highlight}
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}
