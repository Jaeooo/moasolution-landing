"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const logoWhite = "/icons/logo_white.svg"; // 스크롤 전 로고 (흰색)
const logoScrolled = "/icons/logo_black.svg"; // 스크롤 후 플로팅 헤더 로고
const img1 = "http://localhost:3845/assets/fcb749cdfe63137786ae4018ef92b521986db422.png";

export function StickyHeader() {
  const pathname = usePathname();
  const isBlogPage = pathname === "/blog" || pathname.startsWith("/blog/");
  const [isScrolled, setIsScrolled] = useState(isBlogPage);

  useEffect(() => {
    // 블로그 페이지에서는 항상 플로팅 헤더로 표시
    if (isBlogPage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      // 스크롤을 조금 더 해야 헤더 전환 (100px 스크롤 시)
      // 위로 스크롤할 때도 같은 임계값 사용
      setIsScrolled(scrollPosition > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isBlogPage]);

  // 부드러운 스크롤 핸들러
  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace(/^.*#/, '');

    if (isBlogPage) {
      // 블로그 페이지에서는 메인 페이지로 이동 후 스크롤
      window.location.href = `/#${targetId}`;
      return;
    }

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const headerOffset = 100; // 헤더 높이 고려
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  // 공통 레이아웃 (스크롤 전/후 동일한 사이즈와 레이아웃)
  const headerContent = (
    <div className="flex items-center justify-between w-full">
      <Link href="/" className="h-[30px] w-[150px] relative block">
        <img
          alt="모아솔루션 로고"
          className="w-full h-full object-contain"
          src={isScrolled ? logoScrolled : logoWhite}
        />
      </Link>
      <nav
        className={`hidden lg:flex items-center gap-[48px] text-base font-normal leading-[1.48] tracking-[-0.4px] transition-colors duration-300 ${isScrolled ? "text-[#0a0b0e]" : "text-white"
          }`}
      >
        <a
          href={isBlogPage ? "/#features" : "#features"}
          onClick={(e) => handleSmoothScroll(e, isBlogPage ? "/#features" : "#features")}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          기능소개
        </a>
        <a
          href={isBlogPage ? "/#pricing" : "#pricing"}
          onClick={(e) => handleSmoothScroll(e, isBlogPage ? "/#pricing" : "#pricing")}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          요금제
        </a>
        <a
          href={isBlogPage ? "/#cases" : "#cases"}
          onClick={(e) => handleSmoothScroll(e, isBlogPage ? "/#cases" : "#cases")}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          도입 사례
        </a>
        <a
          href={isBlogPage ? "/#support" : "#support"}
          onClick={(e) => handleSmoothScroll(e, isBlogPage ? "/#support" : "#support")}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          고객 지원
        </a>
        <a
          href={isBlogPage ? "/#contact" : "#contact"}
          onClick={(e) => handleSmoothScroll(e, isBlogPage ? "/#contact" : "#contact")}
          className="hover:opacity-80 transition-opacity cursor-pointer"
        >
          상담 문의
        </a>
      </nav>
      <a
        href="https://store.kanduit.site/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Button
          className={`h-auto rounded-full px-[26px] py-[12px] text-sm font-semibold transition-all duration-300 ${isScrolled
            ? "bg-[#0a0b0e] text-white hover:bg-[#0a0b0e]/90"
            : "bg-white text-[#0a0b0e] hover:bg-white/90"
            }`}
        >
          사장님 로그인
        </Button>
      </a>
    </div>
  );

  // 헤더를 하나로 통합하여 자연스러운 전환 애니메이션 적용
  // 스크롤 전: hero 섹션 내부에 absolute로 위치
  // 스크롤 후: fixed로 플로팅 헤더로 전환
  // 기본 랜딩 페이지에서는 위쪽 마진 60px 추가
  // top 위치 변경은 즉시 적용 (애니메이션 없음)
  return (
    <header
      className={`${isScrolled
        ? "fixed top-[60px]"
        : isBlogPage
          ? "absolute top-[60px]"
          : "absolute top-[120px]"
        } left-1/2 -translate-x-1/2 z-50 w-full max-w-[1320px] px-4 md:px-0`}
      style={{
        transition: 'none', // top 위치 변경은 즉시 적용
      }}
    >
      <div className="mx-auto w-full">
        <div
          className={`relative px-[60px] py-[20px] overflow-hidden ${isScrolled
            ? "border-[0.5px] border-[rgba(108,109,110,0.2)] border-solid rounded-[20px] shadow-[0px_0px_36px_0px_rgba(0,0,0,0.05),0_0_0_1px_rgba(255,255,255,0.3),0_0_20px_rgba(255,255,255,0.2)] transition-all duration-500 ease-in-out"
            : "border-transparent transition-[border,transform] duration-500 ease-in-out"
            }`}
          style={{
            boxShadow: isScrolled
              ? '0px 0px 36px 0px rgba(0,0,0,0.05), 0 0 0 1px rgba(255,255,255,0.3), 0 0 20px rgba(255,255,255,0.2)'
              : 'none',
            transition: isScrolled
              ? 'all 0.5s ease-in-out'
              : 'border 0.5s ease-in-out, transform 0.5s ease-in-out, box-shadow 0s',
          }}
        >
          {/* 스크롤 후에만 배경 이미지와 Glass 효과 표시 */}
          {isScrolled && (
            <>
              <img
                alt=""
                className="absolute inset-0 max-w-none object-cover pointer-events-none rounded-[20px] size-full transition-opacity duration-500"
                src={img1}
              />
              {/* Glass 효과 레이어: Figma 설정값 반영 - 더 투명하게 조정 */}
              {/* Frost: 15, Light: -45° 80%, Refraction/Depth/Dispersion: 100, Splay: 0 */}
              <div
                className="absolute inset-0 rounded-[20px] pointer-events-none transition-opacity duration-500"
                style={{
                  backdropFilter: 'blur(15px)',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.15) 100%)',
                  WebkitBackdropFilter: 'blur(15px)',
                }}
              />
            </>
          )}
          <div className="relative">{headerContent}</div>
        </div>
      </div>
    </header>
  );
}
