"use client";

import { useRef } from "react";
import Image from "next/image";
import type { Project } from "@/types/project";
import { getTechIcon } from "@/utils/techIcons";
import styles from "./ProjectCard.module.css";

export interface CardRect {
  top: number;
  left: number;
  width: number;
  height: number;
}

interface ProjectCardProps {
  project: Project;
  onClick: (project: Project, rect: CardRect) => void;
}

export default function ProjectCard({ project, onClick }: ProjectCardProps) {
  const cardRef = useRef<HTMLElement>(null);

  const handleClick = () => {
    if (cardRef.current) {
      const rect = cardRef.current.getBoundingClientRect();
      onClick(project, {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
      });
    }
  };

  return (
    <article ref={cardRef} className={styles.card} onClick={handleClick}>
      <figure
        className={styles.thumbnail}
        style={project.thumbnailBg ? { background: project.thumbnailBg } : undefined}
      >
        {project.thumbnailUrl ? (
          <Image
            src={project.thumbnailUrl}
            alt={project.title}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
            className={styles.thumbnailImage}
          />
        ) : (
          <div className={styles.thumbnailPlaceholder}>
            <span className={styles.placeholderText}>{project.title[0]}</span>
          </div>
        )}
        <span className={styles.typeBadge}>
          {project.type === "team" ? "팀 프로젝트" : "개인 프로젝트"}
        </span>
        <div className={styles.thumbnailOverlay}>
          <span className={styles.overlayText}>클릭하여 자세히 보기</span>
        </div>
      </figure>

      <div className={styles.content}>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.description}>{project.description}</p>

        <div className={styles.meta}>
          <span className={styles.period}>{project.period}</span>
          <span className={styles.duration}>{project.duration}</span>
        </div>

        <ul className={styles.techStack}>
          {project.techStack.map((tech) => {
            const icon = getTechIcon(tech);
            return (
              <li key={tech} className={styles.techItem}>
                <div className={styles.techIconWrapper}>
                  {icon.iconUrl ? (
                    <Image
                      src={icon.iconUrl}
                      alt={tech}
                      width={20}
                      height={20}
                      className={styles.techIcon}
                    />
                  ) : (
                    <span className={styles.techFallback}>{icon.abbr ?? tech[0]}</span>
                  )}
                </div>
                <span className={styles.tooltip}>{tech}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </article>
  );
}
