"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useRef, useState } from "react";
import { projects } from "@/app/(withHeader)/projects/_constants/projects";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import { PROJECT_TYPE_LABEL } from "@/app/_constants/labels";
import TechBadge from "./TechBadge";
import styles from "./ProjectCardGrid.module.css";

const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

export default function ProjectCardGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null,
  );
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  const openModal = (idx: number) => {
    setTriggerElement(cardRefs.current[idx] ?? null);
    setSelectedProject(projects[idx]);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setTriggerElement(null);
  };

  return (
    <>
      <div className={styles.grid} role="group" aria-label="프로젝트 목록">
        {projects.map((project, idx) => (
          <article
            key={project.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className={styles.card}
            style={{ "--card-idx": idx } as React.CSSProperties}
            role="button"
            tabIndex={0}
            aria-label={`${idx + 1} / ${projects.length}, ${PROJECT_TYPE_LABEL[project.type]} ${project.title} 자세히 보기`}
            onClick={() => openModal(idx)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                openModal(idx);
              }
            }}
          >
            <div
              className={styles.thumb}
              style={
                project.thumbnailBg
                  ? { background: project.thumbnailBg }
                  : undefined
              }
            >
              <Image
                src={project.thumbnailUrl}
                alt=""
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className={styles.image}
              />
              <span className={styles.idx}>
                {String(idx + 1).padStart(2, "0")}
              </span>
            </div>

            <div className={styles.body}>
              <h3 className={styles.title}>{project.title}</h3>
              <p className={styles.desc}>{project.description}</p>
              <dl className={styles.meta}>
                <dt className={styles.metaKey}>Type</dt>
                <dd className={styles.metaVal}>
                  {PROJECT_TYPE_LABEL[project.type]}
                </dd>
                <dt className={styles.metaKey}>Period</dt>
                <dd className={styles.metaVal}>{project.period}</dd>
                <dt className={styles.metaKey}>Stack</dt>
                <dd className={styles.metaVal}>
                  <TechBadge techStack={project.techStack} variant="icon" />
                </dd>
              </dl>
            </div>
          </article>
        ))}
      </div>

      <ProjectModal
        project={selectedProject}
        triggerElement={triggerElement}
        onClose={handleClose}
      />
    </>
  );
}
