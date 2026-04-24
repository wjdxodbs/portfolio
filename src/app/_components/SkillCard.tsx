"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Skill } from "@/app/_types/skill";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const bodyId = `skill-body-${skill.name.replace(/\s+/g, "-").toLowerCase()}`;

  return (
    <article className={`${styles.card} ${isOpen ? styles.open : ""}`}>
      <button
        type="button"
        className={styles.header}
        aria-expanded={isOpen}
        aria-controls={bodyId}
        onClick={() => setIsOpen((v) => !v)}
      >
        <span className={styles.name}>{skill.name}</span>
        <div className={styles.right}>
          <div
            className={styles.level}
            role="img"
            aria-label={`숙련도 ${skill.level} / 5`}
          >
            {Array.from({ length: 5 }, (_, i) => (
              <span
                key={i}
                className={i < skill.level ? styles.barFilled : styles.bar}
                aria-hidden="true"
              />
            ))}
          </div>
          <ChevronDown
            size={16}
            className={styles.chevron}
            aria-hidden="true"
          />
        </div>
      </button>
      <div id={bodyId} className={styles.body}>
        <div className={styles.bodyInner}>
          <ul className={styles.caps}>
            {skill.capabilities.map((cap, i) => (
              <li key={i} className={styles.cap}>
                {cap}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </article>
  );
}
