"use client";

import { useState } from "react";
import { projects } from "@/constants/projects";
import type { Project } from "@/types/project";
import ProjectCard, { type CardRect } from "@/app/components/ProjectCard";
import ProjectModal from "@/app/components/ProjectModal";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [originRect, setOriginRect] = useState<CardRect | null>(null);

  const handleCardClick = (project: Project, rect: CardRect) => {
    setOriginRect(rect);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setOriginRect(null);
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Projects</span>
          <h1 className={styles.title}>프로젝트</h1>
          <p className={styles.subtitle}>
            지금까지 진행한 개인 프로젝트와 팀 프로젝트입니다.
          </p>
        </div>

        <section className={styles.grid}>
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onClick={handleCardClick}
            />
          ))}
        </section>
      </div>

      <ProjectModal
        project={selectedProject}
        originRect={originRect}
        onClose={handleClose}
      />
    </div>
  );
}
