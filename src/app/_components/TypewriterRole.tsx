"use client";

import { useTypewriter } from "@/app/_hooks/useTypewriter";
import styles from "./TypewriterRole.module.css";

const ROLE_TEXTS = ["Frontend Developer", "Web Engineer"];

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
