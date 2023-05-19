import { StaticImageData } from "next/image";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import useWidth from "@/hooks/useWidth";

interface Props {
  link?: string;
  title: string;
  macFrame: StaticImageData;
  phoneFrame: StaticImageData;
}

export default function ProjectTop({
  link,
  title,
  macFrame,
  phoneFrame,
}: Props) {
  const { windowWidth } = useWidth();
  return (
    <div className="flex flex-col lg:grid  lg:grid-cols-7 mr-[5vw]">
      <div className="row-start-1 row-end-2 col-start-1 lg:col-end-2 lg:rotate-90 whitespace-nowrap w-fit h-full flex items-center justify-center m-auto text-primary font-medium text-lg">
        {link ? (
          <Link
            href={link}
            target="_blank"
            className="flex gap-2 items-center text-lg  group"
          >
            {title}
            <MdOutlineArrowRightAlt className="w-6 h-6 relative left-0 group-hover:left-2 transition-all duration-300" />
          </Link>
        ) : (
          <span>{title}</span>
        )}
      </div>
      <motion.div
        className="lg:col-start-2 lg:col-end-7 mt-4 lg:mt-0"
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
        <Image src={macFrame} alt={title} className="mx-auto" />
      </motion.div>
      {windowWidth > 960 ? (
        <motion.div
          className="col-start-7 col-end-8 justify-center flex items-center"
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
          <Image src={phoneFrame} alt={title} className="lg:max-w-[190px]" />
        </motion.div>
      ) : null}
    </div>
  );
}
