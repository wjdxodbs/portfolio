"use client";

import { useRef, useState } from "react";
import { createPortal } from "react-dom";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import { X } from "lucide-react";
import { useFocusTrap } from "@/app/(withHeader)/projects/_hooks/useFocusTrap";
import ProjectThumbnail from "./ProjectThumbnail";
import ProjectModalHeader from "./ProjectModalHeader";
import ProjectModalInfoGrid from "./ProjectModalInfoGrid";
import ProjectModalSection from "./ProjectModalSection";
import ProjectModalRetrospect from "./ProjectModalRetrospect";
import styles from "./ProjectModal.module.css";

const MODAL_CLOSE_DURATION = 300;

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

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      triggerElement?.focus();
      setIsClosing(false);
      onClose();
    }, MODAL_CLOSE_DURATION);
  };

  useFocusTrap({
    isActive: !!project,
    containerRef: overlayRef,
    initialFocusRef: closeButtonRef,
    onEscape: handleClose,
  });

  if (!project) return null;

  const modalClass = `${styles.modal} ${isClosing ? styles.modalClosing : ""}`;

  const modalContent = (
    <div
      ref={overlayRef}
      className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ""}`}
      onClick={handleClose}
    >
      <div
        ref={modalRef}
        className={modalClass}
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        <button
          ref={closeButtonRef}
          className={styles.closeButton}
          onClick={handleClose}
          aria-label="모달 닫기"
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className={styles.scrollArea}>
          <ProjectThumbnail
            project={project}
            sizes="(max-width: 480px) 100vw, (max-width: 640px) calc(100vw - 48px), 800px"
            variant="modal"
          />

          <div className={styles.body}>
            <ProjectModalHeader project={project} />
            <ProjectModalInfoGrid project={project} />
            <ProjectModalSection
              label="프로젝트 개요"
              items={project.overview}
            />
            <ProjectModalSection label="담당 업무" items={project.tasks} />
            <ProjectModalSection label="고민했던 점" items={project.concerns} />

            <ProjectModalRetrospect items={project.retrospect ?? []} />
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
