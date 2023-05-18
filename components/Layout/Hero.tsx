import React from "react";
import HeroContent from "./HeroContent";
import ScrollDownBtn from "../Common/ScrollDownBtn";
import BackgroundAnimation from "../Common/BackgroundAnimation";

// Culori de folosit pt form: #374151 input bg, from bg- #1F2937
export default function Hero() {
  return (
    <div id="hero">
      <BackgroundAnimation />
      <HeroContent />
      <div className="flex  justify-center">
        <ScrollDownBtn />
      </div>
    </div>
  );
}
