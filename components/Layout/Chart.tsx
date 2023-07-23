import React, { useEffect, useRef } from "react";
import * as echarts from "echarts";

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
        axisLabel: { interval: 0, rotate: -90 },
      },
      yAxis: {
        type: "value",
      },
      tooltip: "true",
      color: ["#FF5C00"],
      textStyle: {
        color: "#fff",
      },

      series: [
        {
          data: [80, 70, 85, 70, 84, 84, 80],
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
    <div className="flex grow flex-col items-center flex-1 w-full">
      <div ref={chartRef} style={{ width: "100%", height: "300px" }} />
    </div>
  );
}
