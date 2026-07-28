import type { ContactItem, SocialItem } from "@/app/_types/contact";

export const contact = {
  email: {
    value: "wjdxodbs52@naver.com",
    href: "mailto:wjdxodbs52@naver.com",
  },
  phone: {
    value: "010-6255-4002",
    href: "tel:010-6255-4002",
  },
  location: {
    value: "서울특별시 관악구 봉천동",
    href: null,
  },
} satisfies Record<"email" | "phone" | "location", ContactItem>;

export const socials = {
  github: {
    href: "https://github.com/wjdxodbs",
    description: "코드와 프로젝트를 확인하세요",
    displayLabel: "github.com/wjdxodbs",
  },
  blog: {
    href: "https://exultant-dish-a7c.notion.site/fbc464f7f2454acb89e173cdc6222fea?source=copy_link",
    description: "개발 관련 글을 작성합니다",
    displayLabel: "Notion 블로그",
  },
} satisfies Record<"github" | "blog", SocialItem>;
