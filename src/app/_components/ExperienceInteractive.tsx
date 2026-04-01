"use client";

import { useState } from "react";
import styles from "./ExperienceInteractive.module.css";
import type { CategoryType } from "@/app/_types/experience";
import { categories } from "@/app/_constants/experiences";
import ExperienceTabs from "./ExperienceTabs";
import ExperienceList from "./ExperienceList";

export default function ExperienceInteractive() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("education");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <>
      <ExperienceTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <div
        id={`experience-panel-${activeCategory}`}
        role="tabpanel"
        aria-label={currentCategory?.label}
        className={styles.content}
      >
        {currentCategory && (
          <ExperienceList
            items={currentCategory.items}
            categoryLabel={currentCategory.label}
          />
        )}
      </div>
    </>
  );
}
