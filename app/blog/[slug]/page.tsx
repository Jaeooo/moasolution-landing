import { Suspense } from "react";
import { StickyHeader } from "@/components/sticky-header";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// Image assets
const blogSample1 = "/images/blog_sample_1.png";

const relatedPosts = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem ...",
  },
  {
    id: 2,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tem ...",
  },
  {
    id: 3,
    title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit ...",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do  ...",
  },
];

export default function BlogDetailPage() {
  return (
    <div className="bg-white relative w-full min-h-screen">
      {/* Sticky Header */}
      <Suspense fallback={<div className="h-[100px]" />}>
        <StickyHeader />
      </Suspense>

      <div className="pt-[181px] pb-20">
        <div className="max-w-[1080px] mx-auto px-[60px]">
          {/* Category Badge */}
          <div className="bg-[#e6e6e6] inline-flex items-center justify-center px-4 py-2 rounded-[1000px] mb-4">
            <p className="text-[#0a0b0e] text-sm font-semibold">인터뷰</p>
          </div>

          {/* Date */}
          <p className="text-[#abaeb3] text-lg font-medium leading-[1.48] tracking-[-0.072px] mb-4">
            2025.10.12
          </p>

          {/* Title */}
          <h1 className="text-[#0a0b0e] text-[46px] font-extrabold leading-[1.4] tracking-[-0.46px] mb-12">
            &quot;지하철역 구석, 횟집이 대박난 비결은?!&quot;&apos;화연&apos; 사장님 인터뷰 [모아솔루션의편리한 기능과 성공한 사장님 인터뷰]
          </h1>

          {/* Hero Image */}
          <div className="h-[561px] rounded-[30px] overflow-hidden mb-12">
            <img
              alt="블로그 히어로 이미지"
              className="w-full h-full object-cover"
              src={blogSample1}
            />
          </div>

          {/* Content Section 1 */}
          <h2 className="text-[#0a0b0e] text-[36px] font-bold leading-[1.48] tracking-[-0.4px] mb-6">
            🐟 회는 싱싱한데, 왜 손님이 다시 안 올까?
          </h2>
          <div className="text-[#354153] text-lg font-medium leading-[1.6] tracking-[-0.4px] mb-12 space-y-4">
            <p>
              지하철역 4번 출구, 하지만 골목 안쪽 구석에 자리 잡은 횟집 &apos;화연&apos;. 처음 문을 열었을 때만 해도 사장님은 자신만만했습니다. 매일 새벽 공수해오는 싱싱한 횟감, 넉넉한 인심이라면 손님들이 알아서 찾아올 거라 믿었기 때문이죠.
            </p>
            <p>
              하지만 현실은 냉혹했습니다. 퇴근길에 바쁘게 지나치는 사람들, 골목 안쪽이라 눈에 띄지 않는 간판... 오픈 초기의 &apos;오픈빨&apos;이 빠지자 테이블은 점점 비어갔고, 전단지를 돌려봐도 그때뿐이었습니다.
            </p>
            <p>
              &quot;맛있게 드시고 가셨는데, 왜 재방문으로 이어지지 않을까?&quot; 사장님의 고민이 깊어가던 그때, 우연히 도입하게 된 것이 바로 &apos;모아솔루션&apos;이었습니다.
            </p>
          </div>

          {/* Content Section 2 */}
          <h2 className="text-[#0a0b0e] text-[36px] font-bold leading-[1.48] tracking-[-0.4px] mb-6">
            💡 터닝 포인트: 종이 쿠폰 대신 태블릿을 놓았습니다
          </h2>
          <div className="text-[#354153] text-lg font-medium leading-[1.6] tracking-[-0.4px] mb-12 space-y-4">
            <p>
              사장님은 기존에 쓰던 도장 쿠폰을 과감히 없앴습니다. 술 한잔 걸치고 나가는 손님들이 종이 쿠폰을 챙길 리 만무했고, 지갑에 넣어둬도 잃어버리기 일쑤였으니까요.
            </p>
            <p className="font-bold">
              Q. 모아솔루션 도입 후 가장 달라진 점은 무엇인가요?
            </p>
            <p>
              사장님: &quot;일단 적립 속도가 엄청 빨라요. 횟집 특성상 술 취한 손님들이 많은데, 복잡하게 가입하라고 하면 다들 싫어하거든요. 근데 이건 전화번호만 딱 누르면 0.1초 만에 적립되니까 거부감이 전혀 없더라고요.&quot;
            </p>
            <p>
              손님들이 계산대 앞에서 머뭇거리는 시간이 사라지자, 자연스럽게 고객 데이터가 쌓이기 시작했습니다. 그리고 &apos;화연&apos;의 진짜 반전 드라마가 시작되었습니다.
            </p>
          </div>

          {/* Image Placeholder */}
          <div className="bg-[#d9d9d9] h-[509px] rounded-[30px] mb-12" />

          {/* Content Section 3 */}
          <h2 className="text-[#0a0b0e] text-[36px] font-bold leading-[1.48] tracking-[-0.4px] mb-6">
            🚀 대박의 비결: 모아의 &apos;알림톡&apos;과 &apos;룰렛&apos;
          </h2>
          <div className="text-[#354153] text-lg font-medium leading-[1.6] tracking-[-0.4px] mb-12 space-y-4">
            <p>
              사장님이 꼽은 성공 비결은 모아의 두 가지 핵심 기능이었습니다.
            </p>
            <p className="font-bold">
              1. 비 오는 날엔? &quot;오늘 광어 잡는 날!&quot; 알림톡 📩
            </p>
            <p>
              비가 오거나 평일 늦은 저녁, 손님이 뜸할 때 사장님은 모아로 **&apos;카카오 알림톡&apos;**을 보냈습니다. &quot;[화연] 비 오는 날엔 소주 한 잔! 오늘 방문하시면 매운탕 서비스 드려요!&quot; 문자보다 저렴하지만 효과는 확실했습니다. 알림톡을 보고 &quot;아, 맞다! 거기 있었지&quot; 하며 찾아오는 단골들이 늘어난 것이죠.
            </p>
            <p className="font-bold">
              2. 계산할 때 터지는 즐거움, &apos;꽝 없는 룰렛&apos; 🎯
            </p>
            <p>
              맛있게 먹고 나가는 길, 사장님은 손님들에게 태블릿을 내밉니다. &quot;적립하시고 룰렛 한번 돌려보세요!&quot; 음료수 1병, 소주 1병, 때로는 모둠회 할인권까지. 소소한 당첨의 재미 덕분에 손님들은 계산하는 순간까지 웃으며 매장을 나갑니다.
            </p>
            <p>
              사장님: &quot;손님들이 &apos;그거 돌리러 또 올게요&apos;라고 농담처럼 말씀하시는데, 진짜로 다시 오시더라고요. (웃음) 횟집은 가격대가 좀 있다 보니 자주 오기 힘든데, 이런 이벤트가 재방문 주기를 확실히 앞당겨 줬습니다.&quot;
            </p>
            <p className="font-bold">
              결과: 구석진 횟집에서 &apos;웨이팅 맛집&apos;으로
            </p>
            <p>
              모아솔루션 도입 6개월 후, &apos;화연&apos;은 어떻게 변했을까요?
            </p>
            <ul className="list-disc ml-6 space-y-2">
              <li>재방문율 200% 상승: 한 번 온 손님은 반드시 다시 찾는 구조가 잡혔습니다.</li>
              <li>단골 고객 1,000명 돌파: 알림톡 하나로 만석을 채울 수 있는 든든한 팬덤이 생겼습니다.</li>
              <li>마케팅 비용 절감: 효과 없는 전단지 대신, 타겟 고객에게 직접 보내는 알림톡으로 비용은 줄고 효율은 늘었습니다.</li>
            </ul>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#e6e6e6] mb-12" />

          {/* Content Section 4 */}
          <h2 className="text-[#0a0b0e] text-[36px] font-bold leading-[1.48] tracking-[-0.4px] mb-6">
            위치 탓하지 마세요, 시스템이 답입니다
          </h2>
          <div className="text-[#354153] text-lg font-medium leading-[1.6] tracking-[-0.4px] mb-12 space-y-4">
            <p>
              마지막으로 요식업 사장님들에게 전하고 싶은 말을 물었습니다.
            </p>
            <p>
              &apos;화연&apos; 사장님: &quot;자리가 안 좋아서 장사가 안된다고 생각했는데, 그게 아니었어요. 한 번 온 손님을 어떻게 잡느냐가 핵심이더라고요. 모아솔루션은 저 같은 컴맹 사장님도 쓸 수 있을 만큼 쉽고, 무엇보다 손님들이 좋아합니다. 망설이지 말고 일단 시작해 보세요.&quot;
            </p>
            <p>
              맛있는 음식과 똑똑한 고객 관리의 만남. 지하철역 구석진 곳에서도 &apos;대박&apos;을 터뜨린 화연의 비결은, 손님을 기억하고 다시 부르는 &apos;모아솔루션&apos;에 있었습니다.
            </p>
          </div>

          {/* CTA Section */}
          <div className="relative h-[346px] rounded-[30px] overflow-hidden mb-12" style={{
            background: 'radial-gradient(ellipse at center bottom, rgba(128,69,191,1) 0%, rgba(88,45,134,1) 50%, rgba(66,34,101,1) 62.5%, rgba(44,23,67,1) 75%, rgba(22,11,34,1) 87.5%, rgba(11,6,17,1) 93.75%, rgba(6,3,8,1) 96.875%, rgba(0,0,0,1) 100%)',
          }}>
            <div className="absolute inset-0 pointer-events-none rounded-[30px] shadow-[inset_0px_0px_48px_0px_white,inset_0px_0px_20px_0px_rgba(255,255,255,0.6)]" />
            <div className="absolute left-1/2 -translate-x-1/2 top-[80px] text-center w-[650px]">
              <p className="text-white text-[36px] font-extrabold leading-[1.4] tracking-[-1px] mb-4">
                혼자 고민하지 마세요.
              </p>
              <p className="text-white text-[36px] font-extrabold leading-[1.4] tracking-[-1px] mb-8">
                모아가 든든한 파트너가 되겠습니다.
              </p>
              <Link href="/#contact">
                <Button className="bg-white text-[#0a0b0e] rounded-[14px] px-7 py-4 hover:bg-white/90 text-sm font-bold">
                  모아 솔루션 도입 문의
                </Button>
              </Link>
            </div>
          </div>

          {/* Related Posts */}
          <h3 className="text-[#0a0b0e] text-[30px] font-extrabold leading-[1.48] tracking-[-0.4px] mb-6">
            모아솔루션 인터뷰 더보기
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {relatedPosts.map((post) => (
              <Link key={post.id} href={`/blog/${post.id}`}>
                <div className="bg-white h-[535px] rounded-[30px] shadow-[0px_0px_36px_0px_rgba(0,0,0,0.08)] overflow-hidden relative cursor-pointer hover:shadow-[0px_0px_48px_0px_rgba(0,0,0,0.12)] transition-shadow">
                  <div className="absolute bg-[#c4c4c4] h-[329px] left-3 rounded-[18px] top-3 w-[calc(100%-24px)]" />
                  <div className="absolute bg-gradient-to-t from-white h-[164px] left-3 to-[rgba(255,255,255,0)] top-[calc(20%+70px)] w-[calc(100%-24px)]" />
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
