import React from "react";
import BackgroundIcons from "./BackgroundIcons";
import HeroContent from "./HeroContent";
import ScrollDownBtn from "../Common/ScrollDownBtn";
import BackgroundAnimation from "../Common/BackgroundAnimation";
import { useRecoilState } from "recoil";
import { formValues } from "@/atoms/FormValues";

// Culori de folosit pt form: #374151 input bg, from bg- #1F2937
export default function Hero() {
  return (
    <div className="flex-[8] ">
      <BackgroundAnimation />
      <HeroContent />
      <div className="flex  justify-center">
        <ScrollDownBtn />
      </div>
    </div>
  );
}
