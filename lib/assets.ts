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

// Figma에서 제공한 임시 이미지 URL (개발용)
// 실제 이미지를 다운로드해서 public 폴더에 넣으면 위 경로로 교체하세요
export const figmaImages = {
  hero: "http://localhost:3845/assets/0e8a7b1fca7a67f7925f148e18f9f0cbad734f58.png",
  pointStamp: "http://localhost:3845/assets/b9bb0098d4796f28275a8f5056de13d99222943d.png",
  roulette: "http://localhost:3845/assets/b28b39d4156430594b10b36596b39220d55b3461.png",
  alramTalk: "http://localhost:3845/assets/bb6b27a6f910303d9babc637b9ce55145138a3fa.png",
  testimonial1: "http://localhost:3845/assets/443f90a725cd2457a1e848e2f7955f13fadeb920.png",
  testimonial2: "http://localhost:3845/assets/9352736cec1b950070488f30c0cf1d5df3cb181a.png",
  check: "http://localhost:3845/assets/85fccf263246c8cde10c157234297379122c1b9f.svg",
  arrowDown: "http://localhost:3845/assets/3b08f3dfde88343dcc41ee7959917afb1335d3ef.svg",
  arrowUp: "http://localhost:3845/assets/1d5b77e58b98523b3337d02ddf81d87c29bdf753.svg",
  checkbox: "http://localhost:3845/assets/e03a8566891fb3c71f6f74c278977b639fcbeeef.svg",
  logo: "http://localhost:3845/assets/bc1b85702629155e512708cb731da52c191d3e51.svg",
  divider: "http://localhost:3845/assets/1aa05c3fd9f54b3030fef3d9d52b08736e2595b2.svg",
  logoFooter: "http://localhost:3845/assets/70e97d28ee4ab17f46cdbda2b8d26ab1f492aa3a.svg",
  logoSocial1: "http://localhost:3845/assets/bbd7bff56466200b3bebd56fabf931fdb0ebb999.svg",
  logoSocial2: "http://localhost:3845/assets/760a7c40ba8d117a6026bb63685df4d522e9bb8d.svg",
} as const;
