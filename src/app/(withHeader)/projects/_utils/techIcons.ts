export interface TechIcon {
  name: string;
  iconUrl: string;
  abbr?: string;
}

const TECH_ICONS = {
  React: {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  "Next.js": {
    name: "Next.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  },
  TypeScript: {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  JavaScript: {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  Vite: {
    name: "Vite",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
  },
  Recoil: {
    name: "Recoil",
    iconUrl: "/icons/recoil.svg",
  },
  Zustand: {
    name: "Zustand",
    iconUrl: "/icons/zustand.svg",
    abbr: "ZS",
  },
  "TanStack Query": {
    name: "TanStack Query",
    iconUrl: "/icons/tanstack-query.png",
  },
  SCSS: {
    name: "SCSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  "shadcn/ui": {
    name: "shadcn/ui",
    iconUrl: "/icons/shadcn.svg",
  },
  HTML: {
    name: "HTML",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  CSS: {
    name: "CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  Git: {
    name: "Git",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
  },
  GitHub: {
    name: "GitHub",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  "React Native": {
    name: "React Native",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  Expo: {
    name: "Expo",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/expo/expo-original.svg",
  },
};

export type TechName = keyof typeof TECH_ICONS;

export function getTechIcon(techName: string): TechIcon {
  return (
    (TECH_ICONS as Record<string, TechIcon>)[techName] ?? {
      name: techName,
      iconUrl: "",
    }
  );
}
