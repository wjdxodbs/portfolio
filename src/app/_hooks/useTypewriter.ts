"use client";

import { useEffect, useState } from "react";

export function useTypewriter(texts: string[]) {
  const [textIndex, setTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[textIndex];
    const isComplete = displayText === currentText;
    const isEmpty = displayText.length === 0;

    let delay = isDeleting ? 55 : 95;
    if (!isDeleting && isComplete) delay = 1100;
    if (isDeleting && isEmpty) delay = 220;

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
