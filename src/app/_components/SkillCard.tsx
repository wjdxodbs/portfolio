"use client";

import { useState } from "react";
import styles from "./SkillCard.module.css";
import type { Skill } from "@/app/_types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <li
      className={`${styles.skillCard} ${isOpen ? styles.skillCardOpen : ""}`}
    >
      <button
        className={styles.skillHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={styles.skillMain}>
          <span className={styles.skillName}>{skill.name}</span>
          <div className={styles.skillLevel}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${
                  star <= skill.level ? styles.starFilled : ""
                }`}
              >
                ★
              </span>
            ))}
            <span className={styles.levelText}>{skill.level}/5</span>
          </div>
        </div>
        <span
          className={`${styles.expandIcon} ${
            isOpen ? styles.expandIconOpen : ""
          }`}
        >
          ▼
        </span>
      </button>

      <div
        className={`${styles.skillContent} ${
          isOpen ? styles.skillContentOpen : ""
        }`}
      >
        <div className={styles.capabilities}>
          <ul className={styles.capabilitiesList}>
            {skill.capabilities.map((cap, index) => (
              <li key={index} className={styles.capabilityItem}>
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.capabilityText}>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}
