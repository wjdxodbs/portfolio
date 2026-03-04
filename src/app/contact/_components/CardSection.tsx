import styles from "./CardSection.module.css";

interface CardSectionProps {
  title: string;
  children: React.ReactNode;
}

export default function CardSection({ title, children }: CardSectionProps) {
  return (
    <section className={styles.cardSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      {children}
    </section>
  );
}
