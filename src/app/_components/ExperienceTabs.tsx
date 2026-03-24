"use client";

import CtaButton from "@/components/ui/CtaButton";
import type { CategoryData, CategoryType } from "@/app/_types/experience";
import styles from "./ExperienceTabs.module.css";

interface ExperienceTabsProps {
  categories: CategoryData[];
  activeCategory: CategoryType;
  onSelect: (id: CategoryType) => void;
}

export default function ExperienceTabs({
  categories,
  activeCategory,
  onSelect,
}: ExperienceTabsProps) {
  return (
    <div className={styles.tabs} role="tablist" aria-label="경험 카테고리">
      {categories.map((category) => (
        <CtaButton
          key={category.id}
          as="button"
          type="button"
          role="tab"
          aria-selected={activeCategory === category.id}
          aria-controls={`experience-panel-${category.id}`}
          className={activeCategory === category.id ? styles.tabActive : undefined}
          onClick={() => onSelect(category.id)}
          variant="secondary"
          size="md"
        >
          <span className={styles.tabIcon}>{category.icon}</span>
          <span className={styles.tabLabel}>{category.label}</span>
        </CtaButton>
      ))}
    </div>
  );
}
