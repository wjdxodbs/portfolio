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
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const handleCardClick = (
    project: Project,
    rect: CardRect,
    triggerEl: HTMLElement | null
  ) => {
    setOriginRect(rect);
    setTriggerElement(triggerEl);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setOriginRect(null);
    setTriggerElement(null);
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
        triggerElement={triggerElement}
        onClose={handleClose}
      />
    </>
  );
}
