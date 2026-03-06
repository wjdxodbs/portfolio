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
    <nav className={styles.tabs} aria-label="경험 카테고리">
      {categories.map((category) => (
        <button
          key={category.id}
          type="button"
          className={activeCategory === category.id ? styles.tabActive : ""}
          onClick={() => onSelect(category.id)}
        >
          <CtaButton variant="secondary" size="md">
            <span className={styles.tabIcon}>{category.icon}</span>
            <span className={styles.tabLabel}>{category.label}</span>
          </CtaButton>
        </button>
      ))}
    </nav>
  );
}
