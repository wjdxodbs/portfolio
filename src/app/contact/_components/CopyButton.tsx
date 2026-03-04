"use client";

import { useState } from "react";
import CtaButton from "@/components/ui/CtaButton";
import styles from "./CopyButton.module.css";

const CopyIcon = () => (
  <svg
    viewBox="0 0 24 24"
    width="16"
    height="16"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
  </svg>
);

interface CopyButtonProps {
  value: string;
}

export default function CopyButton({ value }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("복사 실패:", err);
    }
  };

  return (
    <div className={styles.copyWrapper}>
      {copied && <span className={styles.copiedToast}>복사됨!</span>}
      <button type="button" onClick={handleCopy} aria-label="복사">
        <CtaButton variant="secondary" size="sm">
          <CopyIcon />
        </CtaButton>
      </button>
    </div>
  );
}
