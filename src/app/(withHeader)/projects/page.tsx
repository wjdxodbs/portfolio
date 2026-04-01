import type { Metadata } from "next";
import ProjectCardGrid from "./_components/ProjectCardGrid";
import SectionHeader from "@/components/common/SectionHeader";
import styles from "./page.module.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL!;

export const metadata: Metadata = {
  title: "Projects | 정태윤 포트폴리오",
  description: "정태윤이 진행한 개인 프로젝트와 팀 프로젝트를 소개합니다.",
  alternates: { canonical: `${SITE_URL}/projects` },
  openGraph: {
    title: "Projects | 정태윤 포트폴리오",
    description: "정태윤이 진행한 개인 프로젝트와 팀 프로젝트를 소개합니다.",
    url: `${SITE_URL}/projects`,
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
};

export default function ProjectsPage() {
  return (
    <div className={`page-layout ${styles.page}`}>
      <div className="container">
        <SectionHeader label="Projects" as="h1" />

        <ProjectCardGrid />
      </div>
    </div>
  );
}
