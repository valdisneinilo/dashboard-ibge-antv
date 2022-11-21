import React, { useEffect, useState } from "react";
import { Column } from "@ant-design/charts";
import { Props } from "./types";

const DemoColumn: React.FC<Props> = ({ data, titulo }) => {
  const config = {
    data,
    xField: "ano",
    yField: "valor",
    label: {
      // position: 'middle',
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
  };

  return (
    <div>
      <h1>{titulo.split("-")[0]}</h1>
      <h2>{titulo.split("-")[1]}</h2>
      <Column
        {...config}
        onReady={(plot) => {
          plot.on("plot:click", (evt: any) => {
            const { x, y } = evt;
            const { xField } = plot.options;
            const tooltipData = plot.chart.getTooltipItems({ x, y });
            console.log("tooltipData", tooltipData);
          });
        }}
      />
    </div>
  );
};

export default DemoColumn;
