import React, { useEffect, useState } from "react";
import avatarImg from "../../public/assets/images/avatar.webp";
import Image from "next/image";
import Link from "next/link";
import { AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { RiMenu2Line } from "react-icons/ri";
import useWidth from "@/hooks/useWidth";
import { Drawer } from "@material-tailwind/react";

export default function Navbar() {
  const { windowWidth } = useWidth();
  const [open, setOpen] = useState(false);
  const openDrawer = () => setOpen(true);
  const closeDrawer = () => setOpen(false);

  const nav = (
    <div className="lg:sticky top-[10vh] lg:flex-1 bg-secondary items-center px-2 py-10 flex flex-col justify-between  my-6 rounded-xl h-fit min-h-[80vh] z-50 w-[140px] ">
      <Image
        src={avatarImg.src}
        alt="avatar"
        width={90}
        height={90}
        className="rounded-full"
      />

      <div className="flex flex-col gap-3">
        <a href="#hero">Home</a>
        <a href="#aboutme">About me</a>
        <a href="#projectssection">Portfolio</a>
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

  const mobile = (
    <>
      <RiMenu2Line
        onClick={openDrawer}
        className="fixed top-[5vh] left-4 z-50 w-6 h-6"
      />
      <Drawer open={open} onClose={closeDrawer} className="p-4 bg-transparent">
        {nav}
      </Drawer>
    </>
  );
  return windowWidth < 960 ? mobile : <div className="mx-10">{nav}</div>;
}
