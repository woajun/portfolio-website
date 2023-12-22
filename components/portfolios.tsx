"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { useTranslate } from "@/i18n/useTranslate";
import Portfolio from "./portfolio";
import { StaticImageData } from "next/image";

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export type Portfolio = {
	title: string
  period: string
	description: string
	tags: string[]
	image: StaticImageData
	links: Array<{
		type: string
		link: string
	}>
}

export default function Portfolios() {
  const { ref } = useSectionInView("#portfolios");
  const { t } = useTranslate();
  const portfolios: Portfolio[] = t("portfolioData");
  return (
    <section
      id="portfolios"
      ref={ref}
      className="mb-28 max-w-[53rem] scroll-mt-28 sm:mb-40 text-sm"
    >
      <SectionHeading>{t("portfolioTitle")}</SectionHeading>
      <div>
        {portfolios.map((portfolio, index) => (
					<React.Fragment key={index}>
						<Portfolio {...portfolio} />
					</React.Fragment>
        ))}
      </div>
    </section>
  );
}
