import {
  GraduationCap,
  ScrollText,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import type { ExperienceItem, CategoryType } from "@/app/_types/experience";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import styles from "./ExperienceList.module.css";

const CATEGORY_ICONS: Record<CategoryType, LucideIcon> = {
  education: GraduationCap,
  certificate: ScrollText,
  award: Trophy,
};

interface FlatExperienceItem extends ExperienceItem {
  categoryId: CategoryType;
  categoryLabel: string;
}

interface ExperienceListProps {
  items: FlatExperienceItem[];
}

export default function ExperienceList({ items }: ExperienceListProps) {
  return (
    <ul className={styles.timeline}>
      {items.map((item, idx) => {
        const Icon = CATEGORY_ICONS[item.categoryId];
        return (
          <AnimateOnScroll
            key={idx}
            as="li"
            delay={idx * 60}
            className={styles.item}
          >
            <span className={styles.node} aria-hidden="true">
              <Icon size={14} />
            </span>
            <div className={styles.body}>
              <div className={styles.meta}>
                <span className={styles.period}>{item.period}</span>
                <span className={styles.badge}>{item.categoryLabel}</span>
              </div>
              <div className={styles.title}>{item.title}</div>
              <div className={styles.org}>{item.organization}</div>
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
          </AnimateOnScroll>
        );
      })}
    </ul>
  );
}
