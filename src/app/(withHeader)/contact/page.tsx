import Image from "next/image";
import styles from "./page.module.css";
import {
  contactInfo,
  socialLinks,
} from "@/app/(withHeader)/contact/_constants/contact";
import { createPageMetadata } from "@/app/_utils/metadata";
import CardSection from "./_components/CardSection";
import CopyButton from "./_components/CopyButton";
import CtaButton from "@/components/ui/CtaButton";
import { Mail } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";

export const metadata = createPageMetadata(
  "Contact | 정태윤 포트폴리오",
  "프론트엔드 개발자 정태윤에게 연락하세요. 이메일, GitHub 등을 통해 소통할 수 있습니다.",
  "/contact"
);

export default function ContactPage() {
  return (
    <div className="page-layout">
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
                  <span className={styles.iconBox}>{item.icon}</span>
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
                    <span className={styles.iconBox} aria-hidden>
                      {link.iconUrl ? (
                        <Image
                          src={link.iconUrl}
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
            <CtaButton
              as="a"
              href={contactInfo.find((c) => c.label === "Email")?.href ?? ""}
              variant="primary"
              size="lg"
            >
              <Mail size={16} aria-hidden="true" />
              이메일 보내기
            </CtaButton>
          </div>
        </aside>
      </div>
    </div>
  );
}
