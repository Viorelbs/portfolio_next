import React from "react";

export default function BackgroundAnimation() {
  const CircleLength = 10;
  const CircleArray = [...Array(CircleLength).keys()];

  return (
    <div className="absolute -z-20 w-full min-h-[110vh]">
      <ul className="circles">
        {CircleArray.map((idx) => (
          <li key={idx}></li>
        ))}
      </ul>
    </div>
  );
}
