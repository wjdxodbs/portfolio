import styles from "./Skills.module.css";
import { skills } from "@/constants/skills";
import SkillCard from "./SkillCard";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <header className="section-header">
          <span className="section-label">Skills</span>
          <h2 className={styles.title}>기술 스택</h2>
          <p className={styles.subtitle}>
            각 기술을 클릭하면 상세 설명을 확인할 수 있습니다.
          </p>
        </header>

        <ul className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
