"use client";

import { useState } from "react";
import styles from "./SkillCard.module.css";
import type { Skill } from "@/app/_types/skill";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);

  return (
    <li className={`${styles.skillCard} ${isOpen ? styles.skillCardOpen : ""}`}>
      <button
        className={styles.skillHeader}
        onClick={handleToggle}
        aria-expanded={isOpen}
      >
        <div className={styles.skillMain}>
          <span className={styles.skillName}>{skill.name}</span>
          <div
            className={styles.skillLevel}
            role="img"
            aria-label={`숙련도 ${skill.level}/5`}
          >
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${
                  star <= skill.level ? styles.starFilled : ""
                }`}
                aria-hidden="true"
              >
                ★
              </span>
            ))}
            <span className={styles.levelText} aria-hidden="true">{skill.level}/5</span>
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
            {skill.capabilities.map((cap) => (
              <li key={cap} className={styles.capabilityItem}>
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
