import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "정태윤 포트폴리오",
    short_name: "정태윤 포트폴리오",
    description: "프론트엔드 개발자 정태윤의 포트폴리오입니다.",
    start_url: "/",
    display: "standalone",
    background_color: "#0d0d11",
    theme_color: "#0d0d11",
    icons: [
      {
        src: "/icons/icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icons/icon-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
