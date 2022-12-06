import React from "react";
import { Line } from "@ant-design/plots";
import { Props } from "./types";
import { ContainerTooltip } from "./styles";

const SetStyleOfLinePlotPoint: React.FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: "ano",
    yField: "valor",
    label: {},
    point: {
      size: 5,
      shape: "diamond",
      style: {
        fill: "white",
        stroke: "#5B8FF9",
        lineWidth: 2,
      },
    },

    state: {
      active: {
        style: {
          shadowBlur: 4,
          stroke: "#000",
          fill: "red",
        },
      },
    },
    interactions: [
      {
        type: "marker-active",
      },
    ],
    tooltip: {
      showMarkers: false,
      customContent: (title: any, data: any) => {
        const dataFormated = data[0]?.data;
        const unidade = data[0]?.data?.unidade;
        const classe = data[0]?.data?.unidade?.classe;
        return (
          <ContainerTooltip>
            <h3>{dataFormated?.indicador}</h3>
            <h3>{dataFormated?.ano}</h3>
            <h3>
              {unidade?.id} : {dataFormated?.valor}
            </h3>
            <div>
              <sub>
                Classe:{" "}
                {classe === "N"
                  ? "unidade numérica"
                  : classe === "$"
                  ? "unidade monetária"
                  : classe === "P"
                  ? "unidade proporcional"
                  : "unidade genérica"}
              </sub>
            </div>
            <div>
              <sub>Multiplicador: {unidade?.multiplicador}</sub>
            </div>
          </ContainerTooltip>
        );
      },
    },
  };
  return <Line {...config} />;
};

export default SetStyleOfLinePlotPoint;
