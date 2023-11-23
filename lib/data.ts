import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

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
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
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
