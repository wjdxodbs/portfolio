# 포트폴리오 디자인 리디자인 스펙

**날짜:** 2026-04-02  
**방향:** Direction A — Editorial Dark  
**범위:** 전체 페이지 (Home, Projects, Contact) + 공통 컴포넌트

---

## 1. 핵심 목표

현재 디자인의 문제("개발자 포트폴리오 보일러플레이트" 느낌)를 해결하고, 기술적 완성도를 유지하면서 "정태윤답다"는 개성을 만들어낸다.

**바뀌는 것:** 색상 시스템, 타이포그래피, 섹션 레이아웃, 히어로 구조, Skills 렌더링 방식  
**바뀌지 않는 것:** 라우팅 구조, 데이터 파일(`_constants/`), 모달 패턴, 접근성 구현, CSS Modules 방식

---

## 2. 색상 시스템

### 변경 내용
기존 네온 그린(`#00ff88`) 계열을 인디고(`#818cf8`) 계열로 전면 교체.

```css
/* 기존 → 신규 */
--accent:              #00ff88  →  #818cf8
--accent-hover:        #00cc6e  →  #6366f1
--accent-glow:         rgba(0,255,136,0.15)  →  rgba(129,140,248,0.12)
--accent-glow-secondary: rgba(0,212,255,0.1) →  rgba(129,140,248,0.08)
--accent-border:       rgba(0,255,136,0.3)   →  rgba(129,140,248,0.25)
--accent-shadow:       rgba(0,255,136,0.12)  →  rgba(129,140,248,0.1)
--card-glow: 0 0 0 1px rgba(129,140,248,0.2), 0 0 20px rgba(129,140,248,0.12), 0 4px 24px rgba(129,140,248,0.08)

/* 배경 톤 — 기존 순수 블랙에서 아주 미세하게 따뜻한 쪽으로 */
--background:           #0a0a0a  →  #09090b
--background-secondary: #111111  →  #0f0f12
--background-tertiary:  #1a1a1a  →  #18181b
--border:               #2a2a2a  →  #1a1a1e
--border-hover:         #3a3a3a  →  #27272a
--foreground-muted:     #767676  →  #52525b
```

### Status dot (취업 준비 중 표시)
기존 그린 유지 — `--dot-green: #28c840` (시스템 UI 색상이므로 변경하지 않음)

---

## 3. 타이포그래피

### 폰트
- 기존 Pretendard 유지 (교체 없음)
- 히어로 헤딩에서 `font-weight: 800`, `letter-spacing: -0.05em` 적용으로 editorial 느낌 부여

### 섹션 헤더 패턴 변경
기존 `SectionHeader` 컴포넌트 (label + title 구조) → 새로운 editorial 스타일로 교체

```
기존: "About Me / 저를 소개합니다" (2줄 헤더)
신규: "01 ——————— ABOUT" (번호 + 룰 라인 + 카테고리명)
```

`SectionHeader` 컴포넌트에 새 variant 추가하거나, 각 섹션에서 직접 구현.

---

## 4. 섹션별 변경 사항

### 4-1. Hero

**현재:** 이름 + TypewriterRole / 오른쪽 코드블록 / 그리드 배경 / 스크롤 인디케이터  
**변경:**

```
[상단]
eyebrow: "Frontend Developer · Seoul · 2025"  (작은 라인 + 텍스트)
헤드라인: "정태윤," (1줄)
         "웹을 만드는" (아웃라인 텍스트 — color: transparent, -webkit-text-stroke)
         "사람." (인디고 이탤릭)
폰트: font-weight 800, letter-spacing -0.05em, clamp(3rem, 7vw, 5.5rem)

[하단 — border-top 구분선 아래]
왼쪽: 소개 텍스트 (기존 About 내용 일부 활용)
오른쪽: 통계 3개 (4+ Projects / SSAFY 수상 / ∞ Curiosity) + CTA 버튼 2개
```

코드블록, TypewriterRole, 그리드 배경 패턴, 스크롤 인디케이터 제거.

### 4-2. About

**현재:** 프로필 이미지(좌) + 텍스트(우) 2열 그리드  
**변경:**

```
[좌] 큰 인트로 인용구 스타일 텍스트 + 본문 설명 (기존 텍스트 재사용)
[우] 정보 테이블 (키-값 쌍)
    - 위치: 서울, 대한민국
    - 상태: 취업 준비 중 (인디고 색상)
    - 관심 분야: Frontend · UX
    - 이메일: wjdxodbs@gmail.com
```

프로필 이미지 제거 (텍스트 중심으로 전환). 기존 About 텍스트 내용은 최대한 활용.

### 4-3. Skills

**현재:** 아코디언 카드 (클릭 → 펼쳐서 capabilities 확인)  
**변경:** 카테고리 그룹 + 3열 카드 그리드, capabilities 인라인 표시

**카테고리 분류 (데이터 파일 변경 없이 렌더링 시 분류):**
```
Core:              React, Next.js, TypeScript, JavaScript, HTML, CSS
Styling:           SCSS, Tailwind CSS
State Management:  Recoil, Zustand, Tanstack Query
```

**카드 구조:**
```
┌─────────────────────────────┐
│ 스킬명           ●●●●○      │  ← skill.name + skill.level (dot 5개)
│ ─────────────────────────── │
│ · capability 1              │
│ · capability 2              │
│ · capability 3              │
└─────────────────────────────┘
```

`skills.ts` 데이터 구조 변경 없음. `SkillCard.tsx`, `Skills.tsx` 컴포넌트 교체.

### 4-4. Experience

**현재:** 탭(교육/자격증/수상) + 리스트  
**변경:** 탭 패턴 유지, 스타일만 editorial로 변경

```
탭: "교육 / 자격증 / 수상" → 스타일 변경 (하단 인디고 언더라인 방식 유지)
아이템: period(좌) / title+organization(중) / badge(우) 3열 그리드
```

`experiences.ts` 데이터 구조 변경 없음. 탭 인터랙션 로직 유지, CSS만 변경.

### 4-5. Projects 페이지

**현재:** glassmorphism 카드 그리드  
**변경:** 카드 스타일을 A 스타일로 통일 (인디고 hover glow, 테두리 정리)

카드 내부 구조, 모달, 데이터 변경 없음. `ProjectCard.module.css` 색상 변수 업데이트.

### 4-6. Contact 페이지

색상 변수 교체로 자동 반영. 별도 레이아웃 변경 없음.

### 4-7. Header / NavLinks

색상 변수 교체로 자동 반영. 로고 스타일 미세 조정 가능.

---

## 5. 명시적 설계 결정 사항

### 프로필 사진 유지 (크기 조정)
About 섹션에서 프로필 이미지(`id_photo.jpg`) 유지. 단, 크기를 300px → 200px으로 줄이고 좌측 고정. 우측에 인용구 + 본문 + 2열 인포 그리드 배치. v5 목업에서 확인 및 합의.

### SectionHeader 컴포넌트 교체
기존 `SectionHeader` (label + title 2줄 구조)를 editorial 단일 라인 스타일로 **교체** (variant 추가 아님). 포트폴리오 전체에서 editorial 스타일만 사용하므로 variant prop 불필요.

새 구조:
```tsx
// 기존
<SectionHeader label="About Me" title="저를 소개합니다" />

// 신규 (SectionHeader 내부 변경, 사용 방식은 유지 가능 — label만 활용)
<SectionHeader label="About" index="01" />
// 렌더: 01 ——— ABOUT
```

props 인터페이스: `label`, `index` (섹션 번호), `as` 유지.

---

## 6. 제거되는 컴포넌트

| 컴포넌트 | 이유 |
|---|---|
| `TypewriterRole.tsx` + `.module.css` | 히어로 재구성으로 불필요 |
| `SkillCard.tsx` + `.module.css` | 새 카드 컴포넌트로 교체 |

---

## 6. 변경되는 파일 목록

### globals.css
- CSS 변수 색상 전면 교체 (v4 목업 기준: `#0d0d11` 배경, `#1a1a22` 카드, `#94949f` 본문 텍스트)

### 컴포넌트
| 파일 | 변경 내용 |
|---|---|
| `Hero.tsx` + `.module.css` | 전체 재작성 (코드블록 제거, editorial 헤드라인) |
| `About.tsx` + `.module.css` | 레이아웃 변경 (사진 200px 유지, 인용구+본문+2열 인포 그리드) |
| `Skills.tsx` + `.module.css` | 카테고리 그룹 렌더링 추가 |
| `SkillCard.tsx` + `.module.css` | 인라인 설명 카드로 재작성 |
| `ExperienceInteractive.module.css` | 탭 스타일 변경 |
| `ExperienceList.module.css` | 아이템 3열 그리드 레이아웃 |
| `ExperienceTabs.module.css` | 탭 스타일 변경 |
| `SectionHeader.tsx` + `.module.css` | editorial 스타일로 교체 (`index` prop 추가) |
| `ProjectCard.module.css` | 색상 변수 업데이트 |
| `Header.module.css` | 로고 스타일 미세 조정 |

### 삭제
- `TypewriterRole.tsx`, `TypewriterRole.module.css`

---

## 7. 변경하지 않는 것

- `_constants/` 하위 모든 데이터 파일
- `_types/` 하위 모든 타입 파일
- 라우팅 구조 (`(withHeader)/` 그룹)
- `ProjectModal` 및 관련 컴포넌트 (색상 변수만 자동 반영)
- `CtaButton`, `ScrollProgress` 컴포넌트 (색상 변수 자동 반영)
- 접근성 구현 (role, aria-*, focus trap 등)
- 메타데이터, sitemap, robots
