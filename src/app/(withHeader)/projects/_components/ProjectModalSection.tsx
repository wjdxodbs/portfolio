import Image from "next/image";
import type { OverviewItem } from "@/app/(withHeader)/projects/_types/project";
import styles from "./ProjectModalSection.module.css";

interface ProjectModalSectionProps {
  label: string;
  items: OverviewItem[];
}

export default function ProjectModalSection({ label, items }: ProjectModalSectionProps) {
  if (items.length === 0) return null;

  return (
    <div className={styles.overviewSection}>
      <span className={styles.overviewLabel}>{label}</span>
      <div className={styles.overviewList}>
        {items.map((item) => (
          <div key={item.title} className={styles.overviewItem}>
            <span className={styles.overviewTitle}>{item.title}</span>
            {item.images && item.images.length > 0 && (
              <div className={styles.itemImages}>
                {item.images.map((src, idx) => (
                  <div key={src} className={styles.itemImageWrapper}>
                    <Image
                      src={src}
                      alt={`${item.title} 이미지 ${idx + 1}`}
                      width={400}
                      height={800}
                      className={styles.itemImage}
                    />
                  </div>
                ))}
              </div>
            )}
            <ul className={styles.overviewDetails}>
              {item.details.map((detail) => (
                <li key={detail} className={styles.overviewDetail}>
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
