import type { ElementType, ComponentPropsWithoutRef, ReactNode } from "react";
import styles from "./CtaButton.module.css";

type CtaButtonProps<T extends ElementType> = {
  as: T;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg" | "icon";
  children: ReactNode;
} & Omit<ComponentPropsWithoutRef<T>, "as" | "children" | "variant" | "size">;

export default function CtaButton<T extends ElementType>({
  as,
  variant = "primary",
  size = "md",
  children,
  className,
  ...rest
}: CtaButtonProps<T>) {
  const Tag = as as ElementType;
  return (
    <Tag
      className={[styles.button, styles[variant], styles[size], className]
        .filter(Boolean)
        .join(" ")}
      {...(rest as ComponentPropsWithoutRef<T>)}
    >
      {children}
    </Tag>
  );
}
