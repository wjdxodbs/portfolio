import type { Project } from "@/app/(withHeader)/projects/_types/project";
import TechBadge from "./TechBadge";
import styles from "./ProjectModalHeader.module.css";

interface ProjectModalHeaderProps {
  project: Project;
}

export default function ProjectModalHeader({ project }: ProjectModalHeaderProps) {
  return (
    <div className={styles.header}>
      <div className={styles.headerMeta}>
        <span className={styles.typeBadge}>
          {project.type === "team" ? "팀 프로젝트" : "개인 프로젝트"}
        </span>
        <span className={styles.period}>
          {project.period} · {project.duration}
        </span>
      </div>
      <div className={styles.titleRow}>
        <h2 id="modal-title" className={styles.title}>{project.title}</h2>
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={styles.githubButton}
            aria-label={`${project.title} GitHub 저장소 열기`}
          >
            <img
              src="/icons/github.svg"
              alt=""
              className={styles.githubIcon}
              aria-hidden="true"
            />
          </a>
        )}
      </div>
      <p className={styles.description}>{project.description}</p>
      <TechBadge techStack={project.techStack} variant="chip" />
    </div>
  );
}
