## 개요

정태윤의 프론트엔드 포트폴리오 사이트입니다. Next.js App Router 기반으로 제작되었으며, 스크롤 진행률 표시와 프로젝트 Notion 임베드 등 인터랙션을 포함합니다.

## 기술 스택

- Next.js (App Router) + TypeScript
- 스타일: CSS Modules
- 배포: Vercel

## 주요 기능

- 홈: `Hero`, `About`, `Skills`, `Experience` 섹션
- 프로젝트: Notion 임베드로 프로젝트 목록 제공 (`/projects`)
- 헤더 고정 내비게이션 + 스크롤 진행률 바
- SEO 메타데이터 및 Open Graph 설정

## 프로젝트 구조

- `src/app/layout.tsx` : 전역 레이아웃, 메타데이터, 헤더/스크롤바 포함
- `src/app/page.tsx` : 홈 섹션 조합
- `src/app/projects/page.tsx` : 프로젝트 Notion 임베드 페이지
- `src/app/components/*` : UI 컴포넌트 (Header, ScrollProgress 등)
- `public/` : 정적 자산 (예: 로고)

## 실행 방법

```bash
npm install
npm run dev
# http://localhost:3000
```

## 스크립트

- `npm run dev` : 개발 서버 실행
- `npm run build` : 프로덕션 빌드
- `npm run start` : 빌드된 앱 실행

## 메모

- 스크롤바는 `requestAnimationFrame`을 활용한 throttling으로 부드럽게 업데이트됩니다.
- `metadataBase`와 Open Graph 이미지가 `layout.tsx`에 설정되어 있습니다.
