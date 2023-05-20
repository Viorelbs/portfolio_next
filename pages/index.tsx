import About from "@/components/Layout/About";
import { ContactDrawer } from "@/components/Layout/ContactDrawer";
import Hero from "@/components/Layout/Hero";
import Navbar from "@/components/Layout/Navbar";
import Projects from "@/components/Layout/Projects";
import { motion, useScroll, useSpring } from "framer-motion";
import Head from "next/head";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <Head>
        <title>Viorel Developer</title>
        {/* HTML Meta Tags */}
        <meta
          name="description"
          content="I'm a web developer and UI/UX designer
          with 2 years of experience, on a mission to create beautiful and user-friendly experiences. I work with React, NextJs, JavaScript, TypeScript, CSS, HTML. Let's make your website shine!"
        />
        <meta
          name="keywords"
          content="ui/ux design, web design, web development, web, design, frontend, backend"
        />

        <link rel="icon" href="/favicon.ico" />
      </Head>
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
    </>
  );
}
