"use client";

import { useEffect } from "react";
import styles from "./error.module.css";

interface ErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>예기치 못한 오류가 발생했습니다</h2>
      <button onClick={reset} className={styles.button}>
        다시 시도
      </button>
    </div>
  );
}
