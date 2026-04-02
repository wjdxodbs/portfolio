"use client";

import { useEffect, useRef, useState } from "react";
import type { ExperienceItem } from "@/app/_types/experience";
import styles from "./ExperienceList.module.css";

interface FlatExperienceItem extends ExperienceItem {
  categoryLabel: string;
}

interface ExperienceListProps {
  items: FlatExperienceItem[];
}

function AnimatedRow({
  children,
  delay,
}: {
  children: React.ReactNode;
  delay: number;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <li
      ref={ref}
      className={`${styles.row} ${styles.animate} ${isInView ? styles.visible : ""}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </li>
  );
}

export default function ExperienceList({ items }: ExperienceListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item, idx) => (
        <AnimatedRow key={idx} delay={idx * 60}>
          <span className={styles.period}>{item.period}</span>
          <div className={styles.main}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.org}>{item.organization}</span>
            {item.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {item.highlights.map((h, i) => (
                  <li key={i} className={styles.highlight}>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className={styles.badge}>{item.categoryLabel}</span>
        </AnimatedRow>
      ))}
    </ul>
  );
}
