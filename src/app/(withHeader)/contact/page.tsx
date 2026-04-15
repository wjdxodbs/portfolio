import styles from "./page.module.css";
import {
  contactInfo,
  socialLinks,
} from "@/app/(withHeader)/contact/_constants/contact";
import type {
  ContactInfo,
  SocialLink,
} from "@/app/(withHeader)/contact/_types/contact";
import type { Metadata } from "next";
import CopyButton from "./_components/CopyButton";
import CtaButton from "@/components/ui/CtaButton";
import { Mail } from "lucide-react";
import SectionHeader from "@/components/common/SectionHeader";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

export const metadata: Metadata = {
  title: "Contact | 정태윤 포트폴리오",
  description:
    "프론트엔드 개발자 정태윤에게 연락하세요. 이메일, GitHub 등을 통해 소통할 수 있습니다.",
  alternates: { canonical: `${SITE_URL}/contact` },
  openGraph: {
    title: "Contact | 정태윤 포트폴리오",
    description:
      "프론트엔드 개발자 정태윤에게 연락하세요. 이메일, GitHub 등을 통해 소통할 수 있습니다.",
    url: `${SITE_URL}/contact`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

function isContactInfo(item: ContactInfo | SocialLink): item is ContactInfo {
  return "label" in item;
}

const emailHref = contactInfo.find((c) => c.label === "Email")?.href;

export default function ContactPage() {
  return (
    <div className={`page-layout ${styles.page}`}>
      <div className="container">
        <SectionHeader label="Contact" as="h1" />

        <div className={styles.grid}>
          {/* 왼쪽: 헤드라인 + 소개 + 버튼 */}
          <AnimateOnScroll className={styles.left}>
            <h2 className={styles.headline}>
              함께 만들어요,
              <br />
              <em className={styles.headlineEm}>지금 연락주세요.</em>
            </h2>
            <p className={styles.desc}>
              새로운 기회를 찾고 있습니다. 프론트엔드 개발자로서 팀에 기여하고
              함께 성장하고 싶습니다.
            </p>
            {emailHref && (
              <div className={styles.btns}>
                <CtaButton as="a" href={emailHref} variant="primary" size="md">
                  <Mail size={16} aria-hidden="true" />
                  이메일 보내기
                </CtaButton>
              </div>
            )}
          </AnimateOnScroll>

          {/* 오른쪽: 연락처 정보 테이블 */}
          <div className={styles.right}>
            {[...contactInfo, ...socialLinks].map((item, idx) => (
              <AnimateOnScroll
                key={isContactInfo(item) ? item.label : item.name}
                className={styles.row}
                delay={100 + idx * 60}
              >
                <span className={styles.rowLabel}>
                  {isContactInfo(item) ? item.label : item.name}
                </span>
                {isContactInfo(item) ? (
                  item.href ? (
                    <a href={item.href} className={styles.rowLink}>
                      {item.value}
                    </a>
                  ) : (
                    <span className={styles.rowValue}>{item.value}</span>
                  )
                ) : (
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.rowLink}
                  >
                    {item.displayLabel}
                  </a>
                )}
                {isContactInfo(item) &&
                ["Email", "Phone"].includes(item.label) ? (
                  <CopyButton value={item.value} />
                ) : (
                  <span />
                )}
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
