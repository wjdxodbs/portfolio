import Image from "next/image";
import type { Project } from "@/app/(withHeader)/projects/_types/project";
import styles from "./ProjectThumbnail.module.css";

interface ProjectThumbnailProps {
  project: Pick<Project, "thumbnailUrl" | "title">;
  sizes: string;
}

export default function ProjectThumbnail({
  project,
  sizes,
}: ProjectThumbnailProps) {
  return (
    <div className={styles.wrapper}>
      <Image
        src={project.thumbnailUrl}
        alt={project.title}
        fill
        sizes={sizes}
        className={styles.image}
      />
    </div>
  );
}
