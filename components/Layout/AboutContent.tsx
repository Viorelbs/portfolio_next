import React from "react";
import tailwindIcon from "../../public/assets/svg_icons/tailwind.svg";
import firebaseIcon from "../../public/assets/svg_icons/firebase.svg";
import cssIcon from "../../public/assets/svg_icons/css-file-format-document-extension-file-format-svgrepo-com.svg";
import htmlIcon from "../../public/assets/svg_icons/html5-svgrepo-com.svg";
import reactIcon from "../../public/assets/svg_icons/react-logo-programming-svgrepo-com.svg";
import figmaIcon from "../../public/assets/svg_icons/figma-svgrepo-com.svg";
import javaScriptIcon from "../../public/assets/svg_icons/javascript-fill-svgrepo-com.svg";
import tsIcon from "../../public/assets/svg_icons/ts.svg";
import nextIcon from "../../public/assets/svg_icons/next.svg";
import stripeIcon from "../../public/assets/svg_icons/stripe.svg";
import git from "../../public/assets/svg_icons/git.svg";
import recoil from "../../public/assets/svg_icons/recoil.svg";
import Image from "next/image";

export default function AboutContent() {
  return (
    <div>
      <h3 className="text-3xl mb-2 font-medium">
        I'm a web developer and UI/UX designer
      </h3>
      <p className="font-normal text-lg text-gray-500">
        with 2 years of experience, on a mission to create beautiful and
        user-friendly experiences. I work with React,NextJs,JavaScript,
        TypeScript, CSS, HTML. Let's make your website shine!
      </p>
      <div className="flex gap-4 flex-wrap mt-6">
        <Image
          src={reactIcon}
          width={40}
          height={40}
          alt="react icon"
          className="tech-icon"
        />
        <Image
          src={tsIcon}
          width={40}
          height={40}
          alt="Typescript icon"
          className="tech-icon"
        />
        <Image
          width={40}
          height={40}
          src={nextIcon}
          alt="nextjs icon"
          className="tech-icon"
        />
        <Image
          src={tailwindIcon}
          width={40}
          height={40}
          alt="tailwind icon"
          className="tech-icon"
        />
        <Image
          src={git}
          alt="html icon"
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image
          alt="javascript icon"
          src={javaScriptIcon}
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image
          src={figmaIcon}
          alt="figma icon"
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image
          src={firebaseIcon}
          alt="firebase icon"
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image
          src={cssIcon}
          alt="css icon"
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image
          src={htmlIcon}
          alt="html icon"
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image
          src={stripeIcon}
          alt="html icon"
          width={40}
          height={40}
          className="tech-icon"
        />
        <Image
          src={recoil}
          alt="html icon"
          width={15}
          height={20}
          className="tech-icon"
        />
      </div>
    </div>
  );
}
