import React from "react";
import Image from "next/image";
import { Tooltip } from "@material-tailwind/react";
import { logos } from "@/data/data";

export default function AboutContent() {
  return (
    <div>
      <h3 className="text-3xl mb-2 font-medium">
        I'm a web developer and UI/UX designer
      </h3>
      <p className="font-normal text-lg text-gray-500 max-w-[1000px]">
        with 2 years of experience, on a mission to create beautiful and
        user-friendly experiences. I work with React, NextJs, JavaScript,
        TypeScript, CSS, HTML. Let's make your website shine!
      </p>
      <div className="flex gap-4 flex-wrap mt-6">
        {logos.map((logo, idx) => (
          <Tooltip key={idx} content={Object.keys(logo)}>
            <Image
              src={Object.values(logo)[0].src}
              width={35}
              height={35}
              alt={Object.keys(logo).join(",")}
              className="tech-icon max-h-[35px] max-w-[35px]"
            />
          </Tooltip>
        ))}
      </div>
    </div>
  );
}
