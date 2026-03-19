"use client";

import { useTypewriter } from "@/app/_hooks/useTypewriter";
import { ROLE_TEXTS } from "@/app/_constants/hero";
import styles from "./TypewriterRole.module.css";

export default function TypewriterRole() {
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
