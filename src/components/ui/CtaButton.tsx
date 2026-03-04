import styles from "./CtaButton.module.css";

interface CtaButtonProps {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "xl" | "card";
  children: React.ReactNode;
}

export default function CtaButton({
  variant = "primary",
  size = "md",
  children,
}: CtaButtonProps) {
  return (
    <div className={`${styles.button} ${styles[variant]} ${styles[size]}`}>
      {children}
    </div>
  );
}
