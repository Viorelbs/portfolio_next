import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";
import Typed from "react-typed";

export default function Chart() {
  const chartRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const chartDom = chartRef.current;
    const myChart = echarts.init(chartDom! as HTMLDivElement);
    let option;

    option = {
      xAxis: {
        type: "category",
        data: [
          "JavaScript",
          "Typescript",
          "ReactJS",
          "NextJs",
          "CSS",
          "HTML",
          "Figma",
        ],
      },
      yAxis: {
        type: "value",
      },
      tooltip: "true",
      color: ["#3178C6"],
      textStyle: {
        color: "#fff",
      },
      series: [
        {
          data: [68, 54, 74, 58, 84, 87, 90, 100],
          type: "bar",
          largeThreshold: 300,
        },
      ],
    };

    option && myChart.setOption(option);

    return () => {
      myChart.dispose();
    };
  }, []);

  return (
    <div className="flex flex-[2] flex-col items-center">
      <h2 className="text-3xl bg-secondary p-4 rounded-xl">
        {
          <Typed
            strings={["My skillset"]}
            typeSpeed={20}
            backSpeed={30}
            loop={false}
          />
        }
      </h2>
      <div ref={chartRef} style={{ width: "100%", height: "400px" }} />
    </div>
  );
}
