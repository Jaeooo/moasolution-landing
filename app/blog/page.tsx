import { Suspense } from "react";
import { StickyHeader } from "@/components/sticky-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Image assets from Figma
const img1 = "http://localhost:3845/assets/fcb749cdfe63137786ae4018ef92b521986db422.png";
const imgImage1894 = "http://localhost:3845/assets/9352736cec1b950070488f30c0cf1d5df3cb181a.png";
const imgGroup = "http://localhost:3845/assets/53648044a9e69c00fa869c696c88ff45e8f690b1.svg";
const imgFrame = "http://localhost:3845/assets/28cbccf0c34e51e1e67d607d4f9aafe1bf714780.svg";
const imgFrame1 = "http://localhost:3845/assets/f06557af8fc3debac64bad915029fbbfe6094d81.svg";
const imgFrame2 = "http://localhost:3845/assets/ef7b40582cb446a695f5e0c498f7c848c0d9bbd9.svg";

const blogPosts = [
  {
    id: 1,
    type: "featured",
    image: imgImage1894,
    category: "유튜브",
    title: '"지하철역 구석, 횟집이 대박난 비결은?!" \'화연\' 사장님 ...',
    description: "맛은 자신 있었지만 손님이 없어 막막했던 창업 초기, 모아솔루션을 만나고 달라진 가게의 풍경을 공유합니다. 텅 빈 테이블을 단골들로 가득 채울 수 있었던 결정적 ...",
  },
  {
    id: 2,
    type: "regular",
    image: imgImage1894,
    category: "유튜브",
    title: '"지하철역 구석, 횟집이 대박난 비결은?!" \'화연\' 사장님 인터뷰 [모아솔루션 ...',
    description: "맛은 자신 있었지만 손님이 없어 막막했던 창업 초기, 모아솔루션을 만나고 달라진 가게의 풍경 ...",
  },
  {
    id: 3,
    type: "regular",
    category: "인터뷰",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ...",
  },
  {
    id: 4,
    type: "regular",
    category: "인터뷰",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ...",
  },
  {
    id: 5,
    type: "regular",
    category: "인터뷰",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ...",
  },
  {
    id: 6,
    type: "regular",
    category: "인터뷰",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ...",
  },
  {
    id: 7,
    type: "regular",
    category: "인터뷰",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ...",
  },
  {
    id: 8,
    type: "regular",
    category: "인터뷰",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ...",
  },
  {
    id: 9,
    type: "regular",
    category: "인터뷰",
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ...",
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.type === "featured");
  const regularPosts = blogPosts.filter((post) => post.type === "regular");

  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Sticky Header */}
      <Suspense fallback={<div className="h-[100px]" />}>
        <StickyHeader />
      </Suspense>

      <div className="pt-[181px] pb-20">
        <div className="max-w-[1320px] mx-auto">
          {/* Featured Post */}
          {featuredPost && (
            <Link href={`/blog/${featuredPost.id}`}>
              <div className="bg-white h-[585px] rounded-[30px] shadow-[0px_0px_12px_0px_rgba(0,0,0,0.04),0px_0px_36px_0px_rgba(0,0,0,0.08)] mb-12 relative overflow-hidden w-full cursor-pointer hover:shadow-[0px_0px_16px_0px_rgba(0,0,0,0.06),0px_0px_48px_0px_rgba(0,0,0,0.12)] transition-shadow">
              <div className="absolute h-[561px] left-3 rounded-[18px] top-3 w-[638px] overflow-hidden">
                <img
                  alt={featuredPost.title}
                  className="absolute h-full left-[-51.72%] max-w-none top-0 w-[158.31%] object-cover"
                  src={featuredPost.image}
                />
              </div>
              <div className="absolute bg-gradient-to-l from-white h-[561px] left-[331px] to-[rgba(255,255,255,0)] top-3 w-[319px]" />
              <div className="absolute bg-[#e6e6e6] flex items-center justify-center left-[calc(50%+38px)] px-4 py-2 rounded-[1000px] top-[285px]">
                <p className="text-[#0a0b0e] text-sm font-semibold">{featuredPost.category}</p>
              </div>
              <div className="absolute left-[calc(50%+38px)] top-[399px] -translate-y-1/2 w-[582px]">
                <p className="text-[#0a0b0e] text-[46px] font-extrabold leading-[1.4] tracking-[-0.46px] whitespace-pre-wrap">
                  {featuredPost.title}
                </p>
              </div>
              <div className="absolute left-[calc(50%+38px)] top-[510px] -translate-y-1/2 w-[582px]">
                <p className="text-[#abaeb3] text-lg font-medium leading-[1.48] tracking-[-0.072px] whitespace-pre-wrap">
                  {featuredPost.description}
                </p>
              </div>
              </div>
            </Link>
          )}

          {/* Filter Buttons */}
          <div className="bg-gradient-to-b from-[rgba(255,255,255,0.08)] to-[rgba(255,255,255,0.02)] border-[0.5px] border-[rgba(108,109,110,0.2)] h-[62px] rounded-[20px] shadow-[0px_0px_8px_0px_rgba(0,0,0,0.05),0px_0px_36px_0px_rgba(0,0,0,0.05)] w-[348px] mb-12 relative overflow-hidden">
            <div className="absolute border-[#f3f4f5] border-[0.5px] border-solid h-[50px] left-[6px] rounded-[14px] top-[6px] w-[108px] bg-gradient-to-b from-white/80 to-white/80">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#0a0b0e] text-sm font-semibold">전체</p>
              </div>
            </div>
            <div className="absolute h-[50px] left-[calc(33.33%+4px)] rounded-[14px] top-[6px] w-[108px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#abaeb3] text-sm font-medium">유튜브</p>
              </div>
            </div>
            <div className="absolute h-[50px] left-[calc(66.67%+2px)] rounded-[14px] top-[6px] w-[108px]">
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                <p className="text-[#abaeb3] text-sm font-medium">인터뷰</p>
              </div>
            </div>
          </div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {regularPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="bg-white h-[535px] rounded-[30px] shadow-[0px_0px_36px_0px_rgba(0,0,0,0.08)] overflow-hidden relative cursor-pointer hover:shadow-[0px_0px_48px_0px_rgba(0,0,0,0.12)] transition-shadow">
                {post.image ? (
                  <>
                    <div className="absolute h-[329px] left-3 rounded-[18px] top-3 w-[calc(100%-24px)] overflow-hidden">
                      <img
                        alt={post.title}
                        className="absolute inset-0 max-w-none object-cover size-full rounded-[18px]"
                        src={post.image}
                      />
                    </div>
                    <div className="absolute bg-gradient-to-t from-white h-[164px] left-3 to-[rgba(255,255,255,0)] top-[calc(20%+70px)] w-[calc(100%-24px)]" />
                  </>
                ) : (
                  <div className="absolute bg-[#c4c4c4] h-[329px] left-3 rounded-[18px] top-3 w-[calc(100%-24px)]" />
                )}
                <div className="absolute bg-[#e6e6e6] flex items-center justify-center left-[333px] px-4 py-2 rounded-[1000px] top-6">
                  <p className="text-[#0a0b0e] text-sm font-semibold">{post.category}</p>
                </div>
                <p className="absolute font-bold leading-[1.4] left-6 not-italic text-[#0a0b0e] text-2xl top-[calc(60%+44px)] tracking-[-1px] w-[calc(100%-48px)] whitespace-pre-wrap">
                  {post.title}
                </p>
                <p className="absolute font-medium leading-[1.48] left-6 not-italic text-[#abaeb3] text-lg top-[calc(80%+17px)] tracking-[-0.4px] w-[calc(100%-48px)] whitespace-pre-wrap">
                  {post.description}
                </p>
                </div>
              </Link>
            ))}
          </div>

          {/* Pagination */}
          <div className="flex gap-3 items-center justify-center">
            <div className="relative size-[30px]">
              <img alt="이전" className="block max-w-none size-full" src={imgFrame} />
            </div>
            <div className="border-[#f3f4f5] border-[0.5px] border-solid flex items-center justify-center px-5 py-4 rounded-[14px] bg-gradient-to-b from-white/80 to-white/80">
              <p className="text-[#0a0b0e] text-base font-semibold">1</p>
            </div>
            <div className="flex items-center justify-center px-5 py-4 rounded-[14px]">
              <p className="text-[#abaeb3] text-base font-medium">2</p>
            </div>
            <div className="flex items-center justify-center px-5 py-4 rounded-[14px]">
              <p className="text-[#abaeb3] text-base font-medium">3</p>
            </div>
            <div className="flex items-center justify-center px-5 py-4 rounded-[14px]">
              <p className="text-[#abaeb3] text-base font-medium">4</p>
            </div>
            <div className="flex items-center justify-center px-5 py-4 rounded-[14px]">
              <p className="text-[#abaeb3] text-base font-medium">5</p>
            </div>
            <div className="relative size-[30px]">
              <img alt="다음" className="block max-w-none size-full" src={imgFrame1} />
            </div>
            <div className="flex items-center justify-center px-5 py-4 rounded-[14px]">
              <p className="text-[#abaeb3] text-base font-medium">12</p>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex-none rotate-180">
                <div className="relative size-[30px]">
                  <img alt="마지막" className="block max-w-none size-full" src={imgFrame2} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#313d4b] py-10 md:py-20 px-[60px]">
        <div className="max-w-[1320px] mx-auto flex flex-col lg:flex-row justify-between items-start gap-6 lg:gap-0">
          <div className="flex flex-col gap-3 md:gap-[12px]">
            <div className="flex flex-wrap gap-3 items-center text-[rgba(171,174,179,0.6)] text-sm md:text-base leading-[1.48] tracking-[-0.4px]">
              <a href="#" className="hover:opacity-80">이용약관</a>
              <span className="text-[rgba(171,174,179,0.6)]">|</span>
              <a href="#" className="hover:opacity-80">개인정보처리방침</a>
            </div>
            <div className="flex flex-col gap-[12px] text-[rgba(171,174,179,0.6)] text-xs md:text-sm leading-[1.48] tracking-[-0.4px]">
              <div className="flex flex-wrap gap-[12px] items-center">
                <span>대표 전필원</span>
                <span className="text-[rgba(171,174,179,0.6)]">|</span>
                <span>상호 회사를만드는사람들</span>
                <span className="text-[rgba(171,174,179,0.6)]">|</span>
                <span className="break-words">인청광역시 연수구 센트럴로313 C동 19층03호</span>
              </div>
              <div className="flex flex-wrap gap-[12px] items-center">
                <span>사업자등록번호 766-32-01605</span>
                <span className="text-[rgba(171,174,179,0.6)]">|</span>
                <span>개인정보관리책임자 전필원</span>
              </div>
            </div>
            <p className="text-[rgba(171,174,179,0.6)] text-xs md:text-sm leading-[1.48] tracking-[-0.4px] mt-[120px]">
              © 2026 MOA SOLUTION. ALL RIGHTS RESERVED.
            </p>
          </div>
          <div className="h-[80px] md:h-[100px] w-[200px] md:w-[278px] relative shrink-0">
            <img alt="모아솔루션 로고" className="w-full h-full object-contain" src="/images/footer_logo.png" />
          </div>
        </div>
      </footer>
    </div>
  );
}
