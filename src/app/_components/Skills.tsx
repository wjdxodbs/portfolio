import styles from "./Skills.module.css";
import { skills } from "@/app/_constants/skills";
import SkillCard from "./SkillCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionHeader label="Skills" index="02" />

        <ul className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
