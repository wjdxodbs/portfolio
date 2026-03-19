import type { TechName } from "@/app/(withHeader)/projects/_utils/techIcons";

export interface OverviewItem {
  title: string;
  details: string[];
  images?: string[];
}

export interface Project {
  id: string;
  title: string;
  githubUrl?: string;
  description: string;
  period: string;
  duration: string;
  thumbnailUrl: string;
  thumbnailBg?: string;
  techStack: TechName[];
  type: "personal" | "team";
  teamSize: string;
  role: string;
  achievements: string[];
  overview: OverviewItem[];
  tasks: OverviewItem[];
  concerns: OverviewItem[];
  retrospect: string[];
}
