"use client";

import { useState } from "react";
import styles from "./Experience.module.css";
import type { CategoryType } from "@/app/_types/experience";
import { categories } from "@/app/_constants/experiences";
import SectionHeader from "@/components/common/SectionHeader";
import ExperienceTabs from "./ExperienceTabs";
import ExperienceList from "./ExperienceList";

export default function Experience() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("education");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <SectionHeader
          label="Experience"
          title="경력 & 경험"
        />

        <ExperienceTabs
          categories={categories}
          activeCategory={activeCategory}
          onSelect={setActiveCategory}
        />

        <div className={styles.content}>
          {currentCategory && (
            <ExperienceList items={currentCategory.items} />
          )}
        </div>
      </div>
    </section>
  );
}
