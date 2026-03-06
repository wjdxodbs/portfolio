import ProjectCardGrid from "./_components/ProjectCardGrid";
import SectionHeader from "@/components/common/SectionHeader";

export default function ProjectsPage() {
  return (
    <main className="page-layout">
      <div className="container">
        <SectionHeader
          label="Projects"
          title="프로젝트"
          subtitle="지금까지 진행한 개인 프로젝트와 팀 프로젝트입니다."
          as="h1"
        />

        <ProjectCardGrid />
      </div>
    </main>
  );
}
