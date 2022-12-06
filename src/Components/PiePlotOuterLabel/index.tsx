import React from "react";
import { Pie } from "@ant-design/plots";
import { Props } from "./types";
import { ContainerTooltip } from "./styles";

const PiePlotOuterLabel: React.FC<Props> = ({ data }) => {
  const config = {
    appendPadding: 10,
    data,
    angleField: "valor",
    colorField: "ano",
    radius: 0.6,
    label: {
      type: "outer",
    },
    interactions: [
      {
        type: "element-active",
      },
    ],
    tooltip: {
      // fields: ["x", "y"],
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
  return <Pie {...config} />;
};

export default PiePlotOuterLabel;
