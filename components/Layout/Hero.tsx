import React from "react";
import ScrollDownBtn from "../Common/ScrollDownBtn";
import BackgroundAnimation from "../Common/BackgroundAnimation";
import ComputersCanvas from "@/canvas/Computers";

// Culori de folosit pt form: #374151 input bg, from bg- #1F2937
export default function Hero() {
  return (
    <div
      id="hero"
      className="relative w-full h-[90vh] pt-[200px] md:pt-0 md:h-screen mx-auto grid grid-rows-3"
    >
      <BackgroundAnimation />
      <div className="text-center self-end ">
        <h1 className="text-[30px] md:text-[40px] font-bold">
          Hi there! My name is <span className="text-primary">Viorel,</span>
          <br />
          and I'm a <span className="text-primary">Web Developer</span>
        </h1>
      </div>
      <div className="relative w-full h-[35vh] md:h-[80vh] mx-auto row-span-2 bottom-[10vh] md:bottom-[25vh]  ">
        <ComputersCanvas />
      </div>

      <div className="flex mb-6  justify-center  ">
        <ScrollDownBtn />
      </div>
    </div>
  );
}
