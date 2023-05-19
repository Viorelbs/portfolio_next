import React, { useRef } from "react";
import Chart from "./Chart";
import TitleAnimation from "../Common/TitleAnimation";
import AboutContent from "./AboutContent";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <TitleAnimation title="Who is this guy?" />
      <div
        id="aboutme"
        className="flex flex-wrap items-center max-w-[1700px] lg:mx-auto mx-4"
      >
        <motion.div
          className="flex-1"
          variants={{
            beforeAnimation: {
              y: 200,
            },
            afterAnimation: {
              y: 0,
            },
          }}
          transition={{ duration: 0.5 }}
          initial="beforeAnimation"
          whileInView="afterAnimation"
        >
          <AboutContent />
        </motion.div>
        <Chart />
      </div>
    </div>
  );
}
