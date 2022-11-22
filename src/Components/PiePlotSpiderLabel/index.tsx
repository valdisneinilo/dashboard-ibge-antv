import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Pie } from "@ant-design/plots";
import { Props } from "./types";

const PiePlotSpiderLabel: React.FC<Props> = ({ data }) => {
  const config = {
    appendPadding: 12,
    data,
    angleField: "valor",
    colorField: "ano",
    radius: 1,
    label: {
      type: "spider",
      labelHeight: 35,
      content: "{name}\n{percentage}",
    },
    interactions: [
      {
        type: "element-selected",
      },
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default PiePlotSpiderLabel;
