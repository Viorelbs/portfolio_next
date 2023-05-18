import React from "react";
import Chart from "./Chart";
import Typed from "react-typed";
import TitleAnimation from "./TitleAnimation";
import AboutContent from "./AboutContent";

export default function About() {
  return (
    <div>
      <TitleAnimation title="Who is this guy?" />
      <div id="aboutme" className="grid grid-cols-2 items-center">
        <AboutContent />
        <Chart />
      </div>
    </div>
  );
}
