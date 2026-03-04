import Image from "next/image";
import { getTechIcon } from "@/app/projects/_utils/techIcons";
import styles from "./TechBadge.module.css";

interface TechBadgeProps {
  techStack: string[];
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
          <li key={tech} className={styles.techItem}>
            <div className={styles.iconWrapper}>
              {icon.iconUrl ? (
                <Image
                  src={icon.iconUrl}
                  alt={tech}
                  width={variant === "icon" ? 20 : 16}
                  height={variant === "icon" ? 20 : 16}
                  className={styles.techIcon}
                />
              ) : (
                <span className={styles.fallback}>{icon.abbr ?? tech[0]}</span>
              )}
            </div>
            {variant === "chip" && <span className={styles.label}>{tech}</span>}
            {variant === "icon" && (
              <span className={styles.tooltip}>{tech}</span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
