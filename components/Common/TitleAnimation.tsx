import React from "react";

export default function TitleAnimation({ title }: { title: string }) {
  return (
    <h2 className="text-3xl bg-secondary p-4 rounded-xl w-fit mx-auto mb-8 lg:mb-6 font-semibold">
      {title}
    </h2>
  );
}
