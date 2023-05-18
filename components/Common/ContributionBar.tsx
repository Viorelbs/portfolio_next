import { Progress } from "@material-tailwind/react";
import React from "react";

interface Props {
  contribution: number;
}
export default function ContributionBar({ contribution }: Props) {
  return (
    <div className="mt-4 lg:max-w-[50vw]">
      <h6 className="font-semibold text-gray-400 text-lg">
        Contribution on project:
        <div className="flex gap-2 items-center">
          <Progress
            color="red"
            size="sm"
            value={contribution}
            className="bg-gray-700"
          />
          <span className="flex font-normal text-sm">
            {contribution} <span>%</span>
          </span>
        </div>
      </h6>
    </div>
  );
}
