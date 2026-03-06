"use client";

import { useState } from "react";
import { projects } from "@/app/projects/_constants/projects";
import type { Project } from "@/app/projects/_types/project";
import ProjectCard, { type CardRect } from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import styles from "./ProjectCardGrid.module.css";

export default function ProjectCardGrid() {
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
    <>
      <section className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={handleCardClick}
          />
        ))}
      </section>

      <ProjectModal
        project={selectedProject}
        originRect={originRect}
        onClose={handleClose}
      />
    </>
  );
}
