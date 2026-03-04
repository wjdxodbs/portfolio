import type { CategoryData } from "@/app/_types/experience";

export const categories: CategoryData[] = [
  {
    id: "education",
    label: "교육",
    icon: "🎓",
    items: [
      {
        title: "삼성 청년 SW 아카데미",
        organization: "삼성전자",
        period: "2023.07 - 2024.06",
        highlights: [],
      },
      {
        title: "원광대학교 전자공학과",
        organization: "4년제 학사",
        period: "2016.03 - 2022.02",
        highlights: ["학점: 3.94/4.5"],
      },
    ],
  },
  {
    id: "certificate",
    label: "자격증",
    icon: "📜",
    items: [
      {
        title: "정보처리기사",
        organization: "한국산업인력공단",
        period: "2024.09",
        highlights: [],
      },
      {
        title: "SQLD (SQL 개발자)",
        organization: "한국데이터산업진흥원",
        period: "2022.12",
        highlights: [],
      },
    ],
  },
  {
    id: "award",
    label: "수상",
    icon: "🏆",
    items: [
      {
        title: "SSAFY 자율 프로젝트 우수상",
        organization: "삼성전자",
        period: "2024.05",
        highlights: ["프론트엔드 개발"],
      },
      {
        title: "SSAFY 공통 프로젝트 최우수상",
        organization: "삼성전자",
        period: "2024.02",
        highlights: ["프론트엔드 개발"],
      },
    ],
  },
];
