# 포트폴리오 디자인 리디자인 구현 계획

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Editorial Dark 방향으로 색상(그린→인디고), 타이포그래피, 레이아웃을 전면 개선해 개성 있는 포트폴리오를 만든다.

**Architecture:** globals.css CSS 변수 교체를 먼저 하면 색상 의존 컴포넌트가 자동 반영된다. 그 후 SectionHeader → Hero → About → Skills → Experience 순으로 섹션별로 진행한다. 데이터 파일(`_constants/`)은 전혀 건드리지 않는다.

**Tech Stack:** Next.js 15 App Router, CSS Modules, TypeScript, lucide-react

---

## 파일 변경 목록

| 파일 | 작업 |
|---|---|
| `src/app/globals.css` | 색상 변수 전면 교체 |
| `src/components/common/SectionHeader.tsx` | editorial 스타일로 재작성 |
| `src/components/common/SectionHeader.module.css` | 전체 교체 |
| `src/app/(withHeader)/projects/page.tsx` | SectionHeader 호출 수정 |
| `src/app/(withHeader)/contact/page.tsx` | SectionHeader 호출 수정 |
| `src/app/_components/Hero.tsx` | 전체 재작성 |
| `src/app/_components/Hero.module.css` | 전체 교체 |
| `src/app/_components/TypewriterRole.tsx` | **삭제** |
| `src/app/_components/TypewriterRole.module.css` | **삭제** |
| `src/app/_components/About.tsx` | 레이아웃 재구성 |
| `src/app/_components/About.module.css` | 전체 교체 |
| `src/app/_components/Skills.tsx` | 카테고리 그룹 렌더링 |
| `src/app/_components/Skills.module.css` | 전체 교체 |
| `src/app/_components/SkillCard.tsx` | 인라인 설명 카드로 재작성 |
| `src/app/_components/SkillCard.module.css` | 전체 교체 |
| `src/app/_components/Experience.tsx` | SectionHeader 호출 수정 |
| `src/app/_components/ExperienceList.tsx` | row 레이아웃으로 재작성 |
| `src/app/_components/ExperienceList.module.css` | 전체 교체 |
| `src/app/_components/ExperienceInteractive.tsx` | categoryLabel prop 추가 |

---

## Task 1: CSS 변수 교체

**Files:**
- Modify: `src/app/globals.css`

- [ ] **Step 1: globals.css 색상 변수 교체**

`:root` 블록에서 아래 변수들을 교체한다. 나머지 변수(radius, spacing, transition 등)는 그대로 둔다.

```css
/* src/app/globals.css — :root 블록 색상 부분만 교체 */
:root {
  /* Colors */
  --background: #0d0d11;
  --background-secondary: #1a1a22;
  --background-tertiary: #24242e;
  --foreground: #e8e8f0;
  --foreground-secondary: #94949f;
  --foreground-muted: #8b8b9f;
  --foreground-bright: #f0f0f5;

  /* Accent Colors — 그린에서 인디고로 전면 교체 */
  --accent: #818cf8;
  --accent-hover: #6366f1;
  --accent-glow: rgba(129, 140, 248, 0.12);
  --accent-glow-secondary: rgba(129, 140, 248, 0.08);
  --accent-border: rgba(129, 140, 248, 0.25);
  --accent-shadow: rgba(129, 140, 248, 0.1);

  /* Borders */
  --border: #24242e;
  --border-hover: #2a2a36;

  /* glass */
  --glass-highlight: inset 0 1px 0 rgba(255, 255, 255, 0.04);
  --card-glow:
    0 0 0 1px rgba(129, 140, 248, 0.2),
    0 0 20px rgba(129, 140, 248, 0.12),
    0 4px 24px rgba(129, 140, 248, 0.08);
}
```

나머지(radius, spacing, transition, padding, scale, UI Colors, Extended Background, Modal, Glass Effect)는 건드리지 않는다.

- [ ] **Step 2: 시각 확인**

```bash
npm run dev
```

브라우저에서 `http://localhost:3000` 열어서 전체 색상이 인디고 계열로 바뀌었는지 확인. 헤더, 버튼, 링크 hover, 포커스 아웃라인이 모두 인디고로 보이면 정상.

- [ ] **Step 3: 커밋**

```bash
git add src/app/globals.css
git commit -m "style: 색상 시스템 그린→인디고로 전면 교체"
```

---

## Task 2: SectionHeader 교체

**Files:**
- Modify: `src/components/common/SectionHeader.tsx`
- Modify: `src/components/common/SectionHeader.module.css`
- Modify: `src/app/_components/About.tsx` (호출 수정)
- Modify: `src/app/_components/Skills.tsx` (호출 수정)
- Modify: `src/app/_components/Experience.tsx` (호출 수정)
- Modify: `src/app/(withHeader)/contact/page.tsx` (호출 수정)
- Modify: `src/app/(withHeader)/projects/page.tsx` (호출 수정)

- [ ] **Step 1: SectionHeader.tsx 교체**

`title`, `subtitle` prop 제거. `index` prop 추가(optional). 나머지 파일은 아직 수정하지 않는다.

```tsx
// src/components/common/SectionHeader.tsx
import styles from "./SectionHeader.module.css";

interface SectionHeaderProps {
  label: string;
  index?: string;
  as?: "h1" | "h2";
}

export default function SectionHeader({
  label,
  index,
  as = "h2",
}: SectionHeaderProps) {
  const Heading = as;

  return (
    <header className={styles.header}>
      {index && (
        <span className={styles.index} aria-hidden="true">
          {index}
        </span>
      )}
      <Heading className={styles.label}>{label}</Heading>
      <div className={styles.rule} aria-hidden="true" />
    </header>
  );
}
```

- [ ] **Step 2: SectionHeader.module.css 교체**

```css
/* src/components/common/SectionHeader.module.css */
.header {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 48px;
}

.index {
  font-size: 0.65rem;
  color: var(--foreground-muted);
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-weight: 500;
  flex-shrink: 0;
}

.label {
  font-size: 0.65rem;
  color: var(--foreground-secondary);
  letter-spacing: 0.2em;
  text-transform: uppercase;
  font-weight: 600;
  flex-shrink: 0;
}

.rule {
  flex: 1;
  height: 1px;
  background: var(--border);
}
```

- [ ] **Step 3: 호출부 5곳 수정**

```tsx
// src/app/_components/About.tsx
<SectionHeader label="About" index="01" />

// src/app/_components/Skills.tsx
<SectionHeader label="Skills" index="02" />

// src/app/_components/Experience.tsx
<SectionHeader label="Experience" index="03" />

// src/app/(withHeader)/contact/page.tsx
<SectionHeader label="Contact" as="h1" />

// src/app/(withHeader)/projects/page.tsx
<SectionHeader label="Projects" as="h1" />
```

- [ ] **Step 4: 빌드 에러 확인**

```bash
npm run lint
```

`title` prop 관련 TypeScript 에러 없으면 정상. 에러 있으면 해당 파일 수정.

- [ ] **Step 5: 커밋**

```bash
git add src/components/common/SectionHeader.tsx src/components/common/SectionHeader.module.css
git add src/app/_components/About.tsx src/app/_components/Skills.tsx src/app/_components/Experience.tsx
git add "src/app/(withHeader)/contact/page.tsx" "src/app/(withHeader)/projects/page.tsx"
git commit -m "refactor: SectionHeader editorial 스타일로 교체, index prop 추가"
```

---

## Task 3: Hero 재작성 + TypewriterRole 삭제

**Files:**
- Delete: `src/app/_components/TypewriterRole.tsx`
- Delete: `src/app/_components/TypewriterRole.module.css`
- Modify: `src/app/_components/Hero.tsx`
- Modify: `src/app/_components/Hero.module.css`

- [ ] **Step 1: TypewriterRole 파일 삭제**

```bash
rm src/app/_components/TypewriterRole.tsx
rm src/app/_components/TypewriterRole.module.css
```

- [ ] **Step 2: Hero.tsx 전체 교체**

```tsx
// src/app/_components/Hero.tsx
import Link from "next/link";
import CtaButton from "@/components/ui/CtaButton";
import { Monitor, Download } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.eyebrow} aria-hidden="true">
          <span className={styles.eyebrowLine} />
          <span className={styles.eyebrowText}>
            Frontend Developer · Seoul · 2025
          </span>
        </div>

        <h1 className={styles.headline}>
          <span>정태윤,</span>
          <span className={styles.headlineOutline}>웹을 만드는</span>
          <em className={styles.headlineAccent}>사람.</em>
        </h1>

        <div className={styles.body}>
          <p className={styles.desc}>
            <strong>React · TypeScript · Next.js</strong>로 인터페이스를
            설계하고, 사용자가 원하는 것을 직관적으로 찾을 수 있는 경험을
            만듭니다. 코드의 가독성과 유지보수를 언제나 먼저 생각합니다.
          </p>

          <div className={styles.right}>
            <dl className={styles.stats}>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Projects</dt>
                <dd className={styles.statNum}>4+</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>SSAFY 수상</dt>
                <dd className={styles.statNum}>2관왕</dd>
              </div>
              <div className={styles.stat}>
                <dt className={styles.statLabel}>Curiosity</dt>
                <dd className={styles.statNum}>∞</dd>
              </div>
            </dl>

            <div className={styles.ctas}>
              <CtaButton as={Link} href="/projects" variant="primary" size="lg">
                <Monitor size={16} aria-hidden="true" />
                프로젝트 보기
              </CtaButton>
              <CtaButton
                as="a"
                href="/resume.pdf"
                download="프론트엔드 개발자 정태윤 이력서.pdf"
                variant="outline"
                size="lg"
              >
                <Download size={16} aria-hidden="true" />
                이력서 다운로드
              </CtaButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 3: Hero.module.css 전체 교체**

```css
/* src/app/_components/Hero.module.css */
.hero {
  position: relative;
  overflow: hidden;
}

.hero::before {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(
      ellipse 80% 70% at 90% 5%,
      rgba(129, 140, 248, 0.13) 0%,
      transparent 100%
    ),
    radial-gradient(
      ellipse 50% 90% at 100% 55%,
      rgba(129, 140, 248, 0.07) 0%,
      transparent 100%
    );
  pointer-events: none;
  z-index: 0;
}

.hero::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 120px;
  background: linear-gradient(to bottom, transparent, var(--background));
  pointer-events: none;
  z-index: 1;
}

.inner {
  max-width: var(--container-width);
  margin: 0 auto;
  padding: calc(var(--header-height) + 48px) 24px 100px;
  position: relative;
  z-index: 2;
}

.eyebrow {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 28px;
  animation: fadeInUp var(--transition-slower) 0s forwards;
  opacity: 0;
}

.eyebrowLine {
  width: 32px;
  height: 1px;
  background: var(--accent);
  flex-shrink: 0;
}

.eyebrowText {
  font-size: 0.7rem;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 500;
}

.headline {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 800;
  line-height: 1.02;
  letter-spacing: -0.05em;
  color: var(--foreground-bright);
  display: flex;
  flex-direction: column;
  animation: fadeInUp var(--transition-slower) 0.1s forwards;
  opacity: 0;
}

.headlineOutline {
  color: transparent;
  -webkit-text-stroke: 1.5px var(--foreground-muted);
}

.headlineAccent {
  font-style: italic;
  color: var(--accent);
  -webkit-text-stroke: 0;
}

.body {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: end;
  margin-top: 48px;
  padding-top: 48px;
  border-top: 1px solid var(--border);
  animation: fadeInUp var(--transition-slower) 0.2s forwards;
  opacity: 0;
}

.desc {
  font-size: 1.05rem;
  color: var(--foreground-secondary);
  line-height: 1.8;
  max-width: 400px;
}

.desc strong {
  color: var(--foreground);
  font-weight: 500;
}

.right {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 24px;
}

.stats {
  display: flex;
  gap: 32px;
}

.stat {
  text-align: right;
}

.statNum {
  display: block;
  font-size: 1.6rem;
  font-weight: 800;
  color: var(--foreground-bright);
  letter-spacing: -0.04em;
  line-height: 1;
}

.statLabel {
  font-size: 0.68rem;
  color: var(--foreground-muted);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-top: 4px;
  display: block;
}

.ctas {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

@media (max-width: 1024px) {
  .body {
    grid-template-columns: 1fr;
    gap: 40px;
  }

  .right {
    align-items: flex-start;
  }

  .stat {
    text-align: left;
  }
}

@media (max-width: 768px) {
  .headline {
    font-size: clamp(2.5rem, 10vw, 3.5rem);
  }
}

@media (max-width: 480px) {
  .stats {
    gap: 20px;
  }
}
```

- [ ] **Step 4: 시각 확인**

```bash
npm run dev
```

히어로 섹션에서 확인:
- 이름 헤드라인 3줄 표시 (정태윤, / 아웃라인 / 이탤릭 인디고)
- 그라디언트가 섹션 하단에서 자연스럽게 페이드
- 코드블록 없음
- 통계 3개 + 버튼 2개

- [ ] **Step 5: 커밋**

```bash
git add src/app/_components/Hero.tsx src/app/_components/Hero.module.css
git rm src/app/_components/TypewriterRole.tsx src/app/_components/TypewriterRole.module.css
git commit -m "feat: Hero 섹션 editorial 헤드라인으로 재작성, TypewriterRole 제거"
```

---

## Task 4: About 재구성

**Files:**
- Modify: `src/app/_components/About.tsx`
- Modify: `src/app/_components/About.module.css`

- [ ] **Step 1: About.tsx 교체**

```tsx
// src/app/_components/About.tsx
import Image from "next/image";
import styles from "./About.module.css";
import SectionHeader from "@/components/common/SectionHeader";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className="container">
        <SectionHeader label="About" index="01" />

        <div className={styles.content}>
          <figure className={styles.imageContainer}>
            <Image
              src="/id_photo.jpg"
              alt="프로필 이미지"
              fill
              sizes="200px"
              priority
              className={styles.profileImage}
            />
          </figure>

          <div className={styles.info}>
            <p className={styles.quote}>
              커피와 노트북만 있다면,
              <br />
              어디서든{" "}
              <em className={styles.accent}>즐겁게</em>{" "}
              일하는 사람.
            </p>

            <p className={styles.description}>
              재사용 가능한 컴포넌트와 효율적인 상태 관리를 바탕으로,
              유지보수가 쉬운 코드를 작성하는 프론트엔드 개발자입니다. 다양한
              프로젝트 경험을 바탕으로, 기술 선택보다는 문제 해결과 사용자
              경험을 우선하는 개발을 추구합니다.
            </p>

            <dl className={styles.infoGrid}>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>위치</dt>
                <dd className={styles.infoVal}>서울, 대한민국</dd>
              </div>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>상태</dt>
                <dd className={`${styles.infoVal} ${styles.infoValAccent}`}>
                  취업 준비 중
                </dd>
              </div>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>관심 분야</dt>
                <dd className={styles.infoVal}>Frontend · UX</dd>
              </div>
              <div className={styles.infoCell}>
                <dt className={styles.infoKey}>이메일</dt>
                <dd className={styles.infoVal}>wjdxodbs@gmail.com</dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: About.module.css 교체**

```css
/* src/app/_components/About.module.css */
.about {
  padding: var(--section-padding) 0;
  background: var(--background);
  position: relative;
  border-top: 1px solid var(--border);
}

.about::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 90% 50%,
    rgba(129, 140, 248, 0.05) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.content {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 52px;
  align-items: start;
}

.imageContainer {
  width: 200px;
  aspect-ratio: 3 / 4;
  background: var(--background-secondary);
  border: 1px solid var(--border-hover);
  border-radius: var(--radius-md);
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.imageContainer::after {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(13, 13, 17, 0.5) 100%);
  pointer-events: none;
}

.profileImage {
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.quote {
  font-size: 1.5rem;
  font-weight: 700;
  line-height: 1.4;
  letter-spacing: -0.03em;
  color: var(--foreground);
}

.accent {
  color: var(--accent);
  font-style: italic;
}

.description {
  font-size: 0.95rem;
  line-height: 1.85;
  color: var(--foreground-secondary);
}

.infoGrid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  border: 1px solid var(--border);
  border-radius: var(--radius-md);
  overflow: hidden;
}

.infoCell {
  padding: 12px 16px;
  border-bottom: 1px solid var(--border);
  border-right: 1px solid var(--border);
}

.infoCell:nth-child(even) {
  border-right: none;
}

.infoCell:nth-last-child(-n + 2) {
  border-bottom: none;
}

.infoKey {
  font-size: 0.65rem;
  color: var(--foreground-muted);
  text-transform: uppercase;
  letter-spacing: 0.12em;
  display: block;
  margin-bottom: 4px;
}

.infoVal {
  font-size: 0.875rem;
  color: var(--foreground-secondary);
  font-weight: 500;
}

.infoValAccent {
  color: var(--accent);
}

@media (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
    gap: 32px;
    justify-items: center;
  }

  .imageContainer {
    width: 160px;
  }

  .quote {
    font-size: 1.3rem;
  }
}
```

- [ ] **Step 3: 시각 확인**

```bash
npm run dev
```

About 섹션 확인:
- 사진 200px 좌측 고정
- 우측에 인용구(이탤릭 인디고 강조) + 설명 + 2열 인포 그리드

- [ ] **Step 4: 커밋**

```bash
git add src/app/_components/About.tsx src/app/_components/About.module.css
git commit -m "feat: About 섹션 인용구+인포 그리드 레이아웃으로 재구성"
```

---

## Task 5: SkillCard 재작성

**Files:**
- Modify: `src/app/_components/SkillCard.tsx`
- Modify: `src/app/_components/SkillCard.module.css`

- [ ] **Step 1: SkillCard.tsx 교체**

아코디언 제거, capabilities 항상 표시.

```tsx
// src/app/_components/SkillCard.tsx
import type { Skill } from "@/app/_types/skill";
import styles from "./SkillCard.module.css";

interface SkillCardProps {
  skill: Skill;
}

export default function SkillCard({ skill }: SkillCardProps) {
  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <span className={styles.name}>{skill.name}</span>
        <div
          className={styles.level}
          role="img"
          aria-label={`숙련도 ${skill.level} / 5`}
        >
          {Array.from({ length: 5 }, (_, i) => (
            <span
              key={i}
              className={i < skill.level ? styles.dotFilled : styles.dot}
              aria-hidden="true"
            />
          ))}
        </div>
      </div>

      <ul className={styles.caps}>
        {skill.capabilities.map((cap, i) => (
          <li key={i} className={styles.cap}>
            {cap}
          </li>
        ))}
      </ul>
    </article>
  );
}
```

- [ ] **Step 2: SkillCard.module.css 교체**

```css
/* src/app/_components/SkillCard.module.css */
.card {
  background: var(--background-secondary);
  border: 1px solid var(--border-hover);
  border-radius: var(--radius-md);
  padding: 20px 22px;
  display: flex;
  flex-direction: column;
  gap: 12px;
  transition: border-color var(--transition-normal);
}

.card:hover {
  border-color: var(--accent-border);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.name {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--foreground);
  letter-spacing: -0.01em;
}

.level {
  display: flex;
  gap: 4px;
  align-items: center;
}

.dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--border-hover);
}

.dotFilled {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: var(--accent);
}

.caps {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.cap {
  font-size: 0.76rem;
  color: var(--foreground-muted);
  line-height: 1.65;
  padding-left: 12px;
  position: relative;
}

.cap::before {
  content: "";
  position: absolute;
  left: 0;
  top: 8px;
  width: 3px;
  height: 3px;
  border-radius: 50%;
  background: var(--border-hover);
}
```

- [ ] **Step 3: 커밋**

```bash
git add src/app/_components/SkillCard.tsx src/app/_components/SkillCard.module.css
git commit -m "refactor: SkillCard 아코디언 제거, capabilities 인라인 표시로 변경"
```

---

## Task 6: Skills 섹션 재구성

**Files:**
- Modify: `src/app/_components/Skills.tsx`
- Modify: `src/app/_components/Skills.module.css`

- [ ] **Step 1: Skills.tsx 교체**

카테고리 그룹으로 분류. `_constants/skills.ts`는 건드리지 않는다.

```tsx
// src/app/_components/Skills.tsx
import styles from "./Skills.module.css";
import { skills } from "@/app/_constants/skills";
import SkillCard from "./SkillCard";
import SectionHeader from "@/components/common/SectionHeader";

const CATEGORIES: Record<string, string[]> = {
  Core: ["React", "Next.js", "TypeScript", "JavaScript", "HTML", "CSS"],
  Styling: ["SCSS", "Tailwind CSS"],
  "State Management": ["Recoil", "Zustand", "Tanstack Query"],
};

export default function Skills() {
  return (
    <section id="skills" className={styles.skills}>
      <div className="container">
        <SectionHeader label="Skills" index="02" />

        {Object.entries(CATEGORIES).map(([category, names]) => {
          const categorySkills = skills.filter((s) => names.includes(s.name));
          return (
            <div key={category} className={styles.category}>
              <h3 className={styles.categoryTitle}>{category}</h3>
              <ul className={styles.grid}>
                {categorySkills.map((skill) => (
                  <li key={skill.name}>
                    <SkillCard skill={skill} />
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Skills.module.css 교체**

```css
/* src/app/_components/Skills.module.css */
.skills {
  padding: var(--section-padding) 0;
  background: var(--background-secondary);
  position: relative;
  border-top: 1px solid var(--border);
}

.skills::before {
  content: "";
  position: absolute;
  inset: 0;
  background: radial-gradient(
    ellipse at 10% 50%,
    rgba(129, 140, 248, 0.05) 0%,
    transparent 60%
  );
  pointer-events: none;
}

.category {
  margin-bottom: 36px;
}

.category:last-child {
  margin-bottom: 0;
}

.categoryTitle {
  font-size: 0.65rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--accent);
  font-weight: 600;
  margin-bottom: 14px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border);
  display: flex;
  align-items: center;
  gap: 10px;
}

.categoryTitle::after {
  content: "";
  flex: 1;
  height: 1px;
  background: var(--border);
}

.grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  list-style: none;
}

@media (max-width: 900px) {
  .grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .grid {
    grid-template-columns: 1fr;
  }
}
```

- [ ] **Step 3: 시각 확인**

```bash
npm run dev
```

Skills 섹션에서 확인:
- Core / Styling / State Management 3개 카테고리 헤더
- 각 카테고리 아래 3열 카드 그리드
- 각 카드에 스킬명, 레벨 점, capabilities 목록 표시
- 아코디언 없음

- [ ] **Step 4: 커밋**

```bash
git add src/app/_components/Skills.tsx src/app/_components/Skills.module.css
git commit -m "feat: Skills 섹션 카테고리 그룹 레이아웃으로 재구성"
```

---

## Task 7: ExperienceList row 레이아웃

**Files:**
- Modify: `src/app/_components/ExperienceList.tsx`
- Modify: `src/app/_components/ExperienceList.module.css`
- Modify: `src/app/_components/ExperienceInteractive.tsx`

- [ ] **Step 1: ExperienceInteractive.tsx 수정**

`categoryLabel` prop을 ExperienceList에 전달.

```tsx
// src/app/_components/ExperienceInteractive.tsx
"use client";

import { useState } from "react";
import styles from "./ExperienceInteractive.module.css";
import type { CategoryType } from "@/app/_types/experience";
import { categories } from "@/app/_constants/experiences";
import ExperienceTabs from "./ExperienceTabs";
import ExperienceList from "./ExperienceList";

export default function ExperienceInteractive() {
  const [activeCategory, setActiveCategory] =
    useState<CategoryType>("education");

  const currentCategory = categories.find((cat) => cat.id === activeCategory);

  return (
    <>
      <ExperienceTabs
        categories={categories}
        activeCategory={activeCategory}
        onSelect={setActiveCategory}
      />
      <div
        id={`experience-panel-${activeCategory}`}
        role="tabpanel"
        aria-label={currentCategory?.label}
        className={styles.content}
      >
        {currentCategory && (
          <ExperienceList
            items={currentCategory.items}
            categoryLabel={currentCategory.label}
          />
        )}
      </div>
    </>
  );
}
```

- [ ] **Step 2: ExperienceList.tsx 교체**

카드 → row 레이아웃. `categoryLabel` prop 추가.

```tsx
// src/app/_components/ExperienceList.tsx
import type { ExperienceItem } from "@/app/_types/experience";
import styles from "./ExperienceList.module.css";

interface ExperienceListProps {
  items: ExperienceItem[];
  categoryLabel: string;
}

export default function ExperienceList({
  items,
  categoryLabel,
}: ExperienceListProps) {
  return (
    <ul className={styles.list}>
      {items.map((item, idx) => (
        <li key={idx} className={styles.row}>
          <span className={styles.period}>{item.period}</span>
          <div className={styles.main}>
            <span className={styles.title}>{item.title}</span>
            <span className={styles.org}>{item.organization}</span>
            {item.highlights.length > 0 && (
              <ul className={styles.highlights}>
                {item.highlights.map((h, i) => (
                  <li key={i} className={styles.highlight}>
                    {h}
                  </li>
                ))}
              </ul>
            )}
          </div>
          <span className={styles.badge}>{categoryLabel}</span>
        </li>
      ))}
    </ul>
  );
}
```

- [ ] **Step 3: ExperienceList.module.css 교체**

```css
/* src/app/_components/ExperienceList.module.css */
.list {
  list-style: none;
  display: flex;
  flex-direction: column;
  max-width: 800px;
}

.row {
  display: grid;
  grid-template-columns: 160px 1fr auto;
  gap: 32px;
  align-items: baseline;
  padding: 22px 0;
  border-bottom: 1px solid var(--border);
}

.period {
  font-size: 0.75rem;
  color: var(--foreground-muted);
  font-variant-numeric: tabular-nums;
  letter-spacing: 0.03em;
  padding-top: 2px;
}

.main {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--foreground);
  letter-spacing: -0.01em;
}

.org {
  font-size: 0.78rem;
  color: var(--foreground-secondary);
}

.highlights {
  list-style: none;
  margin-top: 4px;
  display: flex;
  flex-direction: column;
  gap: 2px;
}

.highlight {
  font-size: 0.75rem;
  color: var(--foreground-muted);
}

.highlight::before {
  content: "· ";
}

.badge {
  font-size: 0.65rem;
  color: var(--accent);
  background: var(--accent-glow);
  border: 1px solid var(--accent-border);
  padding: var(--badge-padding-sm);
  border-radius: var(--radius-sm);
  white-space: nowrap;
  font-weight: 600;
  letter-spacing: 0.05em;
  align-self: flex-start;
  margin-top: 2px;
}

@media (max-width: 640px) {
  .row {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto auto;
    gap: 6px 16px;
  }

  .period {
    grid-column: 1;
    grid-row: 1;
  }

  .main {
    grid-column: 1;
    grid-row: 2;
  }

  .badge {
    grid-column: 2;
    grid-row: 1 / 3;
    align-self: center;
  }
}
```

- [ ] **Step 4: 시각 확인**

```bash
npm run dev
```

Experience 섹션 확인:
- 탭 전환 정상 동작 (교육/자격증/수상)
- 각 탭 내 아이템이 `기간 | 제목+기관 | 배지` 3열로 표시
- 배지 텍스트가 현재 탭 카테고리 이름과 일치

- [ ] **Step 5: 커밋**

```bash
git add src/app/_components/ExperienceList.tsx src/app/_components/ExperienceList.module.css
git add src/app/_components/ExperienceInteractive.tsx
git commit -m "feat: Experience 리스트 row 레이아웃으로 재구성, categoryLabel 배지 추가"
```

---

## Task 8: 최종 빌드 검증 및 정리

- [ ] **Step 1: lint 검사**

```bash
npm run lint
```

에러 없어야 한다. any 타입 경고, unused import 등 발견 시 수정.

- [ ] **Step 2: 프로덕션 빌드 검증**

```bash
npm run build
```

빌드 성공 확인. 에러 있으면 해결 후 재시도.

- [ ] **Step 3: 전체 페이지 시각 점검**

```bash
npm run dev
```

아래 항목 순서대로 확인:

| 페이지/섹션 | 확인 항목 |
|---|---|
| Hero | 헤드라인 3줄, 아웃라인 텍스트, 그라디언트 자연스럽게 페이드 |
| About | 사진 200px 좌측, 인용구, 2열 인포 그리드 |
| Skills | Core/Styling/State Management 카테고리, 3열 카드 |
| Experience | 탭 전환, row 레이아웃, 배지 |
| /projects | SectionHeader "Projects" h1 |
| /contact | SectionHeader "Contact" h1 |
| 전체 | 인디고 accent, 버튼 hover, 포커스 아웃라인 |

- [ ] **Step 4: 최종 커밋**

```bash
git add -A
git commit -m "chore: 디자인 리디자인 완료 — 빌드 및 시각 검증"
```
