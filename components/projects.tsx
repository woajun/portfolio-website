"use client";

import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";
import { useTranslate } from "@/i18n/useTranslate";

export default function Projects() {
  const { ref } = useSectionInView("#projects", 0.5);
  const { t } = useTranslate();
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>{t("projectTitle")}</SectionHeading>
      <div>
        {t("projectsData").map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
