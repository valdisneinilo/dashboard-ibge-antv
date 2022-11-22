import React from "react";
import { Column } from "@ant-design/plots";
import { Props } from "./types";

const ChartRanger: React.FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: "ano",
    yField: "valor",
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0,
      end: 0.5,
    },
  };

  return (
    <Column
      {...config}
      // onReady={(plot) => {
      //   plot.on("plot:click", (evt: any) => {
      //     const { x, y } = evt;
      //     const tooltipData = plot.chart.getTooltipItems({ x, y });
      //   });
      // }}
    />
  );
};

export default ChartRanger;
