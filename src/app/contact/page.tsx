import styles from "./page.module.css";
import { contactInfo, socialLinks } from "@/constants/contact";
import CopyButton from "@/app/components/CopyButton";
import SectionHeader from "@/app/components/SectionHeader";

function GitHubIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      width="24"
      height="24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

export default function ContactPage() {
  return (
    <main className="page-layout">
      <div className="container">
        <SectionHeader
          label="Contact"
          title="연락하기"
          subtitle="궁금한 점이 있으시거나 함께 일하고 싶으시다면 언제든 연락해 주세요!"
          as="h1"
        />

        <div className={styles.content}>
          <section className={styles.contactSection}>
            <h2 className={styles.sectionTitle}>연락처 정보</h2>
            <ul className={styles.contactList}>
              {contactInfo.map((item) => (
                <li key={item.label} className={styles.contactItem}>
                  <span className={styles.contactIcon}>{item.icon}</span>
                  <div className={styles.contactInfo}>
                    <span className={styles.contactLabel}>{item.label}</span>
                    {item.href ? (
                      <a href={item.href} className={styles.contactValue}>
                        {item.value}
                      </a>
                    ) : (
                      <span className={styles.contactValueText}>
                        {item.value}
                      </span>
                    )}
                  </div>
                  {["Email", "Phone"].includes(item.label) && (
                    <CopyButton value={item.value} />
                  )}
                </li>
              ))}
            </ul>
          </section>

          <section className={styles.socialSection}>
            <h2 className={styles.sectionTitle}>소셜 링크</h2>
            <ul className={styles.socialList}>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                  >
                    <span className={styles.socialIcon}>
                      {link.icon === "github" ? <GitHubIcon /> : link.icon}
                    </span>
                    <div className={styles.socialInfo}>
                      <span className={styles.socialName}>{link.name}</span>
                      <span className={styles.socialDescription}>
                        {link.description}
                      </span>
                    </div>
                    <span className={styles.arrow}>→</span>
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>

        <aside className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>함께 일하고 싶으시다면?</h2>
            <p className={styles.ctaDescription}>
              새로운 기회를 찾고 있습니다. 프론트엔드 개발자로서 팀에 기여하고
              함께 성장하고 싶습니다.
            </p>
            <a href="mailto:hello@example.com" className={styles.ctaButton}>
              이메일 보내기 ✉️
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
