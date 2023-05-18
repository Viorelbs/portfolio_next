import React from "react";
import Typed from "react-typed";

export default function TitleAnimation({ title }: { title: string }) {
  return (
    <h2 className="text-3xl bg-secondary p-4 rounded-xl w-fit mx-auto mb-4 font-semibold">
      {title}
    </h2>
  );
}
