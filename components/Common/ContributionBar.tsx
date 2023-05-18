import { Progress } from "@material-tailwind/react";
import React, { useEffect, useState } from "react";

interface Props {
  contribution: number;
}

export default function ContributionBar({ contribution }: Props) {
  const [contributionValue, setContributionValue] = useState(0);

  //   Making contribution bar animation
  useEffect(() => {
    const increment = 1;
    const intervalTime = 3000 / contribution;
    const interval = setInterval(() => {
      setContributionValue((prevCount) => {
        const newValue = prevCount + increment;
        if (newValue >= contribution) {
          clearInterval(interval);
          return contribution;
        }
        return newValue;
      });
    }, intervalTime);

    return () => {
      clearInterval(interval);
    };
  }, [contribution]);

  return (
    <div className="mt-4 lg:max-w-[50vw]">
      <h6 className="font-semibold text-gray-400 text-lg">
        Contribution on project:
        <div className="flex gap-2 items-center">
          <Progress
            color="red"
            size="sm"
            value={contributionValue}
            className="bg-gray-700"
          />
          <span className="flex font-normal text-sm">
            {contributionValue} <span>%</span>
          </span>
        </div>
      </h6>
    </div>
  );
}
