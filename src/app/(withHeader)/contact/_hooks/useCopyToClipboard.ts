"use client";

import { useState } from "react";

const TOAST_DURATION = 2000;

export function useCopyToClipboard() {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async (value: string) => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), TOAST_DURATION);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return { copied, copyToClipboard };
}
