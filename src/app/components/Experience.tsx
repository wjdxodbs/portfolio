"use client";

import { useState } from "react";
import styles from "./Experience.module.css";

type CategoryType = "education" | "certificate" | "award";

interface ExperienceItem {
  title: string;
  organization: string;
  period: string;
  description: string;
  highlights: string[];
}

interface CategoryData {
  id: CategoryType;
  label: string;
  icon: string;
  items: ExperienceItem[];
}

const categories: CategoryData[] = [
  {
    id: "education",
    label: "교육",
    icon: "🎓",
    items: [
      {
        title: "○○대학교 컴퓨터공학과",
        organization: "4년제 학사",
        period: "2020.03 - 2024.02",
        description:
          "컴퓨터 과학의 기초부터 소프트웨어 공학까지 학습했습니다. 알고리즘, 자료구조, 운영체제, 데이터베이스 등 전공 과목을 이수했습니다.",
        highlights: ["학점: 3.8/4.5", "캡스톤 프로젝트"],
      },
      {
        title: "프론트엔드 부트캠프",
        organization: "○○ 교육기관",
        period: "2024.01 - 2024.06",
        description:
          "React, TypeScript, Next.js 등 현대 프론트엔드 기술 스택을 집중적으로 학습했습니다.",
        highlights: ["팀 프로젝트 3회 진행", "우수 수료"],
      },
      {
        title: "웹 개발 동아리",
        organization: "CodeMasters",
        period: "2022.03 - 2023.12",
        description:
          "프론트엔드 파트에서 활동하며 React를 학습하고 팀 프로젝트를 진행했습니다.",
        highlights: ["스터디 리더", "2개 프로젝트 참여"],
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
        period: "2023.06",
        description:
          "소프트웨어 개발 및 데이터베이스 구축에 관한 전문 지식을 검증받았습니다.",
        highlights: [],
      },
      {
        title: "SQLD (SQL 개발자)",
        organization: "한국데이터산업진흥원",
        period: "2023.09",
        description:
          "SQL을 활용한 데이터베이스 개발 및 관리 능력을 인증받았습니다.",
        highlights: [],
      },
      {
        title: "TOEIC 850점",
        organization: "ETS",
        period: "2023.03",
        description: "영어 독해 및 청취 능력을 검증받았습니다.",
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
        title: "캡스톤 프로젝트 우수상",
        organization: "○○대학교",
        period: "2023.12",
        description:
          "졸업 프로젝트에서 웹 기반 협업 도구를 개발하여 우수상을 수상했습니다.",
        highlights: ["팀 리더", "프론트엔드 개발 담당"],
      },
      {
        title: "해커톤 장려상",
        organization: "○○ IT 기업",
        period: "2023.08",
        description:
          "24시간 해커톤에서 AI 기반 학습 플랫폼을 개발하여 장려상을 수상했습니다.",
        highlights: ["4인 팀", "UI/UX 설계 및 프론트엔드 구현"],
      },
    ],
  },
];

export default function Experience() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("education");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <section id="experience" className={styles.experience}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Experience</span>
          <h2 className={styles.title}>경력 & 경험</h2>
          <p className={styles.subtitle}>
            저의 교육 이력, 자격증, 그리고 수상 경력입니다.
          </p>
        </div>

        <div className={styles.tabs}>
          {categories.map((category) => (
            <button
              key={category.id}
              className={`${styles.tab} ${
                activeCategory === category.id ? styles.tabActive : ""
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              <span className={styles.tabIcon}>{category.icon}</span>
              <span className={styles.tabLabel}>{category.label}</span>
              <span className={styles.tabCount}>{category.items.length}</span>
            </button>
          ))}
        </div>

        <div className={styles.content}>
          {currentCategory && (
            <div className={styles.itemsGrid}>
              {currentCategory.items.map((item, index) => (
                <div key={index} className={styles.card}>
                  <div className={styles.cardHeader}>
                    <span className={styles.period}>{item.period}</span>
                  </div>

                  <h3 className={styles.cardTitle}>{item.title}</h3>
                  <p className={styles.organization}>{item.organization}</p>
                  <p className={styles.description}>{item.description}</p>

                  {item.highlights.length > 0 && (
                    <ul className={styles.highlights}>
                      {item.highlights.map((highlight, i) => (
                        <li key={i} className={styles.highlightItem}>
                          {highlight}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
