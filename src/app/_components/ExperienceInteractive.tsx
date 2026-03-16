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
      <div className={styles.content}>
        {currentCategory && <ExperienceList items={currentCategory.items} />}
      </div>
    </>
  );
}
