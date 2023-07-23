import React from "react";
import { BsArrowDown } from "react-icons/bs";

export default function ScrollDownBtn() {
  const handleClick = (
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    event.preventDefault();
    const target = document.getElementById("aboutme");
    const offset = 150; // Adjust the offset as needed

    if (target) {
      const targetPosition =
        target.getBoundingClientRect().top + window.pageYOffset;
      window.scroll({
        top: targetPosition - offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <a
      href="#aboutme"
      onClick={handleClick}
      className="flex flex-col items-center justify-center "
    >
      scroll
      <BsArrowDown className="bounce-anim text-primary !w-5 !h-5" />
    </a>
  );
}
