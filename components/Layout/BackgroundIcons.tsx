import React from "react";
import tailwindIcon from "../../public/assets/svg_icons/tailwind.svg";
import reactIcon from "../../public/assets/svg_icons/react-logo-programming-svgrepo-com.svg";
import figmaIcon from "../../public/assets/svg_icons/figma-svgrepo-com.svg";
import javaScriptIcon from "../../public/assets/svg_icons/javascript-fill-svgrepo-com.svg";
import tsIcon from "../../public/assets/svg_icons/ts.svg";
import nextIcon from "../../public/assets/svg_icons/next.svg";
import Image from "next/image";

export default function BackgroundIcons() {
  return (
    <div className="absolute top-0 left-0 right-0 bottom-0 m-auto md:max-w-[70vw]  md:max-h-[90vh] -z-10">
      <Image
        src={tsIcon}
        width={60}
        height={60}
        alt="Typescript icon"
        className="absolute left-[15%] top-[25%]"
      />
      <Image
        width={60}
        height={60}
        src={nextIcon}
        alt="nextjs icon"
        className="absolute top-[10%] left-0 right-0 mx-auto"
      />
      <Image
        src={tailwindIcon}
        width={60}
        height={60}
        alt="tailwind icon"
        className="absolute top-[25%] right-[15%]"
      />
      <Image
        src={reactIcon}
        width={60}
        height={60}
        alt="react icon"
        className="absolute left-[15%] bottom-[25%]"
      />
      <Image
        alt="javascript icon"
        src={javaScriptIcon}
        width={60}
        height={60}
        className="absolute bottom-[10%] left-0 right-0 mx-auto"
      />
      <Image
        src={figmaIcon}
        alt="figma icon"
        width={60}
        height={60}
        className="absolute right-[15%] bottom-[25%]"
      />
    </div>
  );
}
