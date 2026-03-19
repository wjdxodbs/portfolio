import Image from "next/image";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import styles from "./ProjectThumbnail.module.css";

interface ProjectThumbnailProps {
  project: Pick<Project, "thumbnailUrl" | "title" | "thumbnailBg">;
  sizes: string;
  variant: "card" | "modal";
  children?: React.ReactNode;
}

export default function ProjectThumbnail({
  project,
  sizes,
  variant,
  children,
}: ProjectThumbnailProps) {
  const wrapperClass = variant === "card" ? styles.wrapperCard : styles.wrapperModal;
  const imageClass = variant === "card" ? styles.imageCard : styles.imageModal;
  const placeholderTextClass =
    variant === "card" ? styles.placeholderTextCard : styles.placeholderTextModal;

  return (
    <div
      className={wrapperClass}
      style={project.thumbnailBg ? { background: project.thumbnailBg } : undefined}
    >
      {project.thumbnailUrl ? (
        <Image
          src={project.thumbnailUrl}
          alt={project.title}
          fill
          sizes={sizes}
          className={imageClass}
        />
      ) : (
        <div className={styles.placeholder}>
          <span className={placeholderTextClass}>{project.title[0]}</span>
        </div>
      )}
      {children}
    </div>
  );
}
