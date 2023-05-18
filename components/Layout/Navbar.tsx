import React from "react";
import avatarImg from "../../public/assets/images/avatar.webp";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Navbar() {
  return (
    <div className="sticky top-[10vh] flex-1 bg-secondary items-center px-2 py-10 flex flex-col justify-between mx-10 my-6 rounded-xl h-fit min-h-[80vh] ">
      <Image
        src={avatarImg.src}
        alt="avatar"
        width={90}
        height={90}
        className="rounded-full"
      />

      <div className="flex flex-col gap-3">
        <Link href="#hero">Home</Link>
        <Link href="#aboutme">About me</Link>
        <Link href="#projectssection">Portfolio</Link>
      </div>

      <div className="flex space-x-2">
        <Link target="_blank" href="mailto:bviorel54@gmail.com">
          <AiOutlineMail className="text-white hover:text-primary text-lg w-5 h-5" />
        </Link>
        <Link
          target="_blank"
          href="https://www.linkedin.com/in/viorel-binciu-265a98216/"
        >
          <AiFillLinkedin className="text-white hover:text-primary w-5 h-5" />
        </Link>
      </div>
    </div>
  );
}
