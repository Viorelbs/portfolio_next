import { ProjectInterface } from "@/typings";

import React, { useState } from "react";
import ProjectTop from "./ProjectTop";
import ProjectBottom from "./ProjectBottom";
import ContributionBar from "../Common/ContributionBar";

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
  return (
    <div className="my-32">
      <ProjectTop
        title={title}
        link={link}
        macFrame={macFrame}
        phoneFrame={phoneFrame}
      />
      <ProjectBottom roles={roles} technologies={technologies} />
      <ContributionBar contribution={contribution} />
    </div>
  );
}
