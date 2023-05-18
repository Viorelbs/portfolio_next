import React from "react";
import Typed from "react-typed";

export default function TitleAnimation({ title }: { title: string }) {
  return (
    <h2 className="text-3xl bg-secondary p-4 rounded-xl w-fit mx-auto mb-4 font-semibold">
      {<Typed strings={[title]} typeSpeed={20} backSpeed={30} loop={false} />}
    </h2>
  );
}
