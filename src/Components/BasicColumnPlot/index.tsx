import React, { useEffect, useState } from "react";
import { Column } from "@ant-design/charts";
import { Props } from "./types";
import { Container } from "./styles";

const BasicColumnPlot: React.FC<Props> = ({ data }) => {
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
    <Container>
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
    </Container>
  );
};

export default BasicColumnPlot;
