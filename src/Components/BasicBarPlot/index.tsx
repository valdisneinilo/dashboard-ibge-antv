import React from "react";
import { Bar } from "@ant-design/plots";
import { Props } from "./types";

const BasicBarPlot: React.FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: "valor",
    yField: "ano",
    barWidthRatio: 0.8,
  };
  return <Bar {...config} />;
};

export default BasicBarPlot;
