"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";
import { projects } from "@/app/(withHeader)/projects/_constants/projects";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import { PROJECT_TYPE_LABEL } from "@/app/_constants/labels";
import TechBadge from "./TechBadge";
import styles from "./ProjectCardGrid.module.css";

const ProjectModal = dynamic(() => import("./ProjectModal"), { ssr: false });

export default function ProjectCardGrid() {
  const [activeIdx, setActiveIdx] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [triggerElement, setTriggerElement] = useState<HTMLElement | null>(
    null,
  );
  const gridRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    const mql = window.matchMedia("(max-width: 640px)");
    let rafId = 0;
    let cleanup: (() => void) | null = null;

    const attach = () => {
      const grid = gridRef.current;
      if (!grid) return;

      const update = () => {
        const gridCenter = grid.scrollLeft + grid.clientWidth / 2;
        let closestIdx = 0;
        let minDist = Infinity;
        cardRefs.current.forEach((card, idx) => {
          if (!card) return;
          const cardCenter = card.offsetLeft + card.clientWidth / 2;
          const dist = Math.abs(cardCenter - gridCenter);
          if (dist < minDist) {
            minDist = dist;
            closestIdx = idx;
          }
        });
        setActiveIdx(closestIdx);
      };

      const onScroll = () => {
        cancelAnimationFrame(rafId);
        rafId = requestAnimationFrame(update);
      };

      grid.addEventListener("scroll", onScroll, { passive: true });
      update();

      cleanup = () => {
        grid.removeEventListener("scroll", onScroll);
        cancelAnimationFrame(rafId);
      };
    };

    const sync = () => {
      cleanup?.();
      cleanup = null;
      if (mql.matches) attach();
      else setActiveIdx(0);
    };

    sync();
    mql.addEventListener("change", sync);

    return () => {
      mql.removeEventListener("change", sync);
      cleanup?.();
    };
  }, []);

  const openModal = (idx: number) => {
    setTriggerElement(cardRefs.current[idx] ?? null);
    setSelectedProject(projects[idx]);
  };

  const scrollToCard = (idx: number) => {
    const card = cardRefs.current[idx];
    const grid = gridRef.current;
    if (!card || !grid) return;
    const targetLeft =
      card.offsetLeft - (grid.clientWidth - card.clientWidth) / 2;
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    grid.scrollTo({
      left: targetLeft,
      behavior: prefersReduced ? "auto" : "smooth",
    });
  };

  const handleCardClick = (idx: number) => {
    const isMobile = window.matchMedia("(max-width: 640px)").matches;
    if (!isMobile) {
      openModal(idx);
      return;
    }
    if (idx === activeIdx) {
      openModal(idx);
      return;
    }
    scrollToCard(idx);
  };

  const handleClose = () => {
    setSelectedProject(null);
    setTriggerElement(null);
  };

  return (
    <>
      <div
        ref={gridRef}
        className={styles.grid}
        role="group"
        aria-label="프로젝트 포스터"
      >
        {projects.map((project, idx) => (
          <article
            key={project.id}
            ref={(el) => {
              cardRefs.current[idx] = el;
            }}
            className={`${styles.card} ${idx === activeIdx ? styles.cardActive : ""}`}
            style={
              project.thumbnailBg
                ? { background: project.thumbnailBg }
                : undefined
            }
            role="button"
            tabIndex={0}
            aria-label={`${idx + 1} / ${projects.length}, ${PROJECT_TYPE_LABEL[project.type]} ${project.title} 자세히 보기`}
            aria-current={idx === activeIdx ? "location" : undefined}
            onClick={() => handleCardClick(idx)}
          >
            <Image
              src={project.thumbnailUrl}
              alt=""
              fill
              sizes="(max-width: 640px) 78vw, (max-width: 1024px) 50vw, 33vw"
              className={styles.image}
            />
            <div className={styles.overlay}>
              <div className={styles.top}>
                <span className={styles.index}>
                  {String(idx + 1).padStart(2, "0")}
                </span>
                <span className={styles.type}>
                  {PROJECT_TYPE_LABEL[project.type]}
                </span>
              </div>
              <div className={styles.bottom}>
                <h3 className={styles.title}>{project.title}</h3>
                <p className={styles.desc}>{project.description}</p>
                <TechBadge techStack={project.techStack} variant="icon" />
              </div>
            </div>
          </article>
        ))}
      </div>
      <div className={styles.indicator} aria-hidden="true">
        {projects.map((project, idx) => (
          <span
            key={project.id}
            className={`${styles.dot} ${idx === activeIdx ? styles.dotActive : ""}`}
          />
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
