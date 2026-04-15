"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Hero.module.css";

const DURATION = 900;

export default function HeroStats() {
  const [counts, setCounts] = useState([0, 0]);
  const frameIdRef = useRef<number | null>(null);

  useEffect(() => {
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / DURATION, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts([Math.round(eased * 6), Math.round(eased * 2)]);

      if (progress < 1) frameIdRef.current = requestAnimationFrame(tick);
    };

    frameIdRef.current = requestAnimationFrame(tick);
    return () => {
      if (frameIdRef.current !== null) cancelAnimationFrame(frameIdRef.current);
    };
  }, []);

  return (
    <dl className={styles.stats}>
      <div className={styles.stat}>
        <dt className={styles.statLabel}>Projects</dt>
        <dd className={styles.statNum}>{counts[0]}+</dd>
      </div>
      <div className={styles.stat}>
        <dt className={styles.statLabel}>Awards</dt>
        <dd className={styles.statNum}>{counts[1]}+</dd>
      </div>
      <div className={styles.stat}>
        <dt className={styles.statLabel}>Curiosity</dt>
        <dd className={styles.statNum}>∞</dd>
      </div>
    </dl>
  );
}
