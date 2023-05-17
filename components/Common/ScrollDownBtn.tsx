import Link from "next/link";
import React from "react";
import { BsArrowDown } from "react-icons/bs";

export default function ScrollDownBtn() {
  return (
    <Link href="#about" className="flex flex-col items-center justify-center ">
      scroll
      <BsArrowDown className="bounce-anim text-primary !w-5 !h-5" />
    </Link>
  );
}
