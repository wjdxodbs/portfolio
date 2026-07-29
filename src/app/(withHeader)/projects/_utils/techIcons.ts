export interface TechIcon {
  iconUrl: string;
  abbr?: string;
}

const TECH_ICONS = {
  React: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "Next.js": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  TypeScript: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  JavaScript: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  Vite: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  Recoil: {
    iconUrl: "/icons/recoil.svg",
  },
  Zustand: {
    iconUrl: "/icons/zustand.svg",
    abbr: "ZS",
  },
  "TanStack Query": {
    iconUrl: "/icons/tanstack-query.png",
  },
  SCSS: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  "Tailwind CSS": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  "shadcn/ui": {
    iconUrl: "/icons/shadcn.svg",
  },
  CSS: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  "React Native": {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  Expo: {
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  },
};

export type TechName = keyof typeof TECH_ICONS;

export function getTechIcon(techName: TechName): TechIcon {
  return TECH_ICONS[techName];
}
