import type { ExperienceItem } from "@/app/_types/experience";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import styles from "./ExperienceList.module.css";

interface FlatExperienceItem extends ExperienceItem {
  categoryLabel: string;
}

interface ExperienceListProps {
  items: FlatExperienceItem[];
}

export default function ExperienceList({ items }: ExperienceListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item, idx) => (
        <AnimateOnScroll key={idx} as="li" delay={idx * 60} className={styles.row}>
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
          <span className={styles.badge}>{item.categoryLabel}</span>
        </AnimateOnScroll>
      ))}
    </ul>
  );
}
