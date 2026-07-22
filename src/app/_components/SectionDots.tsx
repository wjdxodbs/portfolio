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
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" },
    );

    SECTIONS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className={styles.dots} aria-label="섹션 네비게이션">
      {SECTIONS.map(({ id, label }) => (
        <a
          key={id}
          href={`#${id}`}
          className={`${styles.dot} ${activeId === id ? styles.active : ""}`}
          aria-label={`${label} 섹션으로 이동`}
        >
          <span className={styles.label}>{label}</span>
        </a>
      ))}
    </nav>
  );
}
