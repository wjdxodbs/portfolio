import Image from "next/image";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import { PROJECT_TYPE_LABEL } from "@/app/_constants/labels";
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
          {PROJECT_TYPE_LABEL[project.type]}
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
            <Image
              src="/icons/github.svg"
              alt=""
              width={20}
              height={20}
              className={styles.githubIcon}
            />
          </a>
        )}
      </div>
      <p className={styles.description}>{project.description}</p>
      <TechBadge techStack={project.techStack} variant="chip" />
    </div>
  );
}
