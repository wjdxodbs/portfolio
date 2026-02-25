import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  title: string;
  subtitle?: string;
  as?: "h1" | "h2";
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;

  return (
    <header className={styles.header}>
      <span className={styles.label}>{label}</span>
      <Heading className={styles.title}>{title}</Heading>
      {subtitle ? <p className={styles.subtitle}>{subtitle}</p> : null}
    </header>
  );
}
