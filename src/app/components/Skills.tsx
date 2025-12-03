'use client';

import { useState } from 'react';
import styles from './Skills.module.css';

interface Skill {
  name: string;
  level: number; // 1-5
  description: string;
  capabilities: string[];
}

const skills: Skill[] = [
  {
    name: 'React',
    level: 4,
    description: '컴포넌트 기반 UI 개발에 익숙합니다.',
    capabilities: [
      'useState, useEffect 등 기본 Hooks를 활용하여 상태 관리 및 사이드 이펙트를 처리할 수 있다.',
      '반복적인 로직을 커스텀 훅으로 분리하여 재사용 가능한 코드를 작성할 수 있다.',
      'Context API를 활용하여 전역 상태를 관리하고, Props Drilling 문제를 해결할 수 있다.',
      'React.memo, useMemo, useCallback을 활용하여 불필요한 리렌더링을 방지하고 성능을 최적화할 수 있다.',
    ],
  },
  {
    name: 'TypeScript',
    level: 4,
    description: '타입 안전한 코드 작성이 가능합니다.',
    capabilities: [
      'Interface와 Type을 사용하여 데이터 구조를 명확하게 정의하고 타입 안전성을 확보할 수 있다.',
      '제네릭 타입을 활용하여 재사용 가능하고 유연한 함수 및 컴포넌트를 작성할 수 있다.',
      'Partial, Pick, Omit 등 유틸리티 타입을 활용하여 기존 타입을 변형하고 재사용할 수 있다.',
    ],
  },
  {
    name: 'Next.js',
    level: 3,
    description: 'App Router 기반 개발 경험이 있습니다.',
    capabilities: [
      '프로젝트 요구사항에 따라 SSR, SSG, CSR 중 적합한 렌더링 전략을 선택하여 구현할 수 있다.',
      'Server Components와 Client Components의 차이를 이해하고, 적절한 상황에 맞게 선택적으로 활용할 수 있다.',
      'Dynamic Routes, Route Groups, Parallel Routes 등 고급 라우팅 패턴을 활용할 수 있다.',
    ],
  },
  {
    name: 'JavaScript',
    level: 5,
    description: 'ES6+ 문법에 능숙합니다.',
    capabilities: [
      'Promise, async/await를 사용하여 비동기 로직을 효율적으로 처리하고 에러 핸들링을 구현할 수 있다.',
      'map, filter, reduce 등 배열 메서드와 구조 분해 할당, 스프레드 연산자를 능숙하게 활용할 수 있다.',
      'DOM API를 사용하여 동적으로 요소를 생성, 수정, 삭제하고 이벤트를 처리할 수 있다.',
      '클로저, 호이스팅, 실행 컨텍스트 등 JavaScript의 핵심 개념을 이해하고 설명할 수 있다.',
    ],
  },
  {
    name: 'HTML/CSS',
    level: 5,
    description: '시맨틱 마크업과 반응형 디자인이 가능합니다.',
    capabilities: [
      'header, nav, main, article 등 시맨틱 태그를 적절히 사용하여 접근성과 SEO를 고려한 마크업을 작성할 수 있다.',
      'Flexbox와 Grid를 활용하여 복잡한 레이아웃을 효율적으로 구현할 수 있다.',
      'Media Query를 사용하여 다양한 디바이스에 대응하는 반응형 웹 디자인을 구현할 수 있다.',
      'transition, animation, keyframes를 활용하여 부드러운 인터랙션과 애니메이션을 구현할 수 있다.',
    ],
  },
  {
    name: 'Tailwind CSS',
    level: 4,
    description: '유틸리티 클래스 기반 빠른 스타일링이 가능합니다.',
    capabilities: [
      '유틸리티 클래스를 조합하여 빠르게 UI를 구현하고, 일관된 디자인 시스템을 유지할 수 있다.',
      'tailwind.config.js를 수정하여 프로젝트에 맞는 커스텀 테마, 색상, 간격 등을 설정할 수 있다.',
      'sm, md, lg 등 반응형 프리픽스를 활용하여 다양한 화면 크기에 대응할 수 있다.',
    ],
  },
  {
    name: 'Git/GitHub',
    level: 4,
    description: '버전 관리와 협업에 익숙합니다.',
    capabilities: [
      'feature, develop, main 브랜치를 구분하여 체계적인 브랜치 전략을 수립하고 관리할 수 있다.',
      'Pull Request를 생성하고, 코드 리뷰를 통해 팀원과 효과적으로 협업할 수 있다.',
      'merge conflict 발생 시 원인을 파악하고 적절하게 해결할 수 있다.',
      'GitHub Actions의 기본 워크플로우를 작성하여 자동화된 CI/CD 파이프라인을 구축할 수 있다.',
    ],
  },
  {
    name: 'Figma',
    level: 3,
    description: '디자인 시안 확인 및 간단한 디자인 작업이 가능합니다.',
    capabilities: [
      '디자이너가 제공한 Figma 시안을 분석하여 정확한 수치와 스타일을 추출할 수 있다.',
      '이미지, 아이콘, SVG 등 필요한 에셋을 적절한 포맷으로 추출할 수 있다.',
    ],
  },
];

function SkillCard({ skill }: { skill: Skill }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`${styles.skillCard} ${isOpen ? styles.skillCardOpen : ''}`}>
      <button
        className={styles.skillHeader}
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className={styles.skillMain}>
          <span className={styles.skillName}>{skill.name}</span>
          <div className={styles.skillLevel}>
            {[1, 2, 3, 4, 5].map((star) => (
              <span
                key={star}
                className={`${styles.star} ${star <= skill.level ? styles.starFilled : ''}`}
              >
                ★
              </span>
            ))}
            <span className={styles.levelText}>{skill.level}/5</span>
          </div>
        </div>
        <span className={`${styles.expandIcon} ${isOpen ? styles.expandIconOpen : ''}`}>
          ▼
        </span>
      </button>

      <div className={`${styles.skillContent} ${isOpen ? styles.skillContentOpen : ''}`}>
        <p className={styles.description}>{skill.description}</p>
        <div className={styles.capabilities}>
          <span className={styles.capabilitiesTitle}>할 수 있는 것</span>
          <ul className={styles.capabilitiesList}>
            {skill.capabilities.map((cap, index) => (
              <li key={index} className={styles.capabilityItem}>
                <span className={styles.checkIcon}>✓</span>
                <span className={styles.capabilityText}>{cap}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.label}>Skills</span>
          <h2 className={styles.title}>기술 스택</h2>
          <p className={styles.subtitle}>
            각 기술을 클릭하면 상세 설명을 확인할 수 있습니다.
          </p>
        </div>

        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <SkillCard key={skill.name} skill={skill} />
          ))}
        </div>

        <div className={styles.learning}>
          <h3 className={styles.learningTitle}>📚 현재 학습 중</h3>
          <div className={styles.learningTags}>
            <span className={styles.tag}>테스트 (Jest, RTL)</span>
            <span className={styles.tag}>상태관리 (Zustand)</span>
            <span className={styles.tag}>CI/CD</span>
            <span className={styles.tag}>Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
