"use client";

import { useState } from "react";
import { projects } from "@/app/(withHeader)/projects/_constants/projects";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import ProjectCard from "./ProjectCard";
import ProjectModal from "./ProjectModal";
import styles from "./ProjectCardGrid.module.css";

export default function ProjectCardGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(null);

  const handleCardClick = (
    project: Project,
    triggerEl: HTMLElement | null
  ) => {
    setTriggerElement(triggerEl);
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
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
        triggerElement={triggerElement}
        onClose={handleClose}
      />
    </>
  );
}
