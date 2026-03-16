import type { Project } from "@/app/(withHeader)/projects/_types/project";
import styles from "./ProjectModalInfoGrid.module.css";

interface ProjectModalInfoGridProps {
  project: Project;
}

export default function ProjectModalInfoGrid({ project }: ProjectModalInfoGridProps) {
  return (
    <div className={styles.infoGrid}>
      <div className={styles.infoRow}>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>개발 인원</span>
          <span className={styles.infoValue}>{project.teamSize}</span>
        </div>
        <div className={styles.infoItem}>
          <span className={styles.infoLabel}>역할</span>
          <span className={styles.infoValue}>{project.role}</span>
        </div>
      </div>
      {project.achievements.length > 0 && (
        <div className={styles.infoRow}>
          <div className={`${styles.infoItem} ${styles.full}`}>
            <span className={styles.infoLabel}>성과</span>
            <ul className={styles.achievementList}>
              {project.achievements.map((item) => (
                <li key={item} className={styles.achievementItem}>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </div>
  );
}
