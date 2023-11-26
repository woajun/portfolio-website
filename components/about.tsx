"use client";

import React, { ReactNode } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const B = ({ children }: { children: ReactNode }) => (
  <span className="font-bold">{children}</span>
);

const I = ({ children }: { children: ReactNode }) => (
  <span className="italic">{children}</span>
);

export default function About() {
  const { ref } = useSectionInView("자기소개");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>자기소개</SectionHeading>
      <p className="mb-3">
        인터넷 판매업체에서 송장출력 업무를 담당하며 <B>업무 자동화</B>를
        <I> 독학</I>했습니다. 주로 <B>엑셀 VBA</B>를 활용하여 매크로를 개발하는
        과정에서 능력을 발휘해, 이를 통해 <B>개발자로 진로를 선택</B>하게
        되었습니다. 3개월 동안의 국비지원 교육을 수료한 후, 아큐라소프트에
        입사하여 2년 1개월간 자사 솔루션 프론트엔드 개발에 참여했습니다. 그 후,
        디지털 치료제 개발사 오디엔에 입사하여 디지털 치료제 프론트엔드 개발에
        힘쓰고 있습니다.
      </p>
      <p>
        <B>논리적 사고</B>를 기반으로 문제를 해결하는 것에 흥미를 느껴, 현재의
        개발 업무에서도 큰 만족감을 느끼고 있습니다. 앞으로도{" "}
        <B>문제 해결 능력</B>과<B>창의성</B>을 바탕으로 새로운 기술과 도전에{" "}
        <I>열린 마음</I>으로 성장해 나가고자 합니다.
      </p>
    </motion.section>
  );
}
