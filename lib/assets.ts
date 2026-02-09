/**
 * Asset 경로 관리
 * 
 * Next.js에서는 public 폴더의 파일들을 루트 경로(/)로 접근할 수 있습니다.
 * 예: public/images/logo.png → /images/logo.png
 */

// 이미지 에셋 경로
export const images = {
  // Hero 섹션
  hero: "/images/hero/freepik-text1-br-23554.png",

  // 기능 소개 섹션
  features: {
    pointStamp: "/images/features/freepik-text1-p3d-85695.png",
    roulette: "/images/features/freepik-text1-85700.png",
    alramTalk: "/images/features/12415151616161.png",
  },

  // 성공 사례
  testimonials: {
    image1: "/images/testimonials/image-1895.png",
    image2: "/images/testimonials/image-1894.png",
  },

  // 아이콘
  icons: {
    check: "/icons/check.svg",
    arrowDown: "/icons/arrow-down.svg",
    arrowUp: "/icons/arrow-up.svg",
    divider: "/icons/divider.svg",
  },

  // 로고
  logo: {
    main: "/images/logo/group.svg",
    footer: "/images/logo/group1.svg",
    social: {
      group2: "/images/logo/group2.svg",
      group3: "/images/logo/group3.svg",
    },
  },
} as const;
