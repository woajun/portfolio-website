import { B, U, I } from "./fonts";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import kor from "./kor";
import ubuilderImg from "@/public/ubuilder.png";
import lotteRentacarImg from "@/public/lotte_rentacar.png";
import odnImg from "@/public/odn.png";

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
      "Developed common components for the in-house solution program. Implemented various inputs, date pickers, trees, and more for input forms.",
      tags: ["Vue3", "Typescript"],
      imageUrl: ubuilderImg,
    },
    {
      title: "Lotte Rentacar",
      description:
      "Contributed to the Lotte Rentacar journey improvement project by developing a feature for selecting rental locations on the map. Implemented location selection using Naver and Google Maps.",
      tags: ["JSP"],
      imageUrl: lotteRentacarImg,
    },
    {
      title: "ODN",
      description:
        "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
      tags: ["React", "Typescript"],
      imageUrl: odnImg,
    },
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