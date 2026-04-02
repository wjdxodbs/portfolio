import styles from "./Skills.module.css";
import { skills } from "@/app/_constants/skills";
import SkillCard from "./SkillCard";
import SectionHeader from "@/components/common/SectionHeader";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";

const CATEGORIES: Record<string, string[]> = {
  Core: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  Styling: ["SCSS", "Tailwind CSS"],
  "State Management": ["Recoil", "Zustand", "Tanstack Query"],
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionHeader label="Skills" index="02" />

        {Object.entries(CATEGORIES).map(([category, names], idx) => {
          const categorySkills = skills.filter((s) => names.includes(s.name));
          return (
            <AnimateOnScroll key={category} className={styles.category} delay={idx * 100}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.grid}>
                {categorySkills.map((skill) => (
                  <li key={skill.name}>
                    <SkillCard skill={skill} />
                  </li>
                ))}
              </ul>
            </AnimateOnScroll>
          );
        })}
      </div>
    </section>
  );
}
