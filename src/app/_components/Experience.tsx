import styles from "./Experience.module.css";
import SectionHeader from "@/components/common/SectionHeader";
import ExperienceInteractive from "./ExperienceInteractive";

export default function Experience() {
  return (
    <section id="experience" className={styles.experience}>
      <div className="container">
        <SectionHeader
          label="Experience"
          title="경력 & 경험"
        />

        <ExperienceInteractive />
      </div>
    </section>
  );
}
