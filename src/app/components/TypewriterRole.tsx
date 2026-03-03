"use client";

import { useEffect, useState } from "react";
import styles from "@/app/components/TypewriterRole.module.css";

const ROLE_TEXTS = ["Frontend Developer", "Web Engineer"];

export default function TypewriterRole() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayRole, setDisplayRole] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentRole = ROLE_TEXTS[roleIndex];
    const isComplete = displayRole === currentRole;
    const isEmpty = displayRole.length === 0;

    let delay = isDeleting ? 55 : 95;
    if (!isDeleting && isComplete) delay = 1100;
    if (isDeleting && isEmpty) delay = 220;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }
        setDisplayRole(currentRole.slice(0, displayRole.length + 1));
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setRoleIndex((prevIndex) => (prevIndex + 1) % ROLE_TEXTS.length);
        return;
      }

      setDisplayRole(currentRole.slice(0, displayRole.length - 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayRole, isDeleting, roleIndex]);

  return (
    <span className={styles.typewriter}>
      <span className={styles.text}>{displayRole}</span>
      <span className={styles.caret} aria-hidden="true">
        |
      </span>
    </span>
  );
}
