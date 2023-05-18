import React from "react";
import { ContactDrawer } from "./ContactDrawer";
import BackgroundIcons from "./BackgroundIcons";
import { motion } from "framer-motion";

export default function HeroContent() {
  return (
    <div className="relative min-h-[90vh] grid place-content-center hero">
      <div className="bg-secondary p-6 rounded-xl">
        <motion.div
          variants={{
            initial: {
              y: -200,
            },
            normal: {
              y: 0,
            },
          }}
          initial="initial"
          animate="normal"
          transition={{
            duration: 1,
          }}
        >
          <h1 className="text-3xl font-medium">
            Hi there! <br />
            My name is <span className="text-primary">Viorel</span>, and I'm{" "}
            <br />A <span className="text-primary">web developer</span> and{" "}
            <span className="text-primary">UI/UX designer</span>{" "}
          </h1>
        </motion.div>
      </div>

      <ContactDrawer buttonType="primary" />
      <BackgroundIcons />
    </div>
  );
}
