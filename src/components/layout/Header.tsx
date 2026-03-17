import Link from "next/link";
import NavLinks from "./NavLinks";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.nav} aria-label="메인 네비게이션">
        <Link href="/" className={styles.logo}>
          <span className={styles.logoAccent}>&lt;</span>
          Portfolio
          <span className={styles.logoAccent}>/&gt;</span>
        </Link>

        <NavLinks />
      </nav>
    </header>
  );
}
