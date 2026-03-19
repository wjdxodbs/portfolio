"use client";

import { useEffect, useState } from "react";

const TYPING_DELAY = 95;        // 글자 한 자씩 타이핑되는 속도 (ms)
const DELETING_DELAY = 55;      // 타이핑보다 빠르게 삭제해 리듬감을 부여 (ms)
const PAUSE_AFTER_COMPLETE = 1100; // 완성된 문장을 잠시 보여주는 대기 시간 (ms)
const PAUSE_BEFORE_NEXT = 220;  // 삭제 완료 후 다음 문장 타이핑 전 짧은 호흡 (ms)

export function useTypewriter(texts: readonly string[]) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const isComplete = displayText === currentText;
    const isEmpty = displayText.length === 0;

    let delay = isDeleting ? DELETING_DELAY : TYPING_DELAY;
    if (!isDeleting && isComplete) delay = PAUSE_AFTER_COMPLETE;
    if (isDeleting && isEmpty) delay = PAUSE_BEFORE_NEXT;

    const timer = window.setTimeout(() => {
      if (!isDeleting) {
        if (isComplete) {
          setIsDeleting(true);
          return;
        }
        setDisplayText(currentText.slice(0, displayText.length + 1));
        return;
      }

      if (isEmpty) {
        setIsDeleting(false);
        setTextIndex((prev) => (prev + 1) % texts.length);
        return;
      }

      setDisplayText(currentText.slice(0, displayText.length - 1));
    }, delay);

    return () => window.clearTimeout(timer);
  }, [displayText, isDeleting, textIndex, texts]);

  return displayText;
}
