"use client";

import CtaButton from "@/components/ui/CtaButton";
import { Copy } from "lucide-react";
import { COPY_SUCCESS_LABEL } from "@/app/_constants/labels";
import { useCopyToClipboard } from "../_hooks/useCopyToClipboard";
import styles from "./CopyButton.module.css";

interface CopyButtonProps {
  value: string;
}

export default function CopyButton({ value }: CopyButtonProps) {
  const { copied, copyToClipboard } = useCopyToClipboard();

  return (
    <div className={styles.copyWrapper}>
      {/* 스크린 리더 전용: 항상 DOM에 존재해야 aria-live가 변경을 감지 */}
      <span role="status" aria-live="polite" className={styles.srAnnouncement}>
        {copied ? COPY_SUCCESS_LABEL : ""}
      </span>
      {copied && <span className={styles.copiedToast} aria-hidden="true">{COPY_SUCCESS_LABEL}</span>}
      <CtaButton
        as="button"
        type="button"
        variant="secondary"
        size="sm"
        onClick={() => copyToClipboard(value)}
        aria-label="복사"
      >
        <Copy size={16} aria-hidden="true" />
      </CtaButton>
    </div>
  );
}
