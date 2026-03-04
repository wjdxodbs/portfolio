"use client";

import { useState } from "react";
import { projects } from "@/app/projects/_constants/projects";
import type { Project } from "@/app/projects/_types/project";
import ProjectCard, { type CardRect } from "@/app/projects/_components/ProjectCard";
import ProjectModal from "@/app/projects/_components/ProjectModal";
import SectionHeader from "@/components/common/SectionHeader";
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
    <main className="page-layout">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="프로젝트"
          subtitle="지금까지 진행한 개인 프로젝트와 팀 프로젝트입니다."
          as="h1"
        />

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
    </main>
  );
}
