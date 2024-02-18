"use client";

import { useRef } from "react";
import Image, { StaticImageData } from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { FaGithubSquare, FaYoutube  } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

type PortfolioProps = {
    title: string
    period: string
    description: string
    tags: string[]
    image: StaticImageData
    links: Array<{
        type: string
        link: string
    }>
    experiences?: string[]
};

export default function Portfolio({
    title,
    period,
    description,
    tags,
    image,
    links,
    experiences
}: PortfolioProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 group sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[65%] flex flex-col h-full sm:group-even:ml-[12rem]">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="">{period}</p>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap gap-2 mt-4">
            {experiences?.map((experience, index) => (
              <li
                className="bg-slate-500/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {experience}
              </li>
            ))}
          </ul>
          <ul className="flex flex-wrap gap-2 mt-4">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
          <div className="flex gap-2 pt-2">
            {links.map((e) => {
              let icon = null;
              switch (e.type) {
                case 'website':
                  icon = <CgWebsite />
                  break;
                case 'git':
                  icon = <FaGithubSquare />
                  break;
                case 'youtube':
                  icon = <FaYoutube />
                  break;
                default:
                  break;
              }
              
              return icon && (
                <a
                  key={e.link}
                  className="bg-white p-2 text-gray-700 flex items-center text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
                  href={e.link}
                  target="_blank"
                >
                  {icon}
                </a>
              )})}
          </div>

        </div>

        <Image
          src={image}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 right-0 w-[14.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-0"
        />
      </section>
    </motion.div>
  );
}
