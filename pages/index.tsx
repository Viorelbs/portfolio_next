import About from "@/components/Layout/About";
import { ContactDrawer } from "@/components/Layout/ContactDrawer";
import Hero from "@/components/Layout/Hero";
import Navbar from "@/components/Layout/Navbar";
import Projects from "@/components/Layout/Projects";
import { motion, useScroll, useSpring } from "framer-motion";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <main>
      <ContactDrawer buttonType="secondary" />
      <motion.div className="progress-bar" style={{ scaleX }} />
      <div className="flex">
        <Navbar />
        <div className=" space-y-40 flex-[8]">
          <Hero />
          <About />
          <Projects />
        </div>
      </div>
    </main>
  );
}
