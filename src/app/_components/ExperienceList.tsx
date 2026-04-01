import type { ExperienceItem } from "@/app/_types/experience";
import styles from "./ExperienceList.module.css";

interface ExperienceListProps {
  items: ExperienceItem[];
  categoryLabel: string;
}

export default function ExperienceList({
  items,
  categoryLabel,
}: ExperienceListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item, idx) => (
        <li key={idx} className={styles.row}>
          <span className={styles.period}>{item.period}</span>
          <div className={styles.main}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.org}>{item.organization}</span>
            {item.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {item.highlights.map((h, i) => (
                  <li key={i} className={styles.highlight}>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className={styles.badge}>{categoryLabel}</span>
        </li>
      ))}
    </ul>
  );
}
