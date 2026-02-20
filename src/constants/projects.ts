import type { Project } from "@/types/project";

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
          "Recoil의 Selector를 사용하여 음악 마커가 활성화될 때 변경된 부분만 재렌더링되도록 하여 불필요한 렌더링을 줄였습니다.",
          "navigator.geolocation.watchPosition을 사용하여 사용자의 위치를 실시간으로 표시했습니다. 초기 위치 조회와 이후 위치 조회 동작을 구분하여 각각 다른 콜백 함수가 실행되도록 구현했습니다.",
          "사용자 위치와 이전 위치를 비교하여 50m 이상 이동 시 음악 데이터와 주소를 호출하고 이전 위치를 업데이트했습니다.",
          "사용자 위치를 기반으로 반경 600m 내외의 음악 클릭 동작을 구분하여 처리했습니다.",
        ],
      },
      {
        title: "반경 600m 이내 음악 상세 조회",
        images: [
          "/projects/throwng/detail-1.png",
          "/projects/throwng/detail-2.png",
        ],
        details: [
          "미리 듣기 기능과 앨범 이미지 위의 그라데이션 효과는 노래 두기 페이지에서도 재사용되므로, 컴포넌트로 분리하여 재사용성을 향상시켰습니다.",
          "이미지 로딩 에러가 발생했을 때 onError 이벤트를 통해 대체 이미지로 앨범 커버 이미지가 표시되도록 구현했습니다.",
        ],
      },
      {
        title: "사용자 Access Token 재발급",
        details: [
          "API 호출 시 Access Token이 만료되어 에러가 발생하면, Refresh Token을 이용해 Access Token을 재발급 받아 API 호출을 재시도하도록 했습니다.",
          "Access Token 재발급 API 호출 시 에러가 발생하면, 저장된 사용자 정보를 삭제하고 로그인 페이지로 이동하도록 했습니다.",
        ],
      },
      {
        title: "라우터 분리",
        details: [
          "로그인 페이지 등 비회원이 접속할 수 있는 페이지는 사용자 Access Token이 있을 경우 홈페이지로 이동하도록 했습니다.",
          "홈페이지 등 회원이 접속할 수 있는 페이지는 사용자 Access Token이 없을 경우 로그인 페이지로 이동하도록 했습니다.",
        ],
      },
      {
        title: "성능 개선",
        details: [
          "Code Splitting과 Tree-Shaking을 통해 번들 크기를 최소화하고 애플리케이션 로딩 속도를 향상시켰습니다.",
          "외부 폰트를 불러올 때 font-display: swap을 적용하여 폰트 로딩 중 텍스트가 보이지 않는 문제(FOUT)를 방지했습니다.",
        ],
      },
      {
        title: "Axios instance 생성",
        details: [
          "axios.create를 사용하여 반복되는 API 호출 코드를 인스턴스화하여 가독성과 재사용성을 높였습니다.",
        ],
      },
    ],
    overview: [
      {
        title: "노래 줍기",
        details: [
          "사용자 위치를 기반으로 반경 1km 이내 음악 조회 가능",
          "사용자 위치를 기반으로 반경 600m 이내의 음악 상세 조회",
          "상세 조회한 음악을 노래 줍기를 통해 플레이리스트에 추가",
        ],
      },
      {
        title: "노래 두기",
        details: [
          "Spotify API를 이용하여 노래 검색 후 공유할 음악 선택",
          "사용자 위치에 노래와 함께 코멘트 및 사진 공유",
        ],
      },
      {
        title: "콘텐츠",
        details: [
          "퀴즈 및 게임 등 콘텐츠 참여를 통해 사용자 유치 및 유지",
          "콘텐츠마다 일정 조건을 달성하면 하루에 한 개의 쿠폰 획득",
        ],
      },
      {
        title: "갤럭시 워치",
        details: [
          "이번 주 우리 동네 인기 노래 조회",
          "사용자 플레이리스트에 있는 음악을 공유",
        ],
      },
    ],
    concerns: [
      {
        title: "지도 데이터 갱신",
        details: [
          "실시간으로 사용자 위치를 표시해야 했습니다. 이 경우, 사용자 위치에 맞게 계속해서 API를 호출하여 음악 정보와 주소 데이터를 변형시켜야 했는데, 잦은 API 호출로 인해 서버에 부하가 발생하고, 서비스 성능이 저하될 수 있다고 생각했습니다.",
          "이를 해결하기 위해 초기에 사용자 위치를 저장하고, 실시간 위치와 저장한 위치의 거리가 50m 이상 차이 날 경우에만 API 호출을 진행하도록 했습니다. 또한 50m 이상 차이가 발생하면 저장된 위치 데이터를 최신 사용자 위치로 업데이트했습니다.",
        ],
      },
      {
        title: "Access Token 재발급",
        details: [
          "Access Token이 만료되었을 경우, 각 API 호출 코드에 Access Token 재발급 로직을 추가해야 하는지 고민했습니다.",
          "axios의 interceptor.response를 사용하면 응답을 가로채서 추가적인 로직을 공통의 axios instance에 추가할 수 있었습니다. 이를 통해 에러가 발생하면 Access Token을 재발급 하는 API를 호출하고 기존에 실행하던 API를 재실행하도록 구현했습니다.",
        ],
      },
    ],
    retrospect: [
      "필요한 API 호출에 대한 응답 값을 담당 백엔드 개발자와 회의하고 노션에 기록하여, 개발하는 과정에서 기록된 내용만을 확인하여 개발할 수 있어서 좋았습니다.",
      "배포 전에 팀원들과 QA 기간을 가졌으며, 배포에 적용할 기능들을 테스트하고 검수했습니다. 이 과정에서 발생한 에러를 수정하고 보완해 나가는 과정이 유익했습니다.",
      "3차 배포까지 진행하면서 사용자들의 피드백을 받아볼 수 있었고, 이를 바탕으로 프로젝트에서 부족한 부분을 파악하고 개선할 수 있었습니다.",
      "Spotify API에서 받아온 앨범 이미지를 S3에 저장해서 사용했는데, 사용하는 이미지 크기에 비해 저장된 이미지가 과도하게 커서 로드 시간이 오래 걸리는 문제가 발생했습니다. 적절한 이미지를 사용하기 위해 CloudFront를 학습했으나, 학습이 완벽하게 이루어지지 못해 프로젝트에 적용하지 못한 점이 아쉬웠습니다.",
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
          "input type=\"file\"에서 이미지만을 받아올 수 있도록 accept 속성에 image/*를 추가하여 모든 이미지 파일을 적용할 수 있도록 설정했습니다.",
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
  // {
  //   id: "project-3",
  //   title: "Portfolio",
  //   description: "개인 포트폴리오 웹사이트 (현재 사이트)",
  //   period: "2024.06 - 2024.07",
  //   duration: "총 4주",
  //   thumbnailUrl: "/portfolio.png",
  //   techStack: ["Next.js", "TypeScript", "CSS"],
  //   type: "personal",
  //   teamSize: "개인",
  //   role: "개인",
  //   achievements: [],
  //   overview: [],
  // },
];
