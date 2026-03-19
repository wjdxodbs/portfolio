import Image from "next/image";
import { getTechIcon } from "@/app/(withHeader)/projects/_utils/techIcons";
import type { TechName } from "@/app/(withHeader)/projects/_utils/techIcons";
import styles from "./TechBadge.module.css";

interface TechBadgeProps {
  techStack: TechName[];
  variant?: "icon" | "chip";
}

export default function TechBadge({
  techStack,
  variant = "icon",
}: TechBadgeProps) {
  return (
    <ul className={`${styles.techStack} ${styles[variant]}`}>
      {techStack.map((tech) => {
        const icon = getTechIcon(tech);
        return (
          <li key={tech} className={styles.techItem} aria-label={tech}>
            <div className={styles.iconWrapper} aria-hidden="true">
              {icon.iconUrl ? (
                <Image
                  src={icon.iconUrl}
                  alt=""
                  width={variant === "icon" ? 20 : 16}
                  height={variant === "icon" ? 20 : 16}
                  className={styles.techIcon}
                />
              ) : (
                <span className={styles.fallback}>{icon.abbr ?? tech[0]}</span>
              )}
            </div>
            {variant === "chip" && <span className={styles.label} aria-hidden="true">{tech}</span>}
            {variant === "icon" && (
              <span className={styles.tooltip} aria-hidden="true">{tech}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
