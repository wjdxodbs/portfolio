import styles from "./Skills.module.css";
import { skills } from "@/app/_constants/skills";
import SkillCard from "./SkillCard";
import SectionHeader from "@/components/common/SectionHeader";

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionHeader
          label="Skills"
          title="기술 스택"
          subtitle="각 기술을 클릭하면 상세 설명을 확인할 수 있습니다."
        />

        <ul className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </ul>
      </div>
    </section>
  );
}
