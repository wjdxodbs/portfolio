"use client";

import { useState } from "react";
import styles from "./Experience.module.css";
import type { CategoryType } from "@/types/experience";
import { categories } from "@/constants/experiences";

export default function Experience() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("education");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <header className="section-header">
          <span className="section-label">Experience</span>
          <h2 className={styles.title}>경력 & 경험</h2>
        </header>

        <nav className={styles.tabs} aria-label="경험 카테고리">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.tab} ${
                activeCategory === category.id ? styles.tabActive : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={styles.tabIcon}>{category.icon}</span>
              <span className={styles.tabLabel}>{category.label}</span>
            </button>
          ))}
        </nav>

        <div className={styles.content}>
          {currentCategory && (
            <ul className={styles.itemsGrid}>
              {currentCategory.items.map((item, index) => (
                <li key={index} className={styles.card}>
                  <header className={styles.cardHeader}>
                    <span className={styles.period}>{item.period}</span>
                  </header>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.organization}>{item.organization}</p>

                  {item.highlights.length > 0 && (
                    <ul className={styles.highlights}>
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className={styles.highlightItem}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}
