import type { ContactInfo, SocialLink } from "@/app/(withHeader)/contact/_types/contact";

export const contactInfo: ContactInfo[] = [
  {
    icon: "✉️",
    label: "Email",
    value: "wjdxodbs52@naver.com",
    href: "mailto:wjdxodbs52@naver.com",
  },
  {
    icon: "📱",
    label: "Phone",
    value: "010-6255-4002",
    href: "tel:010-6255-4002",
  },
  {
    icon: "📍",
    label: "Location",
    value: "서울특별시 관악구 봉천동",
    href: null,
  },
];

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    icon: "GitHub",
    iconUrl: "/icons/github.svg",
    href: "https://github.com/wjdxodbs",
    description: "코드와 프로젝트를 확인하세요",
  },

  {
    name: "Blog",
    icon: "📝",
    href: "https://exultant-dish-a7c.notion.site/fbc464f7f2454acb89e173cdc6222fea?source=copy_link",
    description: "개발 관련 글을 작성합니다",
  },
];
