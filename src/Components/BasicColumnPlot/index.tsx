import React from "react";
import { Column } from "@ant-design/charts";
import { Props } from "./types";

const BasicColumnPlot: React.FC<Props> = ({ data }) => {
  const config: any = {
    data,
    xField: "ano",
    yField: "valor",
    label: {
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
  };

  return <Column {...config} />;
};

export default BasicColumnPlot;
