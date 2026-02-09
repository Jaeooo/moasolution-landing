"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

// Image assets from Figma
const imgImage1895 = "http://localhost:3845/assets/443f90a725cd2457a1e848e2f7955f13fadeb920.png";
const imgImage1894 = "http://localhost:3845/assets/9352736cec1b950070488f30c0cf1d5df3cb181a.png";

const successCases = [
  {
    id: 1,
    type: "image",
    image1: imgImage1895,
    image2: imgImage1894,
    category: "유튜브",
    title: '"지하철역 구석, 횟집이 대박난 비결은?!" \'화연\' 사장님 인터뷰 [모아솔루션의편리한 기능과 성공한 사장님 인터뷰]',
  },
  {
    id: 2,
    type: "text",
    category: "인터뷰",
    title: "위기의 골목 식당에서 지역 1등 맛집으로: [식당명] 사장님의 성장 일기",
    description: "맛은 자신 있었지만 손님이 없어 막막했던 창업 초기, 모아솔루션을 만나고 달라진 가게의 풍경을 공유합니다.",
  },
  {
    id: 3,
    type: "text",
    category: "인터뷰",
    title: '"장사는 맛이 전부인 줄 알았죠" [식당명] 사장님이 깨달은 장사의 본질',
    description: "음식만 잘하면 될 줄 알았던 사장님이 모아와 함께 '고객 관리'의 중요성에 눈뜨게 된 과정을 담았습니다.",
  },
  {
    id: 4,
    type: "image",
    image1: imgImage1895,
    category: "유튜브",
    title: '"상가 2층 구석, 고기집이 대박난 비결은?!"│\'청춘고깃집\' 사장님 인터뷰 [모아솔루션으로 성공한 사장님 인터뷰]',
  },
];

export function SuccessCasesSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const animationFrameRef = useRef<number | null>(null);
  const scrollPositionRef = useRef(0);
  const originalWidthRef = useRef<number>(0);
  const firstChildOffsetRef = useRef<number>(0);
  const isUserScrollingRef = useRef(false);
  const userScrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isAutoScrollingRef = useRef(false);

  // 초기화는 한 번만 실행
  useEffect(() => {
    const container = scrollContainerRef.current;
    const content = contentRef.current;
    if (!container || !content) return;

    // 첫 번째 카드 세트의 실제 너비를 측정
    const updateOriginalWidth = () => {
      const children = Array.from(content.children) as HTMLElement[];
      if (children.length >= successCases.length) {
        const firstChild = children[0];
        const lastChildOfFirstSet = children[successCases.length - 1];
        if (firstChild && lastChildOfFirstSet) {
          firstChildOffsetRef.current = firstChild.offsetLeft;
          // 첫 번째 카드 세트의 너비 = 마지막 카드의 오프셋 + 마지막 카드의 너비 - 첫 번째 카드의 오프셋
          originalWidthRef.current = lastChildOfFirstSet.offsetLeft + lastChildOfFirstSet.offsetWidth - firstChild.offsetLeft;
        }
      }
    };

    // 초기 너비 측정을 위한 짧은 지연 (DOM 렌더링 완료 대기)
    const initTimeout = setTimeout(() => {
      updateOriginalWidth();
      // 초기 스크롤 위치를 첫 번째 카드 세트의 시작점으로 설정 (한 번만)
      if (firstChildOffsetRef.current > 0 && scrollPositionRef.current === 0) {
        scrollPositionRef.current = firstChildOffsetRef.current;
        container.scrollLeft = firstChildOffsetRef.current;
      }
    }, 100);

    // 리사이즈 시 업데이트
    const resizeObserver = new ResizeObserver(() => {
      updateOriginalWidth();
    });
    resizeObserver.observe(container);
    resizeObserver.observe(content);

    return () => {
      clearTimeout(initTimeout);
      resizeObserver.disconnect();
    };
  }, []); // 의존성 배열 비움 - 한 번만 실행

  // 공통 리셋 함수: 스크롤 위치를 무한 스크롤 범위 내로 정규화
  const normalizeScrollPosition = useCallback((scrollPos: number): number => {
    if (originalWidthRef.current > 0 && firstChildOffsetRef.current >= 0) {
      const secondSetStart = firstChildOffsetRef.current + originalWidthRef.current;
      if (scrollPos >= secondSetStart) {
        // 두 번째 카드 세트를 넘어가면 첫 번째 카드 세트로 리셋
        return firstChildOffsetRef.current + (scrollPos - secondSetStart);
      }
    }
    return scrollPos;
  }, []);

  // 사용자 스크롤 감지
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const handleScroll = () => {
      // 오토 스크롤에 의한 스크롤이면 무시
      if (isAutoScrollingRef.current) {
        return;
      }
      
      // 사용자가 스크롤 중임을 표시
      isUserScrollingRef.current = true;
      
      // 현재 스크롤 위치를 가져와서 정규화
      let currentScroll = container.scrollLeft;
      const normalizedScroll = normalizeScrollPosition(currentScroll);
      
      // 정규화된 위치가 다르면 업데이트
      if (normalizedScroll !== currentScroll) {
        container.scrollLeft = normalizedScroll;
        currentScroll = normalizedScroll;
      }
      
      // scrollPositionRef에 동기화
      scrollPositionRef.current = currentScroll;

      // 사용자 스크롤이 끝난 후 일정 시간이 지나면 오토 스크롤 재개
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
      
      userScrollTimeoutRef.current = setTimeout(() => {
        isUserScrollingRef.current = false;
        // 오토 스크롤 재개 시 현재 스크롤 위치를 정확히 동기화
        if (container) {
          scrollPositionRef.current = normalizeScrollPosition(container.scrollLeft);
        }
      }, 150); // 150ms 후 오토 스크롤 재개
    };

    container.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      container.removeEventListener('scroll', handleScroll);
      if (userScrollTimeoutRef.current) {
        clearTimeout(userScrollTimeoutRef.current);
      }
    };
  }, []);

  // 스크롤 애니메이션은 isHovered에 따라 실행
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const scrollSpeed = 2.5; // 픽셀 단위 스크롤 속도

    const animate = () => {
      // hover 상태가 아니고, 사용자가 스크롤 중이 아닐 때만 오토 스크롤
      if (!isHovered && !isUserScrollingRef.current && container && originalWidthRef.current > 0 && firstChildOffsetRef.current >= 0) {
        isAutoScrollingRef.current = true;
        
        // 오토 스크롤 재개 시 현재 실제 스크롤 위치와 동기화
        if (scrollPositionRef.current === 0 || Math.abs(container.scrollLeft - scrollPositionRef.current) > 5) {
          scrollPositionRef.current = normalizeScrollPosition(container.scrollLeft);
        }
        
        scrollPositionRef.current += scrollSpeed;
        
        // 공통 리셋 함수를 사용하여 정규화
        scrollPositionRef.current = normalizeScrollPosition(scrollPositionRef.current);
        
        container.scrollLeft = scrollPositionRef.current;
        
        // 다음 프레임에서 오토 스크롤 플래그 해제 (스크롤 이벤트가 발생한 후)
        requestAnimationFrame(() => {
          isAutoScrollingRef.current = false;
        });
      }

      animationFrameRef.current = requestAnimationFrame(animate);
    };

    animationFrameRef.current = requestAnimationFrame(animate);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [isHovered]);

  return (
    <section id="cases" className="bg-[#f0f2f4] py-20 md:py-40">
      <div className="max-w-[1320px] mx-auto px-4 md:px-[60px]">
        <div className="text-center mb-8 md:mb-12">
          <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.4] text-[#2d3541] mb-4 md:mb-6 tracking-[-1px]">
            성공하는 매장 뒤에는<br />
            든든한 파트너 모아가 있습니다.
          </h2>
          <p className="text-[#abaeb3] text-base md:text-xl leading-[1.48] tracking-[-0.4px] max-w-[662px] mx-auto mb-6 md:mb-8">
            혼자 고민하지 마세요. 이미 수많은 사장님들이 모아와 함께 가게를 키워가고 있습니다. 다음 성공 스토리의 주인공은 바로 사장님입니다.
          </p>
          <Link href="/blog">
            <Button className="h-auto bg-[#582d86] text-white rounded-[14px] px-7 py-4 hover:bg-[#582d86]/90">
              성공 사례 더 보기
            </Button>
          </Link>
        </div>
      </div>

      {/* 캐러셀은 전체 너비로 확장 */}
      <div className="w-full overflow-hidden">
        <div
          ref={scrollContainerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="overflow-x-auto pb-4 scrollbar-hide pl-4 md:pl-[60px] pr-4 md:pr-[60px]"
          style={{ scrollBehavior: "auto" }}
        >
          <div
            ref={contentRef}
            className="flex gap-4 md:gap-5"
          >
            {/* 원본 카드들 */}
            {successCases.map((caseItem) => (
              <CaseCard key={caseItem.id} caseItem={caseItem} />
            ))}
            {/* 무한 스크롤을 위한 복제 카드들 - 2세트로 복제하여 부드러운 전환 */}
            {successCases.map((caseItem) => (
              <CaseCard key={`duplicate-1-${caseItem.id}`} caseItem={caseItem} />
            ))}
            {successCases.map((caseItem) => (
              <CaseCard key={`duplicate-2-${caseItem.id}`} caseItem={caseItem} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CaseCard({ caseItem }: { caseItem: typeof successCases[0] }) {
  if (caseItem.type === "image") {
    return (
      <div className="bg-white h-[400px] md:h-[450px] rounded-3xl overflow-hidden relative shrink-0 w-[90vw] md:w-[650px]">
        <img alt="성공 사례" className="absolute inset-0 w-full h-full object-cover" src={caseItem.image1} />
        {caseItem.image2 && (
          <img alt="성공 사례 오버레이" className="absolute inset-0 w-full h-full object-cover" src={caseItem.image2} />
        )}
        <div className="absolute inset-0 bg-gradient-to-l from-black/20 to-black/80" />
        <div className="absolute bottom-0 left-5 md:left-10 right-5 md:right-10 pb-5 md:pb-10 flex flex-col gap-3 md:gap-5">
          <div className="flex flex-col gap-2">
            <p className="text-[#abaeb3] text-sm md:text-base font-medium">{caseItem.category}</p>
            <p className="text-white text-lg md:text-2xl font-bold leading-[1.4]">{caseItem.title}</p>
          </div>
          <Button className="h-auto bg-white text-[#0a0b0e] rounded-[14px] px-7 py-4 w-fit hover:bg-white/90 text-base">
            보러가기
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white h-[400px] md:h-[450px] rounded-3xl p-6 md:p-10 flex flex-col justify-between shrink-0 w-[80vw] md:w-[426px]">
      <div className="flex flex-col gap-4 md:gap-5">
        <div className="flex flex-col gap-2">
          <p className="text-[#abaeb3] text-sm md:text-base font-medium">{caseItem.category}</p>
          <p className="text-[#0a0b0e] text-lg md:text-2xl font-bold leading-[1.4]">{caseItem.title}</p>
        </div>
        <p className="text-[#abaeb3] text-base md:text-lg font-medium leading-[1.48]">{caseItem.description}</p>
      </div>
      <Button className="h-auto bg-[#582d86] text-white rounded-[14px] px-7 py-4 w-fit hover:bg-[#582d86]/90 text-base">
        보러가기
      </Button>
    </div>
  );
}
