import styles from "./page.module.css";
import {
  contactInfo,
  socialLinks,
} from "@/app/(withHeader)/contact/_constants/contact";
import type { Metadata } from "next";
import CopyButton from "./_components/CopyButton";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  NotebookText,
  ArrowUpRight,
} from "lucide-react";
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

const email = contactInfo.find((c) => c.label === "Email");
const phone = contactInfo.find((c) => c.label === "Phone");
const location = contactInfo.find((c) => c.label === "Location");
const github = socialLinks.find((s) => s.name === "GitHub");
const blog = socialLinks.find((s) => s.name === "Blog");

export default function ContactPage() {
  return (
    <div className={`page-layout ${styles.page}`}>
      <div className="container">
        <SectionHeader label="Contact" as="h1" />

        <AnimateOnScroll className={styles.intro}>
          <h2 className={styles.headline}>
            함께 만들어요,
            <br />
            <em className={styles.headlineEm}>지금 연락주세요.</em>
          </h2>
          <p className={styles.desc}>
            새로운 기회를 찾고 있습니다. 프론트엔드 개발자로서 팀에 기여하고
            함께 성장하고 싶습니다.
          </p>
        </AnimateOnScroll>

        <div className={styles.grid}>
          {email?.href && (
            <AnimateOnScroll
              className={`${styles.card} ${styles.mainCard}`}
              delay={100}
            >
              <div className={styles.mainTop}>
                <div className={styles.mainIcon} aria-hidden="true">
                  <Mail size={22} />
                </div>
                <span className={styles.mainLabel}>Email · 가장 빠른 경로</span>
                <CopyButton value={email.value} />
              </div>
              <a href={email.href} className={styles.mainValue}>
                {email.value}
              </a>
              <p className={styles.mainMeta}>채용·협업 제안 환영</p>
            </AnimateOnScroll>
          )}

          {phone && (
            <AnimateOnScroll
              className={`${styles.card} ${styles.smallCard}`}
              delay={160}
            >
              <div className={styles.smallHead}>
                <div className={styles.smallIcon} aria-hidden="true">
                  <Phone size={18} />
                </div>
                <span className={styles.cardLabel}>Phone</span>
                <CopyButton value={phone.value} />
              </div>
              {phone.href ? (
                <a href={phone.href} className={styles.cardValueLink}>
                  {phone.value}
                </a>
              ) : (
                <span className={styles.cardValue}>{phone.value}</span>
              )}
            </AnimateOnScroll>
          )}

          {location && (
            <AnimateOnScroll
              className={`${styles.card} ${styles.smallCard}`}
              delay={220}
            >
              <div className={styles.smallHead}>
                <div className={styles.smallIcon} aria-hidden="true">
                  <MapPin size={18} />
                </div>
                <span className={styles.cardLabel}>Location</span>
              </div>
              <span className={styles.cardValue}>{location.value}</span>
            </AnimateOnScroll>
          )}

          {github && (
            <AnimateOnScroll
              className={`${styles.card} ${styles.socialCard}`}
              delay={280}
            >
              <a
                href={github.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialInner}
              >
                <div className={styles.socialTop}>
                  <div className={styles.socialIcon} aria-hidden="true">
                    <Github size={22} />
                  </div>
                  <span className={styles.cardLabel}>GitHub</span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className={styles.socialArrow}
                  />
                </div>
                <span className={styles.cardValue}>{github.displayLabel}</span>
                <p className={styles.socialDesc}>{github.description}</p>
              </a>
            </AnimateOnScroll>
          )}

          {blog && (
            <AnimateOnScroll
              className={`${styles.card} ${styles.socialCard}`}
              delay={340}
            >
              <a
                href={blog.href}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialInner}
              >
                <div className={styles.socialTop}>
                  <div className={styles.socialIcon} aria-hidden="true">
                    <NotebookText size={22} />
                  </div>
                  <span className={styles.cardLabel}>Blog</span>
                  <ArrowUpRight
                    size={18}
                    aria-hidden="true"
                    className={styles.socialArrow}
                  />
                </div>
                <span className={styles.cardValue}>{blog.displayLabel}</span>
                <p className={styles.socialDesc}>{blog.description}</p>
              </a>
            </AnimateOnScroll>
          )}
        </div>
      </div>
    </div>
  );
}
