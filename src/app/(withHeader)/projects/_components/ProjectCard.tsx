"use client";

import { useRef } from "react";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import { PROJECT_TYPE_LABEL } from "@/app/_constants/labels";
import ProjectThumbnail from "./ProjectThumbnail";
import TechBadge from "./TechBadge";
import styles from "./ProjectCard.module.css";

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project, triggerEl: HTMLElement | null) => void;
  priority?: boolean;
}

export default function ProjectCard({
  project,
  onClick,
  priority = false,
}: ProjectCardProps) {
  const cardRef = useRef<HTMLButtonElement>(null);

  const handleClick = () => {
    onClick(project, cardRef.current);
  };

  return (
    <button
      ref={cardRef}
      className={styles.card}
      onClick={handleClick}
      aria-label={`${project.title} 프로젝트 자세히 보기`}
    >
      <ProjectThumbnail
        project={project}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        variant="card"
        priority={priority}
      >
        <span className={styles.typeBadge}>
          {PROJECT_TYPE_LABEL[project.type]}
        </span>
        <div className={styles.overlay}>
          <div className={styles.overlayContent}>
            <h3 className={styles.title}>{project.title}</h3>
            <p className={styles.description}>{project.description}</p>
            <TechBadge techStack={project.techStack} variant="icon" />
          </div>
        </div>
      </ProjectThumbnail>
    </button>
  );
}
