# 정태윤 | Frontend Developer Portfolio

프론트엔드 개발자 정태윤의 포트폴리오 사이트입니다.

배포 URL: [https://wjdxodbs-portfolio.vercel.app](https://wjdxodbs-portfolio.vercel.app)

---

## 기술 스택

| 분류       | 기술                    |
| ---------- | ----------------------- |
| 프레임워크 | Next.js 16 (App Router) |
| 언어       | TypeScript 5            |
| 스타일링   | CSS Modules             |
| 배포       | Vercel                  |

---

## 프로젝트 구조

```
portfolio/
├── public/                   # 정적 자산 (이미지, PDF, 아이콘)
└── src/
    ├── components/           # 공통 UI 컴포넌트
    │   ├── layout/           # Header, ScrollProgress
    │   ├── ui/               # CtaButton
    │   └── common/           # SectionHeader
    └── app/
        ├── _components/      # 홈페이지 전용 컴포넌트
        │   ├── Hero.tsx
        │   ├── About.tsx
        │   ├── Skills.tsx
        │   ├── SkillCard.tsx
        │   ├── Experience.tsx
        │   ├── ExperienceList.tsx
        │   ├── ExperienceTabs.tsx
        │   └── TypewriterRole.tsx
        ├── _constants/       # 홈페이지 전용 정적 데이터
        │   ├── skills.ts
        │   └── experiences.ts
        ├── _types/           # 홈페이지 전용 타입 정의
        │   ├── skill.ts
        │   └── experience.ts
        ├── _hooks/           # 홈페이지 전용 훅
        │   └── useTypewriter.ts
        ├── (withHeader)/     # 헤더 포함 라우트 그룹
        │   ├── layout.tsx
        │   ├── page.tsx      # 홈 페이지
        │   ├── contact/      # 연락처 페이지 전용
        │   │   ├── _components/
        │   │   ├── _constants/
        │   │   ├── _types/
        │   │   └── _hooks/
        │   └── projects/     # 프로젝트 페이지 전용
        │       ├── _components/
        │       ├── _constants/
        │       ├── _types/
        │       └── _utils/
        ├── globals.css       # 전역 스타일 및 공통 클래스
        ├── layout.tsx        # 전역 레이아웃 + 메타데이터
        ├── not-found.tsx     # 404 페이지
        ├── sitemap.ts        # 자동 sitemap.xml 생성
        └── robots.ts         # robots.txt 생성
```

---

## 실행 방법

```bash
# 의존성 설치
npm install

# 개발 서버 실행
npm run dev
# http://localhost:3000

# 프로덕션 빌드
npm run build

# 빌드된 앱 실행
npm run start
```
