import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ubuilderImg from "@/public/ubuilder.png";
import lotteRentacarImg from "@/public/lotte_rentacar.png";
import odnImg from "@/public/odn.png";

export const experiencesData = [
  {
    title: "아재네한우집",
    location: "서울시 성동구",
    description:
      "한우 인터넷 판매업체에서 송장출력, 판매집계, 이익금 계산, 수율계산, 순수익계산 등을 엑셀프로그램으로 하다가, 매크로를 알게되어 VBA 로 매크로를 제작했습니다.",
    icon: React.createElement(CgWorkAlt),
    date: "2019",
  },
  {
    title: "국비지원교육",
    location: "서울시 강남구",
    description:
      "매크로 제작에 재미를 느껴 퇴사 후 국비지원과정을 통해 개발자로 전직했습니다.",
    icon: React.createElement(LuGraduationCap),
    date: "2021",
  },
  {
    title: "아큐라소프트",
    location: "서울시 성동구",
    description:
      "아큐라소프트가 진행하는 모든 사업의 바탕이 되는 솔루션인 UBuilder팀의 연구원으로 근무중에 있습니다. 주로 vue3(ts)를 사용해서 UI 컴포넌트를 제작 및 업데이트하고 롤업하여 npm에 배포하고 있습니다.",
    icon: React.createElement(FaVuejs),
    date: "2021 - 2023",
  },
  {
    title: "오디엔",
    location: "서울시 동대문구",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2023 - 현재",
  },
] as const;

export const projectsData = [
  {
    title: "UBuilder",
    description:
      "자체 솔루션 프로그램의 공통 컴포넌트를 개발을 했습니다. 입력 폼에 필요한 여러가지 인풋, 데이트 피커, 트리 등을 개발했습니다.",
    tags: ["Vue3", "Typescript"],
    imageUrl: ubuilderImg,
  },
  {
    title: "롯데렌터카",
    description:
      "롯데렌터카 여정 개선사업으로, 지도에서 렌트장소를 선택하는 기능을 개발했습니다. 네이버 지도, 구글지도로 위치지정, 차량 반납 불가장소 딤처리등을 개발했습니다.",
    tags: ["JSP"],
    imageUrl: lotteRentacarImg,
  },
  {
    title: "오디엔",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Typescript"],
    imageUrl: odnImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "JSP",
  "Vue3",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
] as const;
