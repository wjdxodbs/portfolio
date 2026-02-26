"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import type { Project } from "@/types/project";
import type { CardRect } from "./ProjectCard";
import TechBadge from "./TechBadge";
import styles from "./ProjectModal.module.css";

interface ProjectModalProps {
  project: Project | null;
  originRect: CardRect | null;
  onClose: () => void;
}

export default function ProjectModal({
  project,
  originRect,
  onClose,
}: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    if (!project) {
      setIsClosing(false);
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [project]);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsClosing(false);
      onClose();
    }, 300);
  };

  const getOriginStyle = (): React.CSSProperties => {
    if (!originRect) return {};
    const vw = window.innerWidth;
    const vh = window.innerHeight;
    const centerX = vw / 2;
    const centerY = vh / 2;
    const cardCenterX = originRect.left + originRect.width / 2;
    const cardCenterY = originRect.top + originRect.height / 2;
    const tx = cardCenterX - centerX;
    const ty = cardCenterY - centerY;

    const modalW = Math.min(vw - 48, 800);
    const scaleX = originRect.width / modalW;
    const scaleY = originRect.height / (vh * 0.96);

    return {
      "--origin-tx": `${tx}px`,
      "--origin-ty": `${ty}px`,
      "--origin-scale-x": scaleX,
      "--origin-scale-y": scaleY,
    } as React.CSSProperties;
  };

  if (!project) return null;

  const modalClass = [
    styles.modal,
    isClosing ? styles.modalClosing : styles.modalOpening,
  ].join(" ");

  return (
    <div
      className={`${styles.overlay} ${isClosing ? styles.overlayClosing : ""}`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={modalClass}
        style={getOriginStyle()}
        onClick={(e) => e.stopPropagation()}
      >
        <button
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
          style={
            project.thumbnailBg
              ? { background: project.thumbnailBg }
              : undefined
          }
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
          {/* 상단 헤더 */}
          <div className={styles.header}>
            <div className={styles.headerMeta}>
              <span className={styles.typeBadge}>
                {project.type === "team" ? "팀 프로젝트" : "개인 프로젝트"}
              </span>
              <span className={styles.period}>
                {project.period} · {project.duration}
              </span>
            </div>
            <div className={styles.titleRow}>
              <h2 className={styles.title}>{project.title}</h2>
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.githubButton}
                  aria-label={`${project.title} GitHub 저장소 열기`}
                >
                  <img
                    src="/icons/github.svg"
                    alt=""
                    className={styles.githubIcon}
                    aria-hidden="true"
                  />
                </a>
              )}
            </div>
            <p className={styles.description}>{project.description}</p>
            <TechBadge techStack={project.techStack} variant="chip" />
          </div>

          {/* 상세 정보 */}
          <div className={styles.infoGrid}>
            <div className={styles.infoRow}>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>개발 인원</span>
                <span className={styles.infoValue}>{project.teamSize}</span>
              </div>
              <div className={styles.infoItem}>
                <span className={styles.infoLabel}>역할</span>
                <span className={styles.infoValue}>{project.role}</span>
              </div>
            </div>
            {project.achievements.length > 0 && (
              <div className={styles.infoRow}>
                <div className={`${styles.infoItem} ${styles.full}`}>
                  <span className={styles.infoLabel}>성과</span>
                  <ul className={styles.achievementList}>
                    {project.achievements.map((item, idx) => (
                      <li key={idx} className={styles.achievementItem}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* 프로젝트 개요 */}
          {project.overview.length > 0 && (
            <div className={styles.overviewSection}>
              <span className={styles.overviewLabel}>프로젝트 개요</span>
              <div className={styles.overviewList}>
                {project.overview.map((item) => (
                  <div key={item.title} className={styles.overviewItem}>
                    <span className={styles.overviewTitle}>{item.title}</span>
                    {item.images && item.images.length > 0 && (
                      <div className={styles.itemImages}>
                        {item.images.map((src, idx) => (
                          <div key={idx} className={styles.itemImageWrapper}>
                            <Image
                              src={src}
                              alt={`${item.title} 이미지 ${idx + 1}`}
                              width={400}
                              height={800}
                              className={styles.itemImage}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <ul className={styles.overviewDetails}>
                      {item.details.map((detail, idx) => (
                        <li key={idx} className={styles.overviewDetail}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 담당 업무 */}
          {project.tasks.length > 0 && (
            <div className={styles.overviewSection}>
              <span className={styles.overviewLabel}>담당 업무</span>
              <div className={styles.overviewList}>
                {project.tasks.map((item) => (
                  <div key={item.title} className={styles.taskItem}>
                    <span className={styles.taskTitle}>{item.title}</span>
                    {item.images && item.images.length > 0 && (
                      <div className={styles.itemImages}>
                        {item.images.map((src, idx) => (
                          <div key={idx} className={styles.itemImageWrapper}>
                            <Image
                              src={src}
                              alt={`${item.title} 이미지 ${idx + 1}`}
                              width={400}
                              height={800}
                              className={styles.itemImage}
                            />
                          </div>
                        ))}
                      </div>
                    )}
                    <ul className={styles.overviewDetails}>
                      {item.details.map((detail, idx) => (
                        <li key={idx} className={styles.overviewDetail}>
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {project.concerns && project.concerns.length > 0 && (
            <div className={styles.overviewSection}>
              <span className={styles.overviewLabel}>고민했던 점</span>
              {project.concerns.map((item) => (
                <div key={item.title} className={styles.taskItem}>
                  <span className={styles.taskTitle}>{item.title}</span>
                  <ul className={styles.overviewDetails}>
                    {item.details.map((detail, idx) => (
                      <li key={idx} className={styles.overviewDetail}>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {project.retrospect && project.retrospect.length > 0 && (
            <div className={styles.overviewSection}>
              <span className={styles.overviewLabel}>프로젝트 회고</span>
              <ul className={styles.overviewDetails}>
                {project.retrospect.map((item, idx) => (
                  <li key={idx} className={styles.overviewDetail}>
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
}
