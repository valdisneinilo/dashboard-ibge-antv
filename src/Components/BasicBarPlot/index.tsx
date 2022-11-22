import React from "react";
import { Bar } from "@ant-design/plots";
import { Props } from "./types";

const DemoBar: React.FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: "valor",
    yField: "ano",
    barWidthRatio: 0.8,
  };
  return (
    <div>
      <Bar {...config} />
    </div>
  );
};

export default DemoBar;
