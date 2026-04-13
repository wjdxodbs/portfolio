"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { projects } from "@/app/(withHeader)/projects/_constants/projects";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import ProjectCard from "./ProjectCard";
import styles from "./ProjectCardGrid.module.css";

const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

export default function ProjectCardGrid() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null,
  );

  const handleCardClick = (project: Project, triggerEl: HTMLElement | null) => {
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
        {projects.map((project, idx) => (
          <div
            key={project.id}
            className={styles.cardWrapper}
            style={{ animationDelay: `${idx * 80}ms` }}
          >
            <ProjectCard
              project={project}
              onClick={handleCardClick}
              priority={idx < 3}
            />
          </div>
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
