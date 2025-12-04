import styles from "./Skills.module.css";
import { skills } from "@/constants/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Skills</span>
          <h2 className={styles.title}>기술 스택</h2>
          <p className={styles.subtitle}>
            각 기술을 클릭하면 상세 설명을 확인할 수 있습니다.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
}
