import Image from "next/image";
import styles from "./page.module.css";
import { contactInfo, socialLinks } from "@/app/contact/_constants/contact";
import CardSection from "./_components/CardSection";
import CopyButton from "./_components/CopyButton";
import CtaButton from "@/components/ui/CtaButton";
import SectionHeader from "@/components/common/SectionHeader";

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
          <CardSection title="연락처 정보">
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
          </CardSection>

          <CardSection title="소셜 링크">
            <ul className={styles.socialList}>
              {socialLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.socialCard}
                  >
                    <span className={styles.socialIcon} aria-hidden>
                      {link.icon === "github" ? (
                        <Image
                          src="/icons/github.svg"
                          alt=""
                          width={24}
                          height={24}
                        />
                      ) : (
                        link.icon
                      )}
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
          </CardSection>
        </div>

        <aside className={styles.cta}>
          <div className={styles.ctaContent}>
            <h2 className={styles.ctaTitle}>함께 일하고 싶으시다면?</h2>
            <p className={styles.ctaDescription}>
              새로운 기회를 찾고 있습니다. 프론트엔드 개발자로서 팀에 기여하고
              함께 성장하고 싶습니다.
            </p>
            <a
              href={contactInfo.find((c) => c.label === "Email")?.href ?? "mailto:wjdxodbs52@naver.com"}
            >
              <CtaButton variant="primary" size="lg">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                이메일 보내기
              </CtaButton>
            </a>
          </div>
        </aside>
      </div>
    </main>
  );
}
