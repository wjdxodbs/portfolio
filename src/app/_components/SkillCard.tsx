import type { Skill } from "@/app/_types/skill";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.name}>{skill.name}</span>
        <div
          className={styles.level}
          role="img"
          aria-label={`숙련도 ${skill.level} / 5`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < skill.level ? styles.dotFilled : styles.dot}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <ul className={styles.caps}>
        {skill.capabilities.map((cap, i) => (
          <li key={i} className={styles.cap}>
            {cap}
          </li>
        ))}
      </ul>
    </article>
  );
}
