import { Tooltip } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";

interface Props {
  roles: string[];
  technologies: object[];
}
export default function ProjectBottom({ roles, technologies }: Props) {
  return (
    <div className="flex flex-wrap mt-4 gap-8">
      <div className="flex gap-3 text-lg">
        <strong className="text-gray-400">Role:</strong>
        {roles.map((role, idx) => (
          <span className="text-primary font-medium" key={idx}>
            {role}
          </span>
        ))}
      </div>
      <div className="flex gap-3 text-lg items-center">
        <strong className="text-gray-400">Technologies:</strong>
        {technologies.map((tech, idx) => (
          <Tooltip key={idx} content={Object.keys(tech)}>
            <Image
              src={Object.values(tech)[0].src}
              width={40}
              height={40}
              className="max-h-[30px] hover:scale-110 transition-all duration-300 cursor-pointer"
              alt={Object.keys(tech).join(",")}
            />
          </Tooltip>
        ))}
      </div>
      <div></div>
    </div>
  );
}
