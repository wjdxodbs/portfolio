"use client";

import { useEffect, useRef, useState, type ReactNode, type ElementType } from "react";
import styles from "./AnimateOnScroll.module.css";

interface AnimateOnScrollProps {
  as?: ElementType;
  children: ReactNode;
  className?: string;
  delay?: number;
}

export default function AnimateOnScroll({
  as: Tag = "div",
  children,
  className,
  delay = 0,
}: AnimateOnScrollProps) {
  const ref = useRef<HTMLElement>(null);
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

  const TagElement = Tag as React.ComponentType<
    React.HTMLAttributes<HTMLElement> & { ref?: React.Ref<HTMLElement> }
  >;

  return (
    <TagElement
      ref={ref}
      className={`${styles.animate} ${isInView ? styles.visible : ""} ${className ?? ""}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </TagElement>
  );
}
