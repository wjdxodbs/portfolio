import styles from './Footer.module.css';

const socialLinks = [
  { href: 'https://github.com', label: 'GitHub', icon: '↗' },
  { href: 'https://linkedin.com', label: 'LinkedIn', icon: '↗' },
  { href: 'mailto:hello@example.com', label: 'Email', icon: '✉' },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.brand}>
            <span className={styles.logo}>
              <span className={styles.logoAccent}>&lt;</span>
              Portfolio
              <span className={styles.logoAccent}>/&gt;</span>
            </span>
            <p className={styles.tagline}>
              프론트엔드 개발자로서 사용자 경험을 최우선으로 생각합니다.
            </p>
          </div>
          
          <div className={styles.links}>
            <h4 className={styles.linksTitle}>Connect</h4>
            <ul className={styles.socialList}>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialLink}
                  >
                    {link.label}
                    <span className={styles.icon}>{link.icon}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className={styles.bottom}>
          <p className={styles.copyright}>
            © {currentYear} Portfolio. All rights reserved.
          </p>
          <p className={styles.builtWith}>
            Built with <span className={styles.heart}>♥</span> using Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}

