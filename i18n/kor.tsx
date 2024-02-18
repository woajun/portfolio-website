import { B, U, I } from "./fonts";
import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact, FaVuejs } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import ubuilderImg from "@/public/ubuilder.png";
import lotteRentacarImg from "@/public/lotte_rentacar.png";
import odnImg from "@/public/odn.png";
import portfolioYerieter from "@/public/portfolio_yerieter.png";
import portfolioAngelpodsImg from "@/public/portfolio_angelpods.png";
import portfolioCoordinateSearcherImg from "@/public/portfolio_coordinate_searcher.png";
import portfolioFitnessmanagerImg from "@/public/portfolio_fitnessmanager.png";
import portfolioJsongrouperImg from "@/public/portfolio_jsongrouper.png";
import portfolioRefectoringImg from "@/public/portfolio_refectoring.jpg";
import portfolioTaejowangunImg from "@/public/portfolio_taejowangun.png";
import portfolioWinterfoodiesImg from "@/public/portfolio_winterfoodies.png";
import portfolioJuniComponentsImg from "@/public/portfolio_juni_components.png";
import portfolioReactivityImg from "@/public/portfolio_reactivity.png";
import portfolioScheduleDividerImg from "@/public/portfolio_schedule_divider.png";

const kor = {
  home: "홈",
  about: "소개",
  projects: "프로젝트",
  skills: "스킬",
  experience: "경험",
  contact: "연락처",
  intro: (
    <>
      <B>안녕하세요, 저는 강준희 입니다.</B>{" "}
      저는 <B>3년 경력의 프론트엔드 개발자</B>{" "}
      입니다. 요즘 제가 관심있게 공부하는 분야는{" "}
      <U>React</U> 입니다.
    </>
  ),
  contactBtn: "연락하기 ",
  pdfDownload: "PDF 다운로드 ",
  aboutTitle: "소개",
  aboutBody: (
    <>
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
    </>
  ),
  projectTitle: "프로젝트",
  projectsData: [
    {
      title: "UBuilder",
      description:
        "(21.10 ~ 23.10) 자체 솔루션 프로그램의 공통 컴포넌트를 개발을 했습니다. 입력 폼에 필요한 여러가지 인풋, 데이트 피커, 트리 등을 개발했습니다.",
      tags: ["Vue3", "Typescript", "eslint-airbnb", "vite"],
      imageUrl: ubuilderImg,
    },
    {
      title: "롯데렌터카",
      description:
        "(22.09 ~ 22. 12) 롯데렌터카 여정 개선사업으로, 지도에서 렌트장소를 선택하는 기능을 개발했습니다. 네이버 지도, 구글지도로 위치지정, 차량 반납 불가장소 딤처리등을 개발했습니다.",
      tags: ["JSP"],
      imageUrl: lotteRentacarImg,
    },
    {
      title: "DTX-E66",
      description:
        "(23.11 ~ 23.12) 디지털치료제로, 리엑트를 사용한 웹 기반 사이트 입니다. ios, 플레이스토어 출시 예정입니다.",
      tags: ["React", "Typescript", "실명인증", "tailwind", "styled-components", "eslint-airbnb", "yarn", "chartjs", "antd", "Figma", "recoil", "vite", 'cordova'],
      imageUrl: odnImg,
    },
  ],
  skillsTitle: "스킬",
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
  portfolioTitle: "포트폴리오",
  portfolioData: [
    {
      title: "예리어터",
      period: "24.02 ~",
      description: "커플 다이어트 앱",
      experiences: [
        "ios, android 출시",
        "하이브리드 앱",
        "카카오톡 회원가입 & 로그인",
        "모바일 노티피케이션 사용",
        "모바일 카메라, 갤러리 기능사용",
        "친구추가",
        "채팅, 댓글",
        "웹 BO 개발",
        "1인 개발",
        "풀스택",
        "퍼블리싱",
,      ],
      tags: ["React", "Vite", "Supabase", "KakaoTalk", "Cordova", "ChartJs", "TanstackQuery", "husky", "TS", "ESLint"],
      image: portfolioYerieter, 
      links: [
        {
          type: "youtube",
          link: "https://youtu.be/U1G2fQTtxJs"
        },
        {
          type: "git",
          link: "https://github.com/woajun/jsp_angelPods_v2"
        },
      ],
    },
    {
      title: "엔젤팟",
      period: "21.05 ~ 21.09",
      description: "1. 무선이어폰 일련번호를 등록하여, 추후 분실 했을 때 일련번호 조회로 찾아주는 분실물 조회 서비스를 기획 및 개발 했습니다. 2. 1인 프로젝트로, jsp로 개발하여 aws를 사용해 배포까지 했습니다.",
      tags: ["JSP/Servlet", "Bootstrap", "Mysql", "AWS"],
      image: portfolioAngelpodsImg, 
      links: [
        {
          type: "youtube",
          link: "https://youtu.be/U1G2fQTtxJs"
        },
        {
          type: "git",
          link: "https://github.com/woajun/jsp_angelPods_v2"
        },
      ],
    },
    {
      title: "리팩토링 연습",
      period: "22.05 ~ 22.06",
      description: "리펙토링을 체화하기 위한 사이트를 제작했습니다.",
      tags: ["vue3", "typescript"],
      image: portfolioReactivityImg,
      links: [
        {
          type: "git",
          link: "https://github.com/woajun/Refactoring-vue3"
        },
      ],
    },
    {
      title: "reactivity",
      period: "22.07 ~ 22.07",
      description: "vue의 반응형을 바닐라 자바스크립트로 구현해 동작원리를 학습했습니다.",
      tags: ["vue3"],
      image: portfolioRefectoringImg,
      links: [
        {
          type: "git",
          link: "https://github.com/woajun/reactivity"
        },
      ],
    },
    {
      title: "schedule-divider",
      period: "22.08 ~ 23.01",
      description: "근무자들이 근무시간을 최대한 공평하게 분배하기 위한 프로그램입니다.",
      tags: ["vue3", "typescript"],
      image: portfolioScheduleDividerImg, 
      links: [
        {
          type: "git",
          link: "https://github.com/woajun/schedule-divider"
        },
      ],
    },
    {
      title: "json-grouper",
      period: "23.03 ~ 23.04",
      description: "업무의 편의를 위해 개발한 프로젝트로, 변수명 일관성 유지 및 엑셀파일을 특정 규칙으로 json 형태로 묶어 변환해주는 기능을 제공합니다.",
      tags: ["vue3", "typescript", "bootstrap"],
      image: portfolioJsongrouperImg, 
      links: [
        {
          type: "git",
          link: "https://github.com/woajun/json-grouper"
        },
      ],
    },
    {
      title: "피트니스 매니저",
      period: "23.01 ~ 23.05",
      description: "운동 시간을 측정하고 기록하는 프로그램입니다.",
      tags: ["vue3", "typescript", "Spring", "Chart.js"],
      image: portfolioFitnessmanagerImg, 
      links: [
        {
          type: "git",
          link: "https://github.com/woajun/fitness-manager"
        },
      ],
    },
    {
      title: "윈터푸디스",
      period: "23.08 ~ 23.09",
      description: "겨울 간식을 주문하고 찾아가는 모바일용 사이트입니다.",
      tags: ["React", "Next", "typescript", "Tailwind"],
      image: portfolioWinterfoodiesImg, 
      links: [
        {
          type: "git",
          link: "https://github.com/woajun/Winterfoodies"
        },
      ],
    },
    {
      title: "태조왕건",
      period: "23.08 ~ 23.12",
      description: "안쓰는 기기를 방범용으로 사용할 수 있게 해주는 사이트입니다.",
      tags: ["React", "Next", "typescript", "Tailwind"],
      image: portfolioTaejowangunImg, 
      links: [
        {
          type: "git",
          link: "https://github.com/TaejoWangun/TaejoWangun"
        },
      ],
    },
    {
      title: "위경도 검색기",
      period: "23.10 ~ 23.11",
      description: "위경도를 간편하게 검색할 수 있는 사이트입니다.",
      tags: ["React", "Next", "typescript", "Tailwind", "Geolocation"],
      image: portfolioCoordinateSearcherImg, 
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
      title: "juni components",
      period: "23.12 ~",
      description: "자주 사용하는 리엑트 공용 컴포넌트를 모아뒀습니다.",
      tags: ["React", "Tailwind", "Styled-Components"],
      image: portfolioJuniComponentsImg, 
      links: [
        {
          type: "git",
          link: "https://github.com/woajun/juni-components"
        },
        {
          type: "website",
          link: "https://singular-scone-6e565b.netlify.app/"
        },
      ],
    },
  ],
  experienceTitle: "경험",
  experiencesData: [
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
        "아큐라소프트가 진행하는 모든 사업의 바탕이 되는 솔루션인 UBuilder팀의 연구원으로 근무했습니다. 주로 vue3(ts)를 사용해서 UI 컴포넌트를 제작 및 업데이트하고 롤업하여 npm에 배포했습니다.",
      icon: React.createElement(FaVuejs),
      date: "2021 - 2023",
    },
    {
      title: "오디엔",
      location: "서울시 동대문구",
      description:
        "경희대학교 내에 위치한 서울바이오 허브에서 디지털치료제 프론트엔드 개발을 하고 있습니다.",
      icon: React.createElement(FaReact),
      date: "2023 - 현재",
    },
  ],
  contactTitle: "연락처",
  contactBody: (<>
    <a className="underline" href="mailto:woajun@naver.com">
      woajun@naver.com
    </a>{" "}
    으로 연락주시거나, 아래 폼을 작성해주세요.
    </>),
  contactEmail: "보내시는 분 이메일 주소",
  contactMessage: "작성 내용",
  submit: "전송 "
};

export default kor;