import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FAQSection } from "@/components/faq-section";
import { SuccessCasesSection } from "@/components/success-cases-section";
import { StickyHeader } from "@/components/sticky-header";

// Image assets from Figma
const imgFrame = "http://localhost:3845/assets/85fccf263246c8cde10c157234297379122c1b9f.svg";

export default function LandingPage() {
  return (
    <div className="bg-white relative w-full min-h-screen overflow-x-hidden">
      {/* Sticky Header */}
      <StickyHeader />

      {/* Hero Section */}
      <section className="relative bg-white h-[600px] md:h-[900px] mx-auto rounded-3xl overflow-hidden mt-[30px] md:mt-[60px] mb-[160px] max-w-[1320px] px-4 md:px-0" id="hero">
        <div className="absolute inset-0">
          <img
            alt="히어로 배경"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            src="/images/hero_background.png"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/60" />

        {/* Hero Content */}
        <div className="absolute left-1/2 -translate-x-1/2 top-[300px] md:top-[612px] text-center text-white w-[90%] md:w-[650px] z-10">
          <h1 className="text-2xl md:text-[40px] font-extrabold leading-[1.4] tracking-[-1px] mb-4">
            사장님은 장사만 하세요<br />
            단골 관리는 모아가 합니다.
          </h1>
          <p className="text-[#abaeb3] text-base md:text-xl leading-[1.48] tracking-[-0.4px]">
            복잡한 설치 없이 태블릿 하나로 끝<br />
            검증된 적립·마케팅 솔루션을 지금 바로 만나보세요.
          </p>
        </div>
      </section>

      {/* Feature Section 1: 포인트/스탬프 적립 */}
      <section id="features" className="max-w-[1320px] mx-auto px-4 md:px-0 mb-[160px] flex flex-col lg:flex-row items-center justify-between gap-[132px]">
        <div className="h-[300px] md:h-[450px] w-full lg:w-[538px] rounded-3xl overflow-hidden relative shrink-0">
          <img
            alt="포인트 적립 이미지"
            className="w-full h-full object-cover"
            src="/images/earning.png"
          />
        </div>
        <div className="flex flex-col gap-9 items-start w-full lg:w-[650px]">
          <div className="flex flex-col gap-[18px] items-start w-full">
            <div className="border border-[#abaeb3] rounded-full px-5 md:px-[26px] py-2 md:py-3 inline-block">
              <p className="text-[#abaeb3] text-sm md:text-base font-medium leading-[1.48] tracking-[-0.4px]">
                포인트/스탬프 적립
              </p>
            </div>
            <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.4] text-[#2d3541] tracking-[-1px] whitespace-pre-wrap">
              0.1초면 충분합니다!<br />
              번호만 누르는 초간편 적립
            </h2>
          </div>
          <p className="text-[#354153] text-base md:text-xl leading-[1.48] tracking-[-0.4px] whitespace-pre-wrap">
            쿠폰 찍어드릴까요? 묻지 마세요. 번호 입력이면 충분합니다.<br />
            매장 성격에 따라 고객이 선호하는 적립 방식을 맞춤형으로 제공합니다.
          </p>
        </div>
      </section>

      {/* Feature Section 2: 룰렛/뽑기 */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-0 mb-[160px] flex flex-col-reverse lg:flex-row items-center justify-between gap-[132px]">
        <div className="flex flex-col gap-9 items-start w-full lg:w-[650px]">
          <div className="flex flex-col gap-[18px] items-start w-full">
            <div className="border border-[#abaeb3] rounded-full px-5 md:px-[26px] py-2 md:py-3 inline-block">
              <p className="text-[#abaeb3] text-sm md:text-base font-medium leading-[1.48] tracking-[-0.4px]">
                룰렛/뽑기
              </p>
            </div>
            <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.4] text-[#2d3541] tracking-[-1px] whitespace-pre-wrap">
              동전 쥐고 달려가던 그 시절,<br />
              추억의 뽑기왕
            </h2>
          </div>
          <p className="text-[#354153] text-base md:text-xl leading-[1.48] tracking-[-0.4px] whitespace-pre-wrap">
            &quot;조마조마했던 그 시절 뽑기판이 계산대 위로 그대로 옮겨옵니다.&quot;<br />
            딱딱한 영수증 대신 추억을 나누며 손님과 한층 더 가까워지세요.
          </p>
        </div>
        <div className="h-[300px] md:h-[450px] w-full lg:w-[538px] rounded-3xl overflow-hidden relative shrink-0">
          <img
            alt="룰렛 이미지"
            className="w-full h-full object-cover"
            src="/images/event.png"
          />
        </div>
      </section>

      {/* Feature Section 3: 알람톡 */}
      <section className="max-w-[1320px] mx-auto px-4 md:px-0 mb-[160px] flex flex-col lg:flex-row items-center justify-between gap-[132px]">
        <div className="h-[300px] md:h-[450px] w-full lg:w-[538px] rounded-3xl overflow-hidden relative shrink-0">
          <img
            alt="알람톡 이미지"
            className="w-full h-full object-cover"
            src="/images/alarm_talk.png"
          />
        </div>
        <div className="flex flex-col gap-9 items-start w-full lg:w-[650px]">
          <div className="flex flex-col gap-[18px] items-start w-full">
            <div className="border border-[#abaeb3] rounded-full px-5 md:px-[26px] py-2 md:py-3 inline-block">
              <p className="text-[#abaeb3] text-sm md:text-base font-medium leading-[1.48] tracking-[-0.4px]">
                알람톡
              </p>
            </div>
            <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.4] text-[#2d3541] tracking-[-1px] whitespace-pre-wrap">
              일방적인 광고가 아닌,<br />
              기분 좋은 소통의 시작
            </h2>
          </div>
          <p className="text-[#354153] text-base md:text-xl leading-[1.48] tracking-[-0.4px] whitespace-pre-wrap">
            고객은 혜택을 확인하고, 사장님은 이벤트를 알립니다.<br />
            알림톡을 통해 우리 가게만의 소식을 가장 빠르고 정확하게 전달하세요.
          </p>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="bg-[#0a0b0e] py-20 md:py-40 relative">
        <div className="max-w-[1320px] mx-auto px-4 md:px-[60px] relative z-10">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.4] text-white mb-4 md:mb-6 tracking-[-1px]">
              매출이 늘어나도<br />
              요금은 그대로입니다.
            </h2>
            <p className="text-[rgba(171,174,179,0.4)] text-base md:text-xl leading-[1.48] tracking-[-0.4px] max-w-[538px] mx-auto">
              손님이 100명이든, 10,000명이든 추가 요금을 받지 않습니다.<br />
              데이터 용량 걱정 없이 마음껏 적립하고, 마음껏 성장하세요.
            </p>
          </div>

          <div className="flex justify-center mb-8">
            <div className="border border-[#f3f4f5] rounded-[14px] px-7 py-4 bg-gradient-to-r from-white/80 to-white/80 flex items-center justify-center">
              <p className="text-[#0a0b0e] text-sm font-semibold leading-[1.28]">월간 결제</p>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="bg-white border-2 border-[#a371f4] rounded-3xl p-6 md:p-10 w-full max-w-[426px] relative overflow-hidden">
              <div className="absolute inset-[-2px] pointer-events-none rounded-3xl shadow-[inset_0px_0px_40px_0px_#582d86,inset_0px_0px_20px_0px_#f85cce]" />
              <p className="text-[#0a0b0e] text-lg md:text-xl font-bold mb-2">기본 멤버십</p>
              <p className="text-[#0a0b0e] text-3xl md:text-[36px] font-extrabold mb-4 md:mb-6">29,000원</p>
              <p className="text-[#abaeb3] text-sm md:text-base leading-[1.48] mb-4 md:mb-6 tracking-[-0.4px]">
                적립부터 마케팅까지 모든 기능을 제한 없이 이용하세요.
              </p>
              <Button className="h-auto w-full bg-gradient-to-r from-[#582d86] via-[#f85cce] to-[#ff6643] text-white rounded-[14px] px-7 py-4 mb-4 md:mb-6 hover:opacity-90">
                시작하기
              </Button>
              <p className="text-[#abaeb3] text-xs md:text-sm mb-3 md:mb-4 tracking-[-0.4px]">기본 멤버십 지원 기능</p>
              <div className="space-y-3 md:space-y-4">
                {[
                  "태블릿 앱 (적립/이벤트) 무제한 사용",
                  "포인트/스탬프 적립 방식 선택 가능",
                  "룰렛/뽑기 게임 기능 제공",
                  "카카오 알림톡 자동 발송 시스템",
                  "사장님 관리자 페이지 제공",
                  "고객 데이터 분석 리포트"
                ].map((feature, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <img alt="체크" className="w-5 h-5 md:w-6 md:h-6 shrink-0" src={imgFrame} />
                    <p className="text-[#0a0b0e] text-sm md:text-base font-medium leading-[1.48] tracking-[-0.4px]">
                      {feature}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Success Cases Section */}
      <SuccessCasesSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Contact Form Section */}
      <section id="contact" className="mx-[60px] py-20 md:py-40 flex flex-col lg:flex-row items-center justify-between gap-[132px]">
        <div className="flex flex-col gap-6 md:gap-9 w-full lg:w-[650px]">
          <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.4] text-[#2d3541] tracking-[-1px]">
            직접 들어보면 확신이 생깁니다.
          </h2>
          <p className="text-[#354153] text-base md:text-xl leading-[1.48] tracking-[-0.4px]">
            글로 보는 것보다 한 번의 상담이 더 명쾌할 수 있습니다.<br />
            모아의 강력한 기능들이 실제 현장에서 어떻게 쓰이는지 생생하게 들려드릴게요.
          </p>
        </div>
        <div className="flex flex-col gap-5 w-full lg:w-[538px]">
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-3 h-[124px]">
              <Input
                placeholder="이름 입력"
                required
                className="bg-[#f0f2f4] border-0 rounded-[14px] px-5 py-4 h-auto text-base text-[#abaeb3] placeholder:text-[#abaeb3] tracking-[-0.064px] shadow-none ring-0 ring-offset-0 focus-visible:border-[1px] focus-visible:border-[#582d86] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
              />
              <Input
                placeholder="전화번호 입력"
                required
                className="bg-[#f0f2f4] border-0 rounded-[14px] px-5 py-4 h-auto text-base text-[#abaeb3] placeholder:text-[#abaeb3] tracking-[-0.064px] shadow-none ring-0 ring-offset-0 focus-visible:border-[1px] focus-visible:border-[#582d86] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
              />
            </div>
            <Input
              placeholder="지역선택"
              required
              className="bg-[#f0f2f4] border-0 rounded-[14px] px-5 py-4 h-auto text-base text-[#abaeb3] placeholder:text-[#abaeb3] tracking-[-0.064px] shadow-none ring-0 ring-offset-0 focus-visible:border-[1px] focus-visible:border-[#582d86] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
            />
            <Input
              placeholder="전화번호 입력"
              required
              className="bg-[#f0f2f4] border-0 rounded-[14px] px-5 py-4 h-auto text-base text-[#abaeb3] placeholder:text-[#abaeb3] tracking-[-0.064px] shadow-none ring-0 ring-offset-0 focus-visible:border-[1px] focus-visible:border-[#582d86] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
            />
            <Input
              placeholder="업종명 입력"
              required
              className="bg-[#f0f2f4] border-0 rounded-[14px] px-5 py-4 h-auto text-base text-[#abaeb3] placeholder:text-[#abaeb3] tracking-[-0.064px] shadow-none ring-0 ring-offset-0 focus-visible:border-[1px] focus-visible:border-[#582d86] focus-visible:outline-none focus-visible:ring-0 focus-visible:ring-offset-0 focus-visible:shadow-none"
            />
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <Checkbox id="terms" className="w-6 h-6" />
                <div className="flex items-center gap-2 text-sm tracking-[-0.4px]">
                  <Label htmlFor="terms" className="text-[#582d86] font-semibold cursor-pointer">
                    필수
                  </Label>
                  <Label htmlFor="terms" className="text-[#abaeb3] font-medium cursor-pointer">
                    개인정보 수집 · 이용 동의
                  </Label>
                </div>
              </div>
              <a href="#" className="text-[#abaeb3] text-sm font-medium underline tracking-[-0.4px] text-right">
                보기
              </a>
            </div>
            <Button className="h-auto bg-[#582d86] text-white rounded-[14px] px-7 py-4 w-full hover:bg-[#582d86]/90 text-base font-semibold leading-[1.28]">
              동의하고 문의하기
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#313d4b] py-10 md:py-20 px-4 md:px-[60px]">
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
