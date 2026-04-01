import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  index?: string;
  as?: "h1" | "h2";
}

export default function SectionHeader({
  label,
  index,
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;

  return (
    <header className={styles.header}>
      {index && (
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
      )}
      <Heading className={styles.label}>{label}</Heading>
      <div className={styles.rule} aria-hidden="true" />
    </header>
  );
}
