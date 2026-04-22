import type { Project } from "@/app/(withHeader)/projects/_types/project";

export const projects: Project[] = [
  {
    id: "project-1",
    title: "THROWNG",
    description: "위치 기반 음악 공유 서비스",
    period: "2024.04 - 2024.05",
    duration: "총 6주",
    thumbnailUrl: "/throwng.png",
    techStack: ["React", "Vite", "TypeScript", "Recoil", "SCSS"],
    type: "team",
    teamSize: "프론트엔드 3명, 백엔드 3명",
    role: "프론트엔드",
    achievements: ["SSAFY 자율 프로젝트 우수상 수상", "회원 수 211명"],
    tasks: [
      {
        title: "사용자 위치 기반 음악 조회",
        images: [
          "/projects/throwng/map-1.png",
          "/projects/throwng/map-2.png",
          "/projects/throwng/map-3.png",
        ],
        details: [
          "Geolocation API를 활용하여 초기 위치 조회와 이후 위치 변경 동작을 분리하고, useRef로 클로저 문제를 방지하여 정확한 위치 데이터가 반영되도록 구현했습니다.",
          "사용자 위치와 이전 위치를 비교하여 50m 이상 이동한 경우에만 음악 데이터와 주소를 새로 호출하도록 하여 불필요한 API 요청을 최소화했습니다.",
          "사용자 위치를 기반으로 반경 600m 내외의 음악 클릭 동작을 구분하여 처리했습니다.",
          "위치 권한 거부 시 안내 페이지로 이동하여 권한 허용 후 서비스를 이용할 수 있도록 처리했습니다.",
        ],
      },
      {
        title: "음악 상세 조회 및 노래 두기",
        images: [
          "/projects/throwng/detail-1.png",
          "/projects/throwng/detail-2.png",
        ],
        details: [
          "노래 두기 API 응답의 에러 코드를 기반으로 하루 두기 횟수 초과와 반경 100m 내 중복 두기 케이스를 각각 분기하여 사용자에게 명확한 피드백을 제공했습니다.",
          "iOS 기기에서 촬영한 HEIC/HEIF 포맷 이미지를 서버 업로드 전에 JPEG로 변환하는 로직을 구현, 크로스 플랫폼 환경에서의 이미지 업로드 호환성을 확보했습니다.",
          "사용자 업로드 이미지 로딩 실패 시 onError 이벤트를 통해 기본 이미지로 대체하여 빈 화면을 방지했습니다.",
        ],
      },
      {
        title: "Axios 인스턴스 및 인터셉터를 통한 API 관리",
        details: [
          "API 호출 시 Access Token 만료 에러가 발생하면 Refresh Token으로 Access Token을 재발급 받아 API 호출을 재시도하도록 인터셉터를 구현했습니다.",
          "Access Token 재발급 API 실패 시 저장된 사용자 정보를 삭제하고 로그인 페이지로 리다이렉트하도록 처리했습니다.",
          "axios 공통 인스턴스화로 반복되는 API 호출 코드를 정리하여 재사용성을 높였습니다.",
        ],
      },
      {
        title: "Private & Public 라우터 가드 구현",
        details: [
          "회원 전용 페이지와 공개 페이지 경로를 분리하고 PrivateRoute/PublicRoute 컴포넌트로 접근 제어 로직을 구현했습니다.",
          "PrivateRoute에서 로그인 여부 확인 후 권한 체크 API를 호출하여 권한 미달 시 별도 페이지로 리다이렉트 처리했습니다.",
          "React Router의 lazy loading을 적용하여 코드 스플리팅으로 초기 로딩 속도를 개선했습니다.",
        ],
      },
    ],
    overview: [
      {
        title: "노래 줍기",
        details: [
          "현재 위치 기준 반경 1km 이내 음악 조회",
          "현재 위치 기준 반경 600m 이내의 음악 상세 조회",
          "발견한 음악을 노래 줍기하여 내 플레이리스트에 저장",
        ],
      },
      {
        title: "노래 두기",
        details: [
          "Spotify API를 이용하여 노래 검색 후 공유할 음악 선택",
          "현재 위치에 음악·코멘트·사진을 남겨 주변 사용자와 공유",
          "내가 공유한 음악·코멘트·사진 이력 조회",
        ],
      },
      {
        title: "콘텐츠",
        details: [
          "퀴즈, 게임 등 콘텐츠 참여를 통한 사용자 유치 및 유지",
          "조건 달성 시 하루 1개 쿠폰 획득, 다양한 서비스 기능 확장에 사용",
        ],
      },
      {
        title: "갤럭시 워치",
        details: [
          "이번 주 우리 동네 인기 노래 조회",
          "플레이리스트 음악을 현재 위치에 공유 (노래 두기 연동)",
        ],
      },
    ],
    concerns: [
      {
        title: "이동 감지 최적화",
        details: [
          "사용자 위치를 실시간으로 반영하면서도, 위치가 조금만 움직여도 API를 호출하면 서버 부하와 클라이언트 성능 저하가 발생할 수 있다고 판단했습니다.",
          "단순 시간 간격(예: 5초마다 갱신)보다 실제 이동 거리 기준이 더 합리적이라고 보고, 초기 위치를 저장한 뒤 현재 위치와의 거리가 50m 이상 차이 날 때에만 음악/주소 API를 호출하도록 구현했습니다.",
        ],
      },
      {
        title: "위치 정확도 안정화",
        details: [
          "실내/지하철 등 GPS 신호 약한 환경에서 위치 정확도가 떨어져 불필요한 리렌더링이 발생할 수 있었습니다.",
          "Geolocation의 accuracy 속성을 체크하여 100m 이상일 때는 기존 데이터를 유지하고, 10m 이하일 때만 새로 업데이트하도록 구현했습니다.",
        ],
      },
      {
        title: "마커 리렌더링 최적화",
        details: [
          "위치 이동 시 주변 음악 정보를 받아오는데 기존 마커와 중복되는 데이터도 전체 리렌더링되어 지도 성능 저하가 우려되었습니다.",
          "마커 데이터를 id로 필터링 병합 후 React.memo로 마커 컴포넌트에서 변경되지 않은 props는 리렌더링 스킵하도록 구현했습니다.",
        ],
      },
    ],
    retrospect: [
      "API 응답 형태가 자주 바뀌어 수정 비용이 컸던 경험을 바탕으로, 개발 전 프론트엔드에서 필요한 데이터 구조를 먼저 정리해 백엔드와 스펙을 맞췄습니다. 사전에 요구사항을 구체화할수록 개발 중 변경이 줄어든다는 점을 체감했습니다.",
      "3차 배포까지 팀 QA와 실사용자 피드백을 반영하면서, 모든 요구를 다 수용하기보다 사용 흐름 기준으로 우선순위를 정하는 것이 서비스 개선에 더 효과적이라는 점을 배웠습니다.",
      "백엔드가 S3에 저장한 Spotify 앨범 이미지를 프론트엔드에서 직접 리사이즈하려 했으나, 변환 과정이 느려 렌더링이 지연 문제를 겪었습니다. 이미지 최적화는 CDN이나 백엔드에서 처리하는 게 더 효율적이라는 점을 깨닫고, CloudFront를 다음 프로젝트에 적용할 계획입니다.",
    ],
  },
  {
    id: "project-2",
    title: "오늘은 낚시왕",
    description: "MZ세대 초보자를 위한 낚시 입문 서비스",
    period: "2023.12 - 2024.02",
    duration: "총 6주",
    thumbnailUrl: "/fish.png",
    techStack: ["React", "Vite", "JavaScript", "Recoil", "SCSS"],
    type: "team",
    teamSize: "프론트엔드 3명, 백엔드 3명",
    role: "프론트엔드",
    achievements: ["SSAFY 공통 프로젝트 최우수상 수상"],
    tasks: [
      {
        title: "Teachable Machine을 이용해 약 50여 종의 물고기를 분류",
        details: [
          "FileReader로 이미지를 base64로 변환해 react-cropper에 주입하고, 크롭 결과 Canvas를 toDataURL()로 다시 base64로 변환했습니다.",
          "Canvas는 직렬화할 수 없어 base64로 변환해 location.state로 결과 페이지에 전달하고, img 요소로 복원해 Teachable Machine 분석 입력으로 사용했습니다.",
        ],
        images: [
          "/projects/fish/fish-1.png",
          "/projects/fish/fish-2.png",
          "/projects/fish/fish-3.png",
        ],
      },
      {
        title: "맞춤형 낚시터 찾기",
        details: [
          "지도 중심·줌 레벨·활성 마커 등을 Recoil atom으로 세분화해 관리하고, 낚시터 상세 페이지에서 돌아와도 기존 지도 상태가 그대로 유지되도록 했습니다.",
          "Geolocation API로 현재 위치를 파악해 지도 초기 중심을 설정하고, Haversine 공식으로 낚시터와의 거리를 계산해 20km 이내 결과만 필터링했습니다.",
        ],
        images: [
          "/projects/fish/fishing-1.png",
          "/projects/fish/fishing-2.png",
          "/projects/fish/fishing-3.png",
        ],
      },
      {
        title: "성능 개선",
        details: [
          "React.lazy()와 Suspense로 페이지를 lazy loading 처리해 초기 번들 크기를 최소화했습니다.",
          "마커마다 실행되는 거리 계산을 useMemo로 메모이제이션해 불필요한 재계산을 방지했습니다.",
        ],
      },
      {
        title: "PWA 적용",
        details: [
          "vite-plugin-pwa로 서비스 워커와 Web App Manifest를 빌드 시 자동 생성하고, registerType: 'autoUpdate'로 새 버전 배포 시 사용자 개입 없이 서비스 워커가 갱신되도록 설정했습니다.",
        ],
      },
    ],
    concerns: [
      {
        title: "초기 로딩 개선",
        details: [
          "SPA 특성상 모든 페이지가 하나의 번들로 묶여 배포되어, 첫 진입 시 불필요한 페이지 코드까지 로드해 초기 로딩이 느린 문제가 있었습니다.",
          "React.lazy()와 Suspense로 페이지를 동적 import 처리해 초기 번들에서 제외하고, 실제 해당 페이지에 진입할 때만 로드되도록 해결했습니다.",
        ],
      },
      {
        title: "지도 상태 보존",
        details: [
          "낚시터 상세 페이지로 이동하면 지도 컴포넌트가 언마운트되면서 중심 좌표·줌 레벨·활성 마커 상태가 초기화되는 문제가 있었습니다.",
          "Recoil atom으로 지도 상태를 전역 관리해, 페이지를 이탈해도 상태가 유지되고 돌아왔을 때 그대로 복원되도록 해결했습니다.",
        ],
      },
    ],
    retrospect: [
      "코딩·깃 컨벤션을 팀원들과 처음으로 맞춰 개발했는데, 리뷰 과정에서 스타일 충돌 없이 코드를 읽을 수 있어 협업 효율이 높아진다는 점을 체감했습니다. 규칙을 먼저 정하고 시작하는 것이 팀 단위 개발의 기본이라는 것을 배웠습니다.",
      "카카오 로그인 구현 중 프론트와 백이 서로 다른 API_KEY를 사용해 에러가 발생했습니다. 외부 API 연동 시 백엔드와 사전에 키·설정을 맞추는 소통이 필수라는 점을 체감했습니다.",
      "이미지 전달 방식으로 FileReader를 통한 base64 변환을 선택했는데, URL.createObjectURL()로 blob URL을 생성하는 방식도 고려해볼 수 있었습니다. 당시에는 base64가 익숙해서 선택했지만, blob URL은 메모리에 직접 참조해 변환 없이 사용할 수 있어 더 효율적일 수 있다는 점을 이후에 알게 됐습니다.",
    ],
    overview: [
      {
        title: "어종 인식",
        details: [
          "구글의 Teachable Machine으로 약 50여 종의 물고기를 분류",
          "카메라 촬영 또는 앨범에서 이미지를 선택해 분석",
          "분석 전 이미지 크롭·편집으로 원하는 부분만 선택 가능",
        ],
      },
      {
        title: "라이브 캐스팅",
        details: [
          "OpenVidu 기반 1:N 라이브 스트리밍으로 낚시 현장을 실시간 공유",
          "원하는 라이브 방에 입장해 낚시 현장을 실시간 감상하고 채팅으로 소통 가능",
        ],
      },
      {
        title: "아쿠아리움",
        details: [
          "Three.js를 사용하여 생생하게 움직이는 물고기를 볼 수 있는 아쿠아리움 구현",
          "도감에 등록된 어종을 입체적으로 감상",
        ],
      },
      {
        title: "어종 도감",
        details: [
          "크기, 학명, 먹이, 서식지 등 어종별 상세 정보 제공",
          "어종 인식 결과와 연동되어 분석 직후 해당 어종 정보 바로 조회",
        ],
      },
      {
        title: "맞춤형 낚시터 찾기",
        details: [
          "해시태그·지역·장소 검색으로 원하는 조건의 낚시터 탐색",
          "지도 중심 기준 반경 20km 이내 낚시터 조회",
          "날씨, 주요 어종 등 다양한 낚시터 상세 정보 제공",
        ],
      },
    ],
  },
  {
    id: "project-3",
    title: "Portfolio",
    githubUrl: "https://github.com/wjdxodbs/portfolio",
    liveUrl: "https://wjdxodbs-portfolio.vercel.app/",
    description: "개인 포트폴리오 웹사이트 (현재 사이트)",
    period: "2025.11 - 현재",
    duration: "지속 개선 중",
    thumbnailUrl: "/portfolio.png",
    techStack: ["Next.js", "TypeScript", "CSS"],
    type: "personal",
    teamSize: "프론트엔드 1명",
    role: "프론트엔드",
    achievements: [],
    overview: [
      {
        title: "페이지 구성",
        details: [
          "홈(/), 프로젝트(/projects), 연락처(/contact) 페이지 분리를 통한 목적별 탐색 구조 구성",
          "홈의 Hero, About, Skills, Experience 섹션을 통한 개발자 정보·경험의 단계적 확인 흐름 제공",
        ],
      },
      {
        title: "프로젝트 탐색",
        details: [
          "프로젝트 페이지(/projects)에서 카드 그리드 나열을 통해 작업 목록을 한눈에 파악할 수 있도록 구성",
          "상세 화면에서 기술 스택, 기간, 역할, 주요 성과와 개요/담당업무/고민했던 점/회고를 함께 확인할 수 있도록 구성",
        ],
      },
      {
        title: "연락처 정보",
        details: [
          "연락처 페이지(/contact)에서 이메일·전화번호·소셜 링크를 한 화면에서 확인할 수 있도록 구성",
          "이메일/전화 직접 연결과 복사·외부 링크 동선으로 다양한 연락 방식 지원",
        ],
      },
    ],
    tasks: [
      {
        title: "검색 노출 및 공유 설정",
        details: [
          "Next.js App Router의 sitemap.ts·robots.ts로 빌드 시 sitemap과 robots.txt를 자동 생성하고, Google Search Console 검증 파일을 추가해 크롤링·인덱싱 기반을 갖췄습니다.",
          "Next.js Metadata API로 페이지별 title·description·canonical을 정의하고, Open Graph·Twitter Card로 소셜 공유 미리보기를 구성했습니다.",
        ],
      },
      {
        title: "프로젝트 모달 구현",
        details: [
          "next/dynamic으로 초기 번들에서 제외하고, createPortal로 document.body에 렌더링해 z-index 충돌 없이 전체 화면을 덮도록 구현했습니다.",
          "모달 닫기 시 exit 애니메이션이 완료된 뒤 언마운트되도록 애니메이션 진행 상태를 별도로 관리했으며, JS 타이머와 CSS 트랜지션 지속 시간을 동일하게 맞춰 타이밍 불일치를 방지했습니다.",
        ],
      },
      {
        title: "접근성 구현",
        details: [
          '모달에 role="dialog"와 aria-modal을 적용해 키보드와 보조 기술로 모달을 탐색할 수 있도록 했습니다.',
          "모달 내 포커스 트랩을 구현해 Tab/Shift+Tab이 모달 안에서만 순환하고, Escape로 닫힌 뒤 포커스가 열기 버튼으로 복귀하도록 처리했습니다.",
        ],
      },
      {
        title: "스크롤 애니메이션",
        details: [
          "IntersectionObserver 기반 AnimateOnScroll 컴포넌트를 구현해, 뷰포트 진입 시 fadeUp 전환이 트리거되도록 했습니다.",
          "Server Component를 Client Component로 전환하지 않고, 클라이언트 로직만 담은 AnimateOnScroll 래퍼로 감싸 서버 컴포넌트 구조를 유지했습니다.",
          "About·Skills·Experience·Contact 등 각 섹션에 stagger delay를 적용해 순차적인 등장 흐름을 구성했습니다.",
        ],
      },
    ],
    concerns: [
      {
        title: "모달 구현 복잡도",
        details: [
          "모달 하나에 포커스 트랩·스크롤 잠금·exit 애니메이션 등 고려할 요소가 많아 각각이 서로 간섭하지 않도록 구현 순서를 신경 써야 했습니다.",
          "특히 닫기 애니메이션 시간과 실제 언마운트 타이밍을 일치시키지 않으면 모달이 어색하게 사라지는 문제가 있어, JS timeout 값과 CSS transition 시간을 같은 변수로 관리하도록 구성했습니다.",
        ],
      },
      {
        title: "CSS Modules의 @keyframes 스코프 문제",
        details: [
          "opacity: 0으로 초기 상태를 설정한 요소에 globals.css의 애니메이션을 참조했는데, 해당 요소들이 화면에 나타나지 않는 문제가 발생했습니다.",
          "CSS Modules는 @keyframes 이름을 로컬 스코프로 처리하기 때문에, 다른 파일에 정의된 keyframes를 참조할 수 없었습니다. 이를 해결하기 위해 사용하는 각 .module.css 파일 내에 @keyframes를 직접 정의하는 방식으로 수정했습니다.",
        ],
      },
      {
        title: "Server Component에서 스크롤 애니메이션 적용",
        details: [
          "IntersectionObserver를 직접 사용하려면 해당 컴포넌트를 Client Component로 전환해야 했는데, 기존 섹션 컴포넌트들의 서버 컴포넌트 구조를 바꾸고 싶지 않았습니다.",
          "클라이언트 로직만 담은 AnimateOnScroll 래퍼 컴포넌트를 별도로 만들어, 서버 컴포넌트 내부에서 해당 래퍼로 감싸는 방식으로 서버 컴포넌트 구조를 유지하면서 스크롤 애니메이션을 적용했습니다.",
        ],
      },
    ],
    retrospect: [
      "모달 하나를 구현하면서 포커스 트랩·exit 애니메이션·스크롤 잠금·언마운트 타이밍까지 고려할 요소가 예상보다 많았습니다. 각 요소가 서로 간섭하지 않도록 구현 순서를 신경 쓰는 경험이 복잡한 컴포넌트 설계에 대한 시야를 넓혀줬습니다.",
      "SEO와 접근성을 나중에 적용하려 하자, 기존 마크업 구조를 수정해야 하는 경우가 생겨 예상보다 작업 범위가 넓어졌습니다. 기본기를 개발 초반에 함께 고려할수록 배포 이후 수정 비용이 줄어든다는 점을 체감했습니다.",
    ],
  },
  {
    id: "project-4",
    title: "CINEMA",
    githubUrl: "https://github.com/wjdxodbs/cinema",
    liveUrl: "https://wjdxodbs-cinema.vercel.app/",
    description: "TMDB API 기반 영화/TV 탐색 서비스",
    period: "2026.02 - 2026.02",
    duration: "총 2주",
    thumbnailUrl: "/cinema.png",
    techStack: [
      "Next.js",
      "TypeScript",
      "TanStack Query",
      "Zustand",
      "Tailwind CSS",
      "shadcn/ui",
    ],
    type: "personal",
    teamSize: "프론트엔드 1명",
    role: "프론트엔드",
    achievements: [],
    overview: [
      {
        title: "콘텐츠 탐색",
        details: [
          "이번 주 트렌딩 영화/TV를 홈에서 빠르게 탐색할 수 있도록 구성",
          "영화/TV 목록에서 장르 필터와 무한 스크롤을 통해 연속 탐색 경험 제공",
        ],
      },
      {
        title: "상세 정보 제공",
        details: [
          "영화/TV 상세 페이지에서 출연진, 예고편, 유사 콘텐츠를 함께 제공",
          "검색 결과에서 영화/TV를 통합 조회해 콘텐츠 발견 동선을 단순화",
        ],
      },
      {
        title: "찜 목록 관리",
        details: [
          "찜 목록 추가/삭제 기능을 제공",
          "새로고침 이후에도 사용자 선택 상태가 유지되도록 구성",
        ],
      },
    ],
    tasks: [
      {
        title: "TMDB API 키 보안 처리",
        details: [
          "TMDB API 키를 클라이언트에 노출하지 않기 위해 Route Handler를 통해 서버에서 프록시 호출하도록 구성했습니다.",
          "API 키는 서버 전용(server-only) 모듈에서만 참조하도록 분리해, 클라이언트 접근 가능성을 차단했습니다.",
        ],
      },
      {
        title: "데이터 패칭 및 캐시 최적화",
        details: [
          "홈/목록 페이지에서 서버 프리패치와 클라이언트 하이드레이션을 적용해 초기 로딩 지연을 줄였습니다.",
          "Next.js fetch 캐시와 TanStack Query 캐시 정책을 조합해 불필요한 API 호출을 줄였습니다.",
        ],
      },
      {
        title: "무한 스크롤 목록 로딩 구현",
        details: [
          "영화/TV 목록 데이터에 TanStack Query의 무한 쿼리 패턴을 적용해 페이지 단위 응답을 누적 렌더링하도록 구성했습니다.",
          "Intersection Observer로 하단 진입 시점을 감지해 다음 페이지 요청을 트리거하고, 별도 클릭 없이 목록을 연속 탐색할 수 있도록 구성했습니다.",
        ],
      },
      {
        title: "shadcn/ui 기반 컴포넌트 구조화",
        details: [
          "shadcn/ui 컴포넌트를 요구사항에 맞게 조합해 UI 일관성과 재사용성을 높였습니다.",
          "Tailwind의 mobile-first 기준으로 기본 스타일을 설계하고 브레이크포인트에서 점진 확장해 반응형 레이아웃을 구성했습니다.",
        ],
      },
    ],
    concerns: [
      {
        title: "보안과 개발 편의성의 균형",
        details: [
          "TMDB API를 클라이언트에서 직접 호출하면 구현 속도는 빠르지만, API 키 노출로 인한 오남용 위험이 있어 안정성이 떨어질 수 있었습니다.",
          "초기 개발 비용이 늘더라도 Route Handler 중심 구조를 선택해 API 키 노출 가능성을 줄이고, 요청 흐름을 서버에서 통제할 수 있도록 설계했습니다.",
        ],
      },
      {
        title: "SSR/클라이언트 데이터 패칭 경계",
        details: [
          "모든 페이지를 클라이언트 패칭으로 처리하면 초기 로딩이 느려지고, 모든 페이지를 서버 렌더링으로 고정하면 상호작용 유연성이 낮아질 수 있었습니다.",
          "페이지 성격에 맞춰 홈·목록은 서버 프리패치/하이드레이션을 적용하고, 검색·찜 목록은 클라이언트 중심으로 분리해 렌더링 전략의 균형을 맞췄습니다.",
        ],
      },
    ],
    retrospect: [
      "서버 프리패치와 클라이언트 하이드레이션을 함께 적용할 때는 Query Key와 캐시 복원 범위를 먼저 맞춰야 중복 요청 없이 일관된 데이터 흐름을 유지할 수 있다는 점을 배웠습니다.",
      "shadcn/ui를 처음 적용하며 화면별 커스터마이징을 하다 보니 스타일 편차가 생겼고, 이를 줄이기 위해 공통 컴포넌트 조합 기준을 정리했습니다. 이 과정을 통해 초기 기준 정리가 이후 UI 확장과 일관성 유지에 중요한 역할을 한다는 점을 배웠습니다.",
    ],
  },
  {
    id: "project-5",
    title: "Fillit",
    githubUrl: "https://github.com/wjdxodbs/fillit",
    description:
      "GitHub 잔디 형식으로 연도 진행률과 목표 달성률을 시각화하는 모바일 앱",
    period: "2026.02 - 현재",
    duration: "지속 개선 중",
    thumbnailUrl: "/fillit.png",
    techStack: ["React Native", "Expo", "TypeScript", "Zustand"],
    type: "personal",
    teamSize: "개인 프로젝트",
    role: "프론트엔드",
    achievements: [],
    overview: [
      {
        title: "연도 잔디 그리드",
        details: [
          "1월 1일부터 오늘까지의 날짜를 GitHub 잔디 형식의 그리드로 시각화",
          "연도 전체 대비 현재 날짜의 진행률을 퍼센트로 표시",
        ],
      },
      {
        title: "목표일 관리",
        details: [
          "제목·시작일·목표일로 목표를 등록·수정·삭제 및 상세 조회",
          "목표 기간에 해당하는 잔디 그리드를 별도로 시각화하여 진행 상황 확인",
        ],
      },
      {
        title: "Android 홈 화면 위젯",
        details: [
          "현재 연도 진행률을 Android 홈 화면 위젯으로 제공",
          "자정(KST) 기준으로 위젯이 자동 갱신되어 항상 최신 진행률 표시",
        ],
      },
      {
        title: "다크 테마",
        details: ["시스템 설정에 따라 다크/라이트 테마를 자동 적용"],
      },
    ],
    tasks: [
      {
        title: "연도 잔디 그리드 구현",
        images: ["/projects/fillit/main-1.jpg"],
        details: [
          "자정 이후 화면 재진입 시 오늘 날짜를 갱신해 항상 정확한 진행률이 표시되도록 했습니다.",
          "윤년 여부에 따라 365/366일을 분기 처리하고, useMemo와 React.memo로 불필요한 재렌더링을 방지했습니다.",
        ],
      },
      {
        title: "목표일 관리 구현",
        images: [
          "/projects/fillit/objective-1.jpg",
          "/projects/fillit/objective-2.jpg",
          "/projects/fillit/objective-3.jpg",
        ],
        details: [
          "AsyncStorage로 목표 CRUD를 구현하고, useRef로 콜백 내 stale closure를 방지해 항상 최신 데이터를 참조하도록 했습니다.",
          "기준일·목표일 유효성 검사로 잘못된 날짜 입력을 방지하고, 목표 기간을 잔디 그리드에 별도 시각화했습니다.",
          "expo-notifications로 목표 등록·수정 시 알림을 자동 등록하고, 삭제 시 취소했습니다.",
        ],
      },
      {
        title: "Android 홈 화면 위젯 구현",
        images: ["/projects/fillit/widget-1.jpg"],
        details: [
          "react-native-android-widget으로 연도 모드·목표 모드 두 가지 위젯을 구현했습니다.",
          "자정(KST) 자동 갱신을 Kotlin BroadcastReceiver와 AlarmManager로 처리하고, 재부팅 후에도 알람이 복원되도록 했습니다.",
          "딥링크 스킴으로 위젯 클릭 시 앱 내 해당 화면으로 이동하고, 목표 삭제 시 해당 위젯을 자동으로 연도 모드로 전환했습니다.",
        ],
      },
      {
        title: "테마 시스템 구현",
        images: [
          "/projects/fillit/theme-1.jpg",
          "/projects/fillit/theme-2.jpg",
          "/projects/fillit/theme-3.jpg",
        ],
        details: [
          "Zustand persist 미들웨어와 AsyncStorage를 조합해 light·dark·system 세 가지 테마 모드를 전역 관리하고 선택값을 유지했습니다.",
          "system 모드에서는 useColorScheme으로 OS 설정을 읽어 자동 적용하고, useTheme 훅으로 색상 토큰을 컴포넌트에 전달했습니다.",
        ],
      },
    ],
    concerns: [
      {
        title: "위젯 자정 자동 갱신",
        details: [
          "React Native에서 앱이 백그라운드 상태일 때 JS 코드 실행에 제약이 있어, 자정에 위젯을 자동 갱신하는 로직을 구현하기 어려웠습니다.",
          "Kotlin BroadcastReceiver와 AlarmManager로 자정(KST) 알람을 등록하고, BOOT_COMPLETED 이벤트를 수신해 재부팅 후에도 알람이 복원되도록 해결했습니다.",
        ],
      },
      {
        title: "AsyncStorage 콜백의 stale closure",
        details: [
          "AsyncStorage 기반 CRUD 콜백 내부에서 오래된 state를 참조하는 stale closure 문제가 발생해, 목표 삭제·수정 후 목록이 올바르게 반영되지 않았습니다.",
          "state와 동기화된 useRef로 콜백에서 항상 최신 데이터를 참조하도록 수정해 해결했습니다.",
        ],
      },
      {
        title: "Expo 환경에서 native Android 모듈 통합",
        details: [
          "react-native-android-widget은 AndroidManifest 수정 등 native 설정이 필요한데, Expo managed workflow에서는 이를 직접 편집할 수 없었습니다.",
          "Expo config plugin을 직접 작성해 빌드 시 native 설정이 자동으로 주입되도록 해결했습니다.",
        ],
      },
    ],
    retrospect: [
      "처음으로 React Native로 모바일 앱을 개발하며 웹과 다른 빌드 환경과 네이티브 모듈 통합 방식을 경험했습니다. JS 레이어만으로 해결할 수 없는 문제에서 플랫폼에 맞는 도구를 선택하는 것이 중요하다는 점을 배웠습니다.",
      "네이티브 설정을 수동으로 관리하면 환경이 달라질 때 누락이 생기기 쉽다는 것을 느꼈습니다. config plugin으로 빌드 시 자동 주입하면서, 빌드 환경의 재현성을 코드로 보장하는 것이 더 안정적이라는 점을 배웠습니다.",
      "직접 매일 사용하는 앱이다 보니 실사용 중 발견한 불편함을 바로 개선할 수 있었습니다. 사용자 입장에서 기능을 바라보는 시각이 설계 결정에 도움이 되었습니다.",
    ],
  },
  {
    id: "project-6",
    title: "Craftkit",
    githubUrl: "https://github.com/wjdxodbs/craftkit",
    liveUrl: "https://wjdxodbs-craftkit.vercel.app/",
    description: "가입 없이 브라우저에서 바로 쓰는 개발자용 웹 도구 모음",
    period: "2026.03 - 현재",
    duration: "지속 개선 중",
    thumbnailUrl: "/craftkit.png",
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", "shadcn/ui"],
    type: "personal",
    teamSize: "개인 프로젝트",
    role: "프론트엔드",
    achievements: [],
    overview: [
      {
        title: "Favicon 생성기",
        details: [
          "업로드한 이미지를 favicon.ico, Apple Touch Icon, Android 아이콘으로 변환",
          "manifest.json과 함께 ZIP으로 묶어 한 번에 다운로드 가능",
        ],
      },
      {
        title: "OG 이미지 생성기",
        details: [
          "배경색, 로고, 제목, 부제목을 자유롭게 조합해 1200×630 PNG 생성",
          "SNS 공유 미리보기 규격에 맞춘 소셜 카드 이미지를 즉시 다운로드 가능",
        ],
      },
      {
        title: "이미지 변환 · 리사이저",
        details: [
          "PNG, JPEG, WebP 포맷 변환 및 품질 조절 후 다운로드",
          "원하는 너비·높이를 지정해 리사이즈하여 다운로드",
        ],
      },
      {
        title: "이미지 크로퍼",
        details: [
          "드래그로 영역을 선택해 이미지를 자르고 PNG·JPG·WebP 포맷으로 다운로드",
          "크롭 좌표와 scale factor를 적용해 원본 해상도 기준으로 정확하게 잘라냄",
        ],
      },
      {
        title: "색상 포맷 변환기",
        details: [
          "HEX, RGB, HSL, OKLCH 입력 시 나머지 네 가지 형식으로 동시 변환",
          "정규식 기반 포맷 자동 감지로 별도 선택 없이 입력값만으로 변환 가능",
        ],
      },
      {
        title: "PDF 변환기",
        details: [
          "이미지(PNG·JPEG·WebP)를 묶어 단일 PDF 파일로 생성",
          "PDF의 각 페이지를 이미지로 변환해 개별 파일로 다운로드",
        ],
      },
      {
        title: "PDF 암호화",
        details: [
          "PDF에 비밀번호를 설정하거나 이미 걸린 암호를 해제",
          "클라이언트 사이드에서만 처리해 원본 파일이 서버로 전송되지 않음",
        ],
      },
    ],
    tasks: [
      {
        title: "파비콘 패키지 생성 구현",
        details: [
          "ICO 파일을 외부 라이브러리 없이 직접 바이너리로 인코딩했습니다. ICONDIR 헤더(6바이트)와 이미지별 디렉토리 엔트리(16바이트)를 직접 조립하고, 각 PNG 데이터의 오프셋을 계산해 순서대로 기록하는 방식으로 구현했습니다.",
          "16·32·48px PNG를 Promise.all()로 병렬 생성한 뒤 ICO로 묶고, Apple Touch Icon(180px)·Android 아이콘(192·512px)·manifest.json과 함께 fflate로 ZIP 압축해 Uint8Array로 생성했습니다.",
          "URL.createObjectURL()로 다운로드 링크를 동적으로 생성하고 클릭 후 즉시 revokeObjectURL()로 해제해 메모리 누수를 방지했습니다.",
        ],
      },
      {
        title: "OG 이미지 Canvas 렌더링 구현",
        details: [
          "배경색·로고·제목(64px bold)·부제목(32px)을 1200×630 캔버스에 합성하고, Inter·Serif·Mono 세 가지 폰트를 선택할 수 있도록 구현했습니다.",
          "배경색의 sRGB 상대 휘도를 계산해 밝은 배경이면 어두운 텍스트, 어두운 배경이면 밝은 텍스트를 자동으로 적용해 가독성을 확보했습니다.",
          "config 상태와 로고 이미지를 useEffect 의존성으로 등록해, 옵션이 변경될 때마다 캔버스를 자동으로 다시 그려 실시간 미리보기가 반영되도록 했습니다.",
        ],
      },
      {
        title: "이미지 크로퍼 구현",
        details: [
          "마우스와 터치를 별도로 처리하지 않고 포인터 이벤트로 통일해 4개 모서리 핸들과 중앙 이동을 구현했고, 크롭 영역 바깥을 반투명 오버레이로 덮어 드래그할 때마다 Canvas를 다시 그려 실시간으로 반영했습니다.",
          "CSS로 축소 표시된 이미지와 실제 원본 해상도가 달라 표시 좌표를 그대로 쓰면 잘리는 위치가 어긋나기 때문에, 표시 크기와 자연 해상도의 비율을 scale로 계산해 원본 픽셀 기준으로 잘라내도록 했습니다.",
        ],
      },
      {
        title: "색상 포맷 변환기 구현",
        details: [
          "어떤 포맷으로 입력해도 단일 변환 경로로 처리할 수 있도록 RGB를 중간 표현으로 삼아, 정규식으로 입력 포맷을 자동 감지한 뒤 각 파서로 RGB로 정규화하고 네 가지 포맷을 동시에 반환하는 구조로 구현했습니다.",
          "OKLCH는 sRGB와 색상 공간이 달라 별도 계산이 필요했습니다. sRGB 감마 디코딩 후 LMS 행렬 → 큐브루트로 OKLab을 구하고 극좌표로 변환했으며, 역방향은 극좌표 → 직교 좌표 → 역행렬 → 감마 인코딩·clamp 순으로 처리했습니다.",
        ],
      },
      {
        title: "PDF 변환 구현",
        details: [
          "pdfjs-dist는 Worker를 별도로 초기화해야 해서, dynamic import로 모듈을 지연 로딩한 뒤 workerSrc를 설정했습니다.",
          "이미지 → PDF 변환 시 pdf-lib이 PNG/JPEG만 직접 지원하기 때문에, 모든 포맷을 Canvas를 거쳐 PNG로 정규화한 뒤 임베딩했습니다.",
          "각 이미지의 원본 크기 그대로 페이지 크기를 설정해 비율 왜곡 없이 PDF를 생성했습니다.",
        ],
      },
    ],
    concerns: [
      {
        title: "이미지 처리 방식 선택",
        details: [
          "서버에서 처리하면 구현이 단순하지만 사용자 이미지가 외부로 전송된다는 부담이 있어, 브라우저에서만 처리하는 방향을 선택했습니다.",
          "Canvas API와 fflate만으로 변환·리사이즈·ZIP 패키징까지 클라이언트 내에서 완결할 수 있어 서버 없이도 충분하다고 판단했습니다.",
        ],
      },
      {
        title: "포맷별 품질 옵션 노출 기준",
        details: [
          "PNG는 무손실 포맷이라 quality 슬라이더가 의미 없는데, 모든 포맷에 동일하게 노출하면 사용자에게 혼란을 줄 수 있었습니다.",
          "JPG·WebP 등 손실 포맷에서만 슬라이더를 표시하고 PNG 선택 시 숨기도록 조건부 렌더링을 적용했습니다.",
        ],
      },
      {
        title: "PDF 암호화 라이브러리 선택",
        details: [
          "PDF 처리에 pdf-lib을 먼저 검토했으나 암호화 기능이 공식 지원되지 않아 fork 버전인 @cantoo/pdf-lib을 도입했습니다.",
          "두 패키지를 동시에 쓰는 대신 @cantoo/pdf-lib 하나로 통일하는 방향도 고려했지만, API 안정성과 유지보수 이력을 고려해 PDF 생성은 원본, 암호화만 fork로 분리해 관리했습니다.",
        ],
      },
    ],
    retrospect: [
      "FSD 아키텍처를 적용하면서, 레이어 간 경계를 명확히 지키는 것이 단순한 규칙 이상의 의미가 있다는 점을 다시 확인했습니다. 초기에 기준을 잡아두니 기능이 추가될 때마다 어디에 코드를 놓을지 고민하는 시간이 줄었습니다.",
      "서버 없이 클라이언트 단에서 이미지 처리를 완결하는 구조를 설계하면서, Canvas API와 Blob 기반 파일 처리에 대한 이해가 깊어졌습니다. 브라우저가 제공하는 API만으로도 충분히 유의미한 도구를 만들 수 있다는 점을 배웠습니다.",
      "이전 프로젝트에서 base64 변환 방식의 한계를 느끼고 이번에 URL.createObjectURL()을 적용해봤는데, 변환 없이 Blob을 직접 다운로드 링크로 연결할 수 있어 더 간결했습니다.",
      "OKLCH 변환을 직접 구현하면서 색상 공간의 동작 원리를 코드 수준에서 이해하게 됐습니다. CSS에서 색상을 다루는 것과 실제로 색상 공간 간 변환이 어떻게 이루어지는지는 다른 문제였고, 감마 인코딩·행렬 변환·극좌표 변환을 직접 다루면서 그 차이를 체감했습니다.",
    ],
  },
];
