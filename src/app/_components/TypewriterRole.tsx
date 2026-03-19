"use client";

import { useTypewriter } from "@/app/_hooks/useTypewriter";
import styles from "./TypewriterRole.module.css";

export default function TypewriterRole() {
  const ROLE_TEXTS = ["Frontend Developer", "Web Engineer"] as const;
  const displayRole = useTypewriter(ROLE_TEXTS);

  return (
    <span className={styles.typewriter}>
      <span className={styles.text}>{displayRole}</span>
      <span className={styles.caret} aria-hidden="true">
        |
      </span>
    </span>
  );
}
