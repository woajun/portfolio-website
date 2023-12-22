import { B, U, I } from "./fonts";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kor from "./kor";
import ubuilderImg from "@/public/ubuilder.png";
import lotteRentacarImg from "@/public/lotte_rentacar.png";
import odnImg from "@/public/odn.png";
import porftfolioAngelpodsImg from "@/public/portfolio_angelpods.png";
import porftfolioCoordinateSearcherImg from "@/public/portfolio_coordinate_searcher.png";
import porftfolioFitnessmanagerImg from "@/public/portfolio_fitnessmanager.png";
import porftfolioJsongrouperImg from "@/public/portfolio_jsongrouper.png";
import porftfolioRefectoringImg from "@/public/portfolio_refectoring.jpg";
import porftfolioTaejowangunImg from "@/public/portfolio_taejowangun.png";
import porftfolioWinterfoodiesImg from "@/public/portfolio_winterfoodies.png";
import porftfolioJuniComponentsImg from "@/public/portfolio_juni_components.png";
import porftfolioReactivityImg from "@/public/portfolio_reactivity.png";

const eng: typeof kor = {
  home: "home",
  about: "about",
  projects: "projects",
  skills: "skills",
  experience: "experience",
  contact: "contact",
  intro: (
    <>
      <B>Hello, I'm Junhui Kang.</B> I am a{" "}
      <B>
        front-end developer with 3 years of experience.
      </B>{" "}
      These days, the area I am interested in studying is{" "}
      <U>React</U>.
    </>
  ),
  contactBtn: "Contact ",
  pdfDownload: "PDF Download ",
  aboutTitle: "About",
  aboutBody: (
    <>
      <p className="mb-3">
        Responsible for invoice generation at an online sales company, I self-taught <B>workflow automation</B>. Through self-study, I particularly excelled in developing macros using <B>Excel VBA</B>, which eventually led me to choose a career path as a <B>developer</B>. After completing a 3-month government-supported training, I joined AcuSoft, contributing to the front-end development of our in-house solutions for 2 years and 1 month. Subsequently, I dedicated my efforts to front-end development for digital therapeutic solutions at ODN, a digital therapeutic development company.
      </p>
      <p>
        Driven by a passion for solving problems based on <B>logical reasoning</B>, I find great satisfaction in my current development work. Looking ahead, I aspire to continue growing with an <I>open mind</I> towards new technologies and challenges, leveraging my <B>problem-solving skills</B> and <B>creativity</B>.
      </p>
    </>
  ),
  projectTitle: "Project",
  projectsData: [
    {
      title: "UBuilder",
      description:
      "(21.10 ~ 23.10) Developed common components for the in-house solution program. Implemented various inputs, date pickers, trees, and more for input forms.",
      tags: ["Vue3", "Typescript"],
      imageUrl: ubuilderImg,
    },
    {
      title: "Lotte Rentacar",
      description:
      "(22.09 ~ 22. 12) Contributed to the Lotte Rentacar journey improvement project by developing a feature for selecting rental locations on the map. Implemented location selection using Naver and Google Maps.",
      tags: ["JSP"],
      imageUrl: lotteRentacarImg,
    },
    {
      title: "DTX-E66",
      description: "(23.11 ~ 23.12) A digital therapeutic, web-based platform built using React. Scheduled for release on iOS and the Play Store.",
      tags: ["React", "Typescript", "Real-name Authentication", "Tailwind", "Styled-components", "ESLint Airbnb", "Yarn", "Chart.js", "Ant Design", "Figma", "Recoil", "Vite"],
      imageUrl: odnImg
    }
  ],
  skillsTitle: "Skills",
  skillsData: [
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
  ],
  portfolioTitle: "Portfolio",
portfolioData: [
  {
    title: "Angel Pods",
    period: "21.05 ~ 21.09",
    description: "1. Planned and developed a service for registering wireless earphone serial numbers and facilitating the retrieval of lost items through serial number lookup. 2. Solely developed using JSP and deployed on AWS.",
    tags: ["JSP/Servlet", "Bootstrap", "MySQL", "AWS"],
    image: porftfolioAngelpodsImg, 
    links: [
      {
        type: "youtube",
        link: ""
      },
      {
        type: "git",
        link: ""
      },
    ],
  },
  {
    title: "Refactoring Exercise",
    period: "22.05 ~ 22.06",
    description: "Designed and developed a site for practicing refactoring.",
    tags: ["JSP/Servlet", "Bootstrap", "MySQL", "AWS"],
    image: porftfolioReactivityImg,
    links: [
      {
        type: "git",
        link: "https://github.com/woajun/Refactoring-vue3"
      },
    ],
  },
  {
    title: "Reactivity (22.07)",
    period: "22.07",
    description: "Studied the principles of reactivity by implementing Vue's reactivity in vanilla JavaScript.",
    tags: ["Vanilla JavaScript", "Vue", "Reactivity"],
    image: porftfolioRefectoringImg,
    links: [
      {
        type: "git",
        link: "https://github.com/woajun/reactivity"
      },
    ],
  },
  {
    title: "Schedule Divider (22.08 ~ 23.01)",
    period: "22.08 ~ 23.01",
    description: "Developed a program for fair distribution of working hours among employees.",
    tags: ["React", "Redux", "Firebase"],
    image: porftfolioAngelpodsImg, 
    links: [
      {
        type: "git",
        link: "https://github.com/woajun/schedule-divider"
      },
    ],
  },
  {
    title: "JSON Grouper (23.03 ~ 23.04)",
    period: "23.03 ~ 23.04",
    description: "Developed a project for convenience in naming variables and converting Excel files to JSON format following specific rules.",
    tags: ["Node.js", "JavaScript", "Private"],
    image: porftfolioJsongrouperImg, 
    links: [
      {
        type: "git",
        link: "https://github.com/woajun/json-grouper"
      },
    ],
  },
  {
    title: "Fitness Manager (23.01 ~ 23.05)",
    period: "23.01 ~ 23.05",
    description: "Program for measuring and recording exercise time.",
    tags: ["React", "Firebase", "Chart.js"],
    image: porftfolioFitnessmanagerImg, 
    links: [
      {
        type: "git",
        link: "https://github.com/woajun/fitness-manager"
      },
    ],
  },
  {
    title: "Winter Foodies",
    period: "23.08 ~ ",
    description: "Mobile site for ordering and picking up winter snacks.",
    tags: ["React", "Firebase", "Mobile"],
    image: porftfolioWinterfoodiesImg, 
    links: [
      {
        type: "git",
        link: "https://github.com/woajun/Winterfoodies"
      },
    ],
  },
  {
    title: "Taejo Wangun",
    period: "23.08 ~ ",
    description: "Site for using unused devices as security devices.",
    tags: ["React", "Firebase", "Security"],
    image: porftfolioTaejowangunImg, 
    links: [
      {
        type: "git",
        link: "https://github.com/TaejoWangun/TaejoWangun"
      },
    ],
  },
  {
    title: "Coordinate Searcher",
    period: "23.10 ~ ",
    description: "Site for easily searching latitude and longitude.",
    tags: ["React", "Firebase", "Geolocation"],
    image: porftfolioCoordinateSearcherImg, 
    links: [
      {
        type: "git",
        link: "https://github.com/woajun/kakao-coordinate-searcher"
      },
      {
        type: "website",
        link: "https://latlongsearch.netlify.app/"
      },
    ],
  },
  {
    title: "Juni Components",
    period: "23.12",
    description: "Collection of frequently used React components.",
    tags: ["React", "Tailwind", "Styled-Components"],
    image: porftfolioJuniComponentsImg, 
    links: [
      {
        type: "git",
        link: ""
      },
      {
        type: "website",
        link: ""
      },
    ],
  },
],
  experienceTitle: "Experience",
    experiencesData: [
    {
      title: "Ajae Hanwoo House",
      location: "Seongdong-gu, Seoul",
      description:
        "While working at an online Hanwoo (Korean beef) sales company, I handled tasks such as invoice generation, sales aggregation, profit calculation, yield calculation, and net profit calculation using an Excel program. Discovered macros and created macros using VBA.",
      icon: React.createElement(CgWorkAlt),
      date: "2019",
    },
    {
      title: "Government-Supported Education",
      location: "Gangnam-gu, Seoul",
      description:
        "Found joy in macro creation and transitioned to a developer role through a government-supported program after leaving my previous job.",
      icon: React.createElement(LuGraduationCap),
      date: "2021",
    },
    {
      title: "AccuraSoft",
      location: "Seongdong-gu, Seoul",
      description:
        "Currently working as a researcher in the UBuilder team at AcuSoft, contributing to the foundation of all business activities. Mainly responsible for creating and updating UI components using Vue3 (TypeScript), rolling them up, and deploying to npm.",
      icon: React.createElement(FaVuejs),
      date: "2021 - 2023",
    },
    {
      title: "ODN",
      location: "Dongdaemun-gu, Seoul",
      description:
        "Currently serving as a full-stack developer freelancer at ODN. My tech stack includes React, Next.js, TypeScript, Tailwind, Prisma, and MongoDB. Open to full-time opportunities.",
      icon: React.createElement(FaReact),
      date: "2023 - Present",
    },
  ],
  contactTitle: "Contact me",
  contactBody: (<>
    Please contact me directly at{" "}
    <a className="underline" href="mailto:woajun@naver.com">
      woajun@naver.com
    </a>{" "}
    or through this form.
    </>),
  contactEmail: "Your email",
  contactMessage: "Your message",
  submit: "Submit "
}

export default eng;