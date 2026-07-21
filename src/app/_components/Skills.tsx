import styles from "./Skills.module.css";
import { skills } from "@/app/_constants/skills";
import { SKILL_CATEGORIES } from "@/app/_types/skill";
import SkillCard from "./SkillCard";
import SectionHeader from "@/components/common/SectionHeader";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionHeader label="Skills" index="02" />

        {SKILL_CATEGORIES.map((category, idx) => {
          const categorySkills = skills.filter((s) => s.category === category);
          return (
            <AnimateOnScroll
              key={category}
              className={styles.category}
              delay={idx * 100}
            >
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
