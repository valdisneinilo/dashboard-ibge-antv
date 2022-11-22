import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Column } from "@ant-design/plots";

const ChartRanger = () => {
  const data = [
    {
      type: "Furniture appliances",
      sales: 38,
      teste: 10,
    },
    {
      type: "Cereals, Oils and Non-staple food",
      sales: 52,
    },
    {
      type: "Fresh fruits",
      sales: 100,
    },
    {
      type: "Beauty care",
      sales: 145,
    },
    {
      type: "Baby products",
      sales: 48,
    },
    {
      type: "Imported food",
      sales: 38,
    },
    {
      type: "Food and drink",
      sales: 38,
    },
    {
      type: "Home cleaning",
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: "type",
    yField: "sales",
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0.1,
      end: 0.2,
    },
  };

  return (
    <Column
      {...config}
      onReady={(plot) => {
        plot.on("plot:click", (evt: any) => {
          console.log("evt", evt);
          const { x, y } = evt;
          const tooltipData = plot.chart.getTooltipItems({ x, y });
          console.log("tooltipData", tooltipData);
        });
      }}
    />
  );
};

export default ChartRanger;
