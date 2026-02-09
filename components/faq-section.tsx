"use client";

import { useState } from "react";

const dropdownIcon = "/icons/dropdown.svg";

const faqs = [
  {
    question: "포스기 기종과 상관이 있나요?",
    answer: "와이파이 기반이기 때문에 포스기 기종하고는 상관이 없습니다. 또한, 호환이 안 되므로 고장의 원인이 안 됩니다. 상호연동이 되면 포스기나, 모아 둘 중의 하나라도 고장 날 때 둘 다 고장이 나기 때문에 연동하지 않고 사용합니다.",
    isOpen: true,
  },
  {
    question: "가입하면 다음날 바로 사용할 수 있나요?",
    answer: "가입하시고 직원이 방문 후 태블릿 설치 및 테스트가 끝나야 사용할 수 있습니다.",
    isOpen: false,
  },
  {
    question: "프로그램 설치는 어떻게 하나요?",
    answer: "저희 직원이 방문하여 직접 설치하고 테스트까지 해서 이상 유무를 체크합니다.",
    isOpen: false,
  },
  {
    question: "상담은 어떻게 하나요?",
    answer: "하단에 지금 신청하기가 있습니다. 지역, 연락처 입력하시고 신청하시면, 가까운 지역의 담당자가 상담 드립니다.",
    isOpen: false,
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section id="support" className="py-20 md:py-40">
      <div className="max-w-[1320px] mx-auto px-4 md:px-[60px]">
        <h2 className="text-2xl md:text-[36px] font-extrabold leading-[1.4] text-[#0a0b0e] text-center mb-10 md:mb-20 tracking-[-1px]">
          자주묻는 질문
        </h2>

        <div className="space-y-5">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className={`rounded-3xl p-6 md:p-10 transition-all ${openIndex === idx ? "bg-[#f1f0fb]" : "bg-[#f0f2f4]"
                }`}
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? -1 : idx)}
                className="flex items-center justify-between w-full text-left"
              >
                <p
                  className={`text-lg md:text-2xl ${openIndex === idx ? "font-extrabold text-[#582d86]" : "font-bold text-[#2d3541]"} leading-[1.4] tracking-[-1px]`}
                >
                  {faq.question}
                </p>
                <div className={`transition-transform shrink-0 ${openIndex === idx ? "rotate-180" : ""}`}>
                  <img
                    alt="화살표"
                    className="w-6 h-6 md:w-[30px] md:h-[30px]"
                    src={dropdownIcon}
                  />
                </div>
              </button>
              {openIndex === idx && (
                <p className="text-[#354153] text-base md:text-lg font-medium leading-[1.48] tracking-[-0.4px] mt-4 md:mt-5">
                  {faq.answer}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
