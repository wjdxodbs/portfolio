"use client";

import { useState, useEffect, useRef } from "react";

// globals.css --toast-duration 값과 반드시 동기화
const TOAST_DURATION = 2000;

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
    };
  }, []);

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      if (timerRef.current !== null) {
        clearTimeout(timerRef.current);
      }
      timerRef.current = setTimeout(() => setCopied(false), TOAST_DURATION);
    } catch (err) {
      if (process.env.NODE_ENV !== "production") {
        console.error("복사 실패:", err);
      }
    }
  };

  return { copied, copyToClipboard };
}
