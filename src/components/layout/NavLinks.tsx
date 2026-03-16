"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./NavLinks.module.css";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

export default function NavLinks() {
  const pathname = usePathname();

  return (
    <ul className={styles.navList}>
      {navItems.map((item) => (
        <li key={item.href}>
          <Link
            href={item.href}
            className={`${styles.navLink} ${
              pathname === item.href ? styles.active : ""
            }`}
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
