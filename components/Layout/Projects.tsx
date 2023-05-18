import React from "react";
import TitleAnimation from "../Common/TitleAnimation";
import ProjectView from "./ProjectView";
import { ProjectsImages } from "@/data/data";

export default function Projects() {
  console.log(ProjectsImages);
  return (
    <div>
      {" "}
      <div id="projectssection" className="title">
        <TitleAnimation title="Some of the projects I took part in" />
      </div>
      <div className="max-w-[1700px] mx-auto">
        {ProjectsImages.map((project, idx) => (
          <ProjectView
            key={idx}
            macFrame={project.macFrame}
            phoneFrame={project.phoneFrame}
            contribution={project.contribution}
            roles={project.roles}
            title={project.title}
            link={project.link}
            technologies={project.technologies}
            gitLink={project.gitLink}
            personalProject={project.personalProject}
            description={project.description}
          />
        ))}
      </div>
    </div>
  );
}
