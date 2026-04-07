"use client";

import { useEffect, useState } from "react";
import styles from "./SectionDots.module.css";

const SECTIONS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
];

export default function SectionDots() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(id);
        },
        { rootMargin: "-50% 0px -50% 0px" },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const handleClick = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;

    const start = window.scrollY;
    const target = el.getBoundingClientRect().top + start;
    const distance = target - start;
    const duration = 600;
    let startTime: number | null = null;

    const step = (time: number) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      window.scrollTo(0, start + distance * ease);
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  };

  return (
    <nav className={styles.dots} aria-label="섹션 네비게이션">
      {SECTIONS.map(({ id, label }) => (
        <button
          key={id}
          className={`${styles.dot} ${activeId === id ? styles.active : ""}`}
          onClick={() => handleClick(id)}
          aria-label={`${label} 섹션으로 이동`}
        >
          <span className={styles.label}>{label}</span>
        </button>
      ))}
    </nav>
  );
}
