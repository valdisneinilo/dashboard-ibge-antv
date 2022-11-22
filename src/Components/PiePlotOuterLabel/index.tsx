import React from "react";
import { Pie } from "@ant-design/plots";
import { Props } from "./types";

const PiePlotOuterLabel: React.FC<Props> = ({ data }) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: "valor",
    colorField: "ano",
    radius: 0.8,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
  };
  return <Pie {...config} />;
};

export default PiePlotOuterLabel;
