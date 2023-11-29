"use client";

import React, { ReactNode } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { useTranslate } from "@/i18n/useTranslate";

export default function About() {
  const { ref } = useSectionInView("#about");
  const { t } = useTranslate();
  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>{t('aboutTitle')}</SectionHeading>
      {t("aboutBody")}
    </motion.section>
  );
}
