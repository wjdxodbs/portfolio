"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import ProjectModalHeader from "./ProjectModalHeader";
import ProjectModalInfoGrid from "./ProjectModalInfoGrid";
import ProjectModalSection from "./ProjectModalSection";
import sectionStyles from "./ProjectModalSection.module.css";
import styles from "./ProjectModal.module.css";

const FOCUSABLE_SELECTOR =
  'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';

function getFocusableElements(container: HTMLElement): HTMLElement[] {
  return Array.from(
    container.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR)
  ).filter((el) => !el.hasAttribute("disabled") && el.offsetParent !== null);
}

interface ProjectModalProps {
  project: Project | null;
  triggerElement: HTMLElement | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  triggerElement,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!project) {
      setIsClosing(false);
      return;
    }

    closeButtonRef.current?.focus();

    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        handleClose();
        return;
      }

      if (e.key !== "Tab") return;

      const focusable = getFocusableElements(overlay);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (e.shiftKey) {
        if (document.activeElement === first) {
          e.preventDefault();
          last.focus();
        }
      } else {
        if (document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project, triggerElement]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      triggerElement?.focus();
      setIsClosing(false);
      onClose();
    }, 300);
  };

  if (!project) return null;

  const modalClass = [
    styles.modal,
    isClosing ? styles.modalClosing : styles.modalOpening,
  ].join(" ");

  const modalContent = (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        ref={modalRef}
        className={modalClass}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="모달 닫기"
        >
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>

        <div
          className={styles.thumbnail}
          style={project.thumbnailBg ? { background: project.thumbnailBg } : undefined}
        >
          {project.thumbnailUrl ? (
            <Image
              src={project.thumbnailUrl}
              alt={project.title}
              fill
              sizes="(max-width: 480px) 100vw, (max-width: 640px) calc(100vw - 48px), 800px"
              className={styles.thumbnailImage}
            />
          ) : (
            <div className={styles.thumbnailPlaceholder}>
              <span className={styles.placeholderText}>{project.title[0]}</span>
            </div>
          )}
        </div>

        <div className={styles.body}>
          <ProjectModalHeader project={project} />
          <ProjectModalInfoGrid project={project} />
          <ProjectModalSection label="프로젝트 개요" items={project.overview} />
          <ProjectModalSection label="담당 업무" items={project.tasks} />
          <ProjectModalSection label="고민했던 점" items={project.concerns} />

          {project.retrospect && project.retrospect.length > 0 && (
            <div className={sectionStyles.overviewSection}>
              <span className={sectionStyles.overviewLabel}>프로젝트 회고</span>
              <ul className={sectionStyles.overviewDetails}>
                {project.retrospect.map((item) => (
                  <li key={item} className={sectionStyles.overviewDetail}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
