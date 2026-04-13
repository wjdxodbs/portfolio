import Image from "next/image";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import styles from "./ProjectThumbnail.module.css";

interface ProjectThumbnailProps {
  project: Pick<Project, "thumbnailUrl" | "title" | "thumbnailBg">;
  sizes: string;
  variant: "card" | "modal";
  priority?: boolean;
  children?: React.ReactNode;
}

export default function ProjectThumbnail({
  project,
  sizes,
  variant,
  priority = false,
  children,
}: ProjectThumbnailProps) {
  const wrapperClass =
    variant === "card" ? styles.wrapperCard : styles.wrapperModal;
  const imageClass = variant === "card" ? styles.imageCard : styles.imageModal;

  return (
    <div
      className={wrapperClass}
      style={
        project.thumbnailBg ? { background: project.thumbnailBg } : undefined
      }
    >
      <Image
        src={project.thumbnailUrl}
        alt={project.title}
        fill
        sizes={sizes}
        priority={priority}
        className={imageClass}
      />
      {children}
    </div>
  );
}
