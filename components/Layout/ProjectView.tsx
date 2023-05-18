import { ProjectInterface } from "@/typings";

import React, { LegacyRef, useState } from "react";
import ProjectTop from "./ProjectTop";
import ProjectBottom from "./ProjectBottom";
import dynamic from "next/dynamic";
import Loader from "../Common/Loader";
import { useInView } from "react-intersection-observer";
import ContributionBar from "../Common/ContributionBar";
import { Chip } from "@material-tailwind/react";
import Link from "next/link";

const DynamicContributionBar = dynamic(
  () => import("../Common/ContributionBar"),
  {
    loading: () => <Loader size={5} />,
  }
);

export default function ProjectView({
  roles,
  technologies,
  phoneFrame,
  macFrame,
  title,
  gitLink,
  link,
  contribution,
  personalProject,
  description,
}: ProjectInterface) {
  const { ref, inView }: any = useInView({
    triggerOnce: true,
  });

  return (
    <div className="my-32" ref={ref}>
      <ProjectTop
        title={title}
        link={link}
        macFrame={macFrame}
        phoneFrame={phoneFrame}
      />
      <div className="flex gap-3">
        {personalProject ? (
          <Chip
            variant="outlined"
            color="deep-orange"
            value="Personal Project"
          />
        ) : null}
        {gitLink ? (
          <Link href={gitLink} target="_blank">
            <Chip color="amber" value="Git Repository" variant="outlined" />
          </Link>
        ) : null}
      </div>
      <ProjectBottom roles={roles} technologies={technologies} />
      {inView ? <DynamicContributionBar contribution={contribution} /> : null}
    </div>
  );
}
