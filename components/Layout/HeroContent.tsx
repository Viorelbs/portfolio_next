import React from "react";
import { ContactDrawer } from "./ContactDrawer";
import BackgroundIcons from "./BackgroundIcons";
import { motion } from "framer-motion";
import useWidth from "@/hooks/useWidth";

export default function HeroContent() {
  const { windowWidth } = useWidth();
  return (
    <div className="relative min-h-[90vh] grid place-content-center hero mx-4">
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
            duration: 0.5,
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
      {windowWidth > 960 ? <BackgroundIcons /> : null}
    </div>
  );
}
