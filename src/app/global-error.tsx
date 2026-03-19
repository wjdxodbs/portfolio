"use client";

import { useEffect } from "react";
import "./globals.css";
import styles from "./global-error.module.css";

interface GlobalErrorProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function GlobalError({ error, reset }: GlobalErrorProps) {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") {
      console.error(error);
    }
  }, [error]);

  return (
    <html>
      <body>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>예기치 못한 오류가 발생했습니다</h2>
          <button onClick={reset} className={styles.button}>
            다시 시도
          </button>
        </div>
      </body>
    </html>
  );
}
