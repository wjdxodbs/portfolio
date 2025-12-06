import { Skill } from "@/types/skill";

export const skills: Skill[] = [
  {
    name: "React",
    level: 4,
    capabilities: [
      "컴포넌트 기반 아키텍처에 대한 이해를 바탕으로, 재사용성과 유지보수성을 고려한 UI 컴포넌트를 설계하고 구현할 수 있다.",
      "React Router를 활용해 다중 페이지 애플리케이션을 구성할 수 있으며, 동적 라우팅 및 중첩 라우팅 등 다양한 라우팅 패턴을 활용할 수 있다.",
      "메모이제이션과 코드 스플리팅 기법을 통해 애플리케이션의 성능 최적화를 적용할 수 있다. ",
    ],
  },
  {
    name: "Next.js",
    level: 3,
    capabilities: [
      "프로젝트 요구사항에 따라 SSR, SSG, CSR 중 적합한 렌더링 전략을 선택하여 구현할 수 있다.",
      "Server Components와 Client Components의 차이를 이해하고, 적절한 상황에 맞게 선택적으로 활용할 수 있다.",
      "Dynamic Routes, Route Groups, Parallel Routes 등 고급 라우팅 패턴을 활용할 수 있다.",
    ],
  },
  {
    name: "TypeScript",
    level: 4,
    capabilities: [
      "인터페이스, 제네릭, 유니온 타입 등 고급 타입 시스템을 활용한 안전한 코드 작성할 수 있다.",
      "API 데이터 구조를 안전하게 처리하는 타입을 설계할 수 있다.",
      "tsconfig.json 기본 설정 이해를 통한 안정적인 개발 환경 구축할 수 있다.",
    ],
  },
  {
    name: "JavaScript",
    level: 4,
    capabilities: [
      "ES6+ 문법과 고차함수(map, filter, reduce 등)를 활용한 데이터 처리를 할 수 있다.",
      "클로저, 이벤트 루프, 호이스팅 등 자바스크립트 동작 원리를 이해하고 활용할 수 있다.",
      "Promise와 async/await를 이용한 API 통신 및 비동기 처리를 구현할 수 있다.",
    ],
  },
  {
    name: "Recoil",
    level: 3,
    capabilities: [
      "Atom과 Selector를 활용한 전역 상태 관리 및 컴포넌트 간 데이터 공유를 할 수 있다.",
      "RecoilRoot 환경 구축 및 기본 훅을 통한 상태 관리 구현을 할 수 있다.",
      "Recoil DevTools를 활용한 상태 디버깅 및 기본적인 상태 흐름 파악을 할 수 있다.",
    ],
  },
  {
    name: "Zustand",
    level: 3,
    capabilities: [
      "create 함수와 set/get을 활용한 효율적인 전역 상태 관리를 구현할 수 있다.",
      "선택적 구독을 통한 컴포넌트 렌더링 최적화 및 성능 개선을 할 수 있다.",
      "미들웨어(persist, devtools)를 활용한 상태 영속화 및 디버깅 환경 구축을 할 수 있다.",
    ],
  },
  {
    name: "SCSS",
    level: 3,
    capabilities: [
      "변수, 믹스인, 함수를 활용한 재사용 가능한 스타일 컴포넌트 설계 및 유지보수성 향상을 할 수 있다.",
      "중첩 규칙과 부모 선택자(&)를 활용한 효율적인 CSS 구조화가 가능하다.",
      "조건문과 반복문을 통해 다양한 상황에 맞춘 동적인 스타일링을 구현할 수 있다.",
    ],
  },
  {
    name: "Tailwind CSS",
    level: 3,
    capabilities: [
      "JIT 모드와 임의값 문법을 활용하여 동적 유틸리티 생성과 커스텀 스타일을 구현할 수 있다.",
      "반응형 유틸리티 클래스를 활용하여 모바일, 태블릿, 데스크톱 환경에 적합한 사용자 인터페이스를 구현할 수 있다.",
      "CSS-first 접근법과 CSS 변수를 활용한 테마 시스템 구축을 통해 일관된 디자인을 구현할 수 있다.",
    ],
  },
  {
    name: "HTML",
    level: 4,
    capabilities: [
      "시맨틱 태그를 활용한 구조화된 HTML 작성 및 SEO 최적화를 할 수 있다.",
      "웹 접근성을 준수하여 포용적 웹 개발 및 사용자 경험 향상을 할 수 있다.",
    ],
  },
  {
    name: "CSS",
    level: 4,
    capabilities: [
      "Flexbox와 Grid를 활용하여 복잡한 레이아웃을 효율적으로 구현할 수 있다.",
      "미디어 쿼리와 CSS 변수를 활용하여 다양한 디바이스에 대응하는 반응형 웹을 구현할 수 있다.",
      "transition, animation, keyframes를 활용하여 인터랙션과 애니메이션을 구현할 수 있다.",
    ],
  },
];
