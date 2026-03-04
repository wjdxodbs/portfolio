import type { Project } from "@/app/projects/_types/project";

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
      "필요한 API 호출에 대한 응답 값을 담당 백엔드 개발자와 스펙을 정리하여 개발 효율성을 향상시켰습니다.",
      "배포 전 팀원들과 QA 기간을 운영하며 기능 검수와 에러 수정 과정을 거쳤고, 3차 배포까지 사용자 피드백을 반영하며 서비스를 지속 개선했습니다.",
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
    thumbnailBg: "#ffffff",
    techStack: ["React", "Vite", "JavaScript", "Recoil", "SCSS"],
    type: "team",
    teamSize: "프론트엔드 3명, 백엔드 3명",
    role: "프론트엔드",
    achievements: ["SSAFY 공통 프로젝트 최우수상 수상"],
    tasks: [
      {
        title: "Teachable Machine을 이용해 약 50여 종의 물고기를 분류",
        details: [
          'input type="file"에서 이미지만을 받아올 수 있도록 accept 속성에 image/*를 추가하여 모든 이미지 파일을 적용할 수 있도록 설정했습니다.',
          "자르기 버튼을 클릭 시 useNavigate의 replace: true 옵션을 추가하여 브라우저 히스토리에 편집 페이지와 분석 완료 페이지를 교체하도록 설정했습니다. 이를 통해 분석 완료 페이지에서 뒤로 가기를 하면 메인 페이지로 이동하도록 했습니다.",
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
          "Recoil의 Atom을 사용하여 낚시터 상세 조회 페이지에서 뒤로가기를 진행했을 경우 기존의 지도 상태가 유지되도록 구현했습니다.",
          "navigator.geolocation.getCurrentPosition을 사용하여 사용자의 위치 기준으로 반경 10km 이내의 낚시터를 조회할 수 있도록 했습니다.",
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
          "Code Splitting을 통해 번들 크기를 최소화하고, 애플리케이션 로딩 속도를 향상시켰습니다.",
        ],
      },
      {
        title: "Axios instance 생성",
        details: [
          "axios.create를 사용하여 반복되는 API 호출 코드를 인스턴스화하여 가독성과 재사용성을 높였습니다.",
        ],
      },
    ],
    concerns: [
      {
        title: "초기 로딩 개선",
        details: [
          "리액트와 같은 SPA로 개발된 프로젝트는 빌드 후 배포할 때 하나의 JS 파일로 번들링 됩니다. 이렇게 번들링 된 페이지에 진입하면 초기 로딩 시 모든 페이지에 대한 정보를 불러오기 때문에 로딩 속도가 느려지는 문제가 있었습니다.",
          "이를 해결하기 위해 Code Splitting을 확인할 수 있었습니다. Code Splitting을 사용하면 하나의 번들 파일을 여러 개로 나누어, 실제 로드될 화면에 필요한 번들 파일만 불러오고 나머지 파일은 호출하지 않고 지연시켜 로딩 속도를 개선할 수 있었습니다.",
        ],
      },
      {
        title: "API 모듈화",
        details: [
          "기존에는 API를 호출할 때마다 기본 URL, 헤더 등을 반복해서 설정해야 했습니다. 이럴 경우 공통 설정이나 로직을 변경할 때, 이를 사용하는 모든 부분을 찾아서 수정해야 하는 불편함이 있었습니다.",
          "이를 해결하기 위해 axios.create 기능을 확인할 수 있었는데, 이 기능을 사용하면 기본 URL, 헤더 등의 설정을 한 번만 정의하고 모든 API 호출에서 재사용할 수 있어 가독성과 유지 보수성을 향상시킬 수 있었습니다.",
        ],
      },
    ],
    retrospect: [
      "첫 팀 프로젝트로, 팀원들과 코딩 컨벤션, 깃 컨벤션 등을 정하고 함께 사용함으로써 코드의 일관성, 유지 보수성, 협업 효율성 등을 향상시킬 수 있어서 좋았습니다.",
      "React 관련 학습을 진행했을 때는 컴포넌트 간 데이터 전달을 위해 주로 props를 사용했지만, 이는 불필요한 렌더링을 많이 발생시킬 수 있다는 것을 확인할 수 있었습니다. 불필요한 렌더링을 줄이기 위해 처음으로 상태 관리(Recoil)를 학습하고 적용해 본 경험이 좋았습니다.",
      "백엔드 개발자와 협업을 처음으로 경험했는데, 소통이 부족했던 점이 아쉬웠습니다. 예를 들어, 카카오 로그인을 구현할 때 프론트엔드와 백엔드가 동일한 API_KEY를 사용해야 했지만, 소통의 부재로 각각 다른 API_KEY를 사용하여 에러가 발생했고, 이를 해결하는 데 불필요한 시간을 소모했습니다. 이 점을 개선할 필요가 있음을 느꼈습니다.",
    ],
    overview: [
      {
        title: "어종 인식",
        details: [
          "구글의 Teachable Machine을 이용해 약 50여 종의 물고기를 분류",
        ],
      },
      {
        title: "라이브 캐스팅",
        details: [
          "OpenVidu를 사용하여 기존 N:M의 화상 통화에서 1:N 형식의 1인 라이브 구현",
        ],
      },
      {
        title: "아쿠아리움",
        details: [
          "Three.js를 사용하여 생생하게 움직이는 물고기를 볼 수 있는 아쿠아리움 구현",
        ],
      },
      {
        title: "어종 도감",
        details: [
          "어종의 크기, 학명, 먹이, 서식지 등 다양한 정보를 사용자에게 제공",
        ],
      },
      {
        title: "맞춤형 낚시터 찾기",
        details: [
          "해시태그와 지역 검색을 이용하여 사용자 맞춤형 낚시터 검색",
          "상세 조회한 낚시터의 날씨, 주요 어종 등 다양한 낚시터 정보를 사용자에게 제공",
        ],
      },
    ],
  },
  {
    id: "project-3",
    title: "Portfolio",
    githubUrl: "https://github.com/wjdxodbs/portfolio",
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
        title: "프로젝트 모달 전환",
        details: [
          "클릭한 카드의 위치/크기를 기준으로 모달이 펼쳐지는 전환 애니메이션을 구현해 맥락 전환의 이질감을 줄였습니다.",
          "ESC, 오버레이 클릭, 닫기 버튼 등 다양한 닫기 동작을 지원하고 스크롤 잠금 처리로 모달 사용성을 높였습니다.",
        ],
      },
      {
        title: "모바일 반응형 대응",
        details: [
          "페이지 전반에 공통 브레이크포인트 기준을 정리해 화면 크기 변화에 일관되게 대응했습니다.",
          "모바일 실기기 기준으로 주소창 높이 변화와 가로 스크롤 이슈를 점검·보완해 화면 안정성을 확보했습니다.",
        ],
      },
      {
        title: "검색 노출 및 공유 설정",
        details: [
          "Google Search Console 검증 파일 추가, sitemap/robots 설정으로 크롤링 가능 상태를 정비했습니다.",
          "페이지 메타데이터를 정리해 검색 결과 제목/설명 및 공유 미리보기의 일관성을 개선했습니다.",
        ],
      },
    ],
    concerns: [
      {
        title: "검색 노출 우선순위 설정",
        details: [
          "구글 검색 노출을 위해 어떤 요소부터 우선 적용해야 할지 고민했습니다.",
          "초기에는 검색 등록·사이트맵·로봇 설정으로 인덱싱 기반을 먼저 갖추고, 이후 메타데이터·시맨틱 구조·접근성 개선을 순차 적용했습니다.",
        ],
      },
    ],
    retrospect: [
      "포트폴리오에서 기능 추가보다 정보 배치와 페이지 구조를 먼저 정리해 구현 과정의 혼선을 줄일 수 있었습니다.",
      "SEO, 접근성, 반응형 같은 기본기를 초기에 함께 챙길수록 배포 이후 수정 비용이 줄어든다는 점을 확인했습니다.",
    ],
  },
  {
    id: "project-4",
    title: "CINEMA",
    githubUrl: "https://github.com/wjdxodbs/cinema",
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
];
