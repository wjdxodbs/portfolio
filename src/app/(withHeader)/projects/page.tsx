import { createPageMetadata } from "@/app/_utils/metadata";
import ProjectCardGrid from "./_components/ProjectCardGrid";
import SectionHeader from "@/components/common/SectionHeader";

export const metadata = createPageMetadata(
  "Projects | 정태윤 포트폴리오",
  "정태윤이 진행한 개인 프로젝트와 팀 프로젝트를 소개합니다.",
  "/projects"
);

export default function ProjectsPage() {
  return (
    <div className="page-layout">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="프로젝트"
          subtitle="지금까지 진행한 개인 프로젝트와 팀 프로젝트입니다."
          as="h1"
        />

        <ProjectCardGrid />
      </div>
    </div>
  );
}
