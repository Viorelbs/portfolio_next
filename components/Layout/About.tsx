import React, { useRef } from "react";
import Chart from "./Chart";
import TitleAnimation from "../Common/TitleAnimation";
import AboutContent from "./AboutContent";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div>
      <TitleAnimation title="Who is this guy?" />
      <div id="aboutme" className="grid grid-cols-2 items-center">
        <motion.div
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
        <motion.div
          variants={{
            beforeAnimation: {
              x: 200,
            },
            afterAnimation: {
              x: 0,
            },
          }}
          transition={{ duration: 0.5 }}
          initial="beforeAnimation"
          whileInView="afterAnimation"
        >
          <Chart />
        </motion.div>
      </div>
    </div>
  );
}
