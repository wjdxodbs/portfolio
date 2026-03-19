export interface TechIcon {
  name: string;
  iconUrl: string;
  color: string;
  abbr?: string;
}

const TECH_ICONS = {
  React: {
    name: "React",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    color: "#61DAFB",
  },
  "Next.js": {
    name: "Next.js",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
    color: "#ffffff",
  },
  TypeScript: {
    name: "TypeScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    color: "#3178C6",
  },
  JavaScript: {
    name: "JavaScript",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    color: "#F7DF1E",
  },
  Vite: {
    name: "Vite",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vitejs/vitejs-original.svg",
    color: "#646CFF",
  },
  Recoil: {
    name: "Recoil",
    iconUrl: "/icons/recoil.svg",
    color: "#3578E5",
  },
  Zustand: {
    name: "Zustand",
    iconUrl: "/icons/zustand.svg",
    color: "#FF6B35",
    abbr: "ZS",
  },
  "TanStack Query": {
    name: "TanStack Query",
    iconUrl: "/icons/tanstack-query.png",
    color: "#FF4154",
  },
  SCSS: {
    name: "SCSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg",
    color: "#CC6699",
  },
  "Tailwind CSS": {
    name: "Tailwind CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
    color: "#06B6D4",
  },
  "shadcn/ui": {
    name: "shadcn/ui",
    iconUrl: "/icons/shadcn.svg",
    color: "#F05032",
  },
  HTML: {
    name: "HTML",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
    color: "#E34F26",
  },
  CSS: {
    name: "CSS",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
    color: "#1572B6",
  },
  Git: {
    name: "Git",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",
    color: "#F05032",
  },
  GitHub: {
    name: "GitHub",
    iconUrl:
      "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
    color: "#ffffff",
  },
};

export type TechName = keyof typeof TECH_ICONS;

export function getTechIcon(techName: string): TechIcon {
  return (
    (TECH_ICONS as Record<string, TechIcon>)[techName] ?? {
      name: techName,
      iconUrl: "",
      color: "#a0a0a0",
    }
  );
}
