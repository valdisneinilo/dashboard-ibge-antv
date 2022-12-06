import React from "react";
import { Column } from "@ant-design/plots";
import { Props } from "./types";
import { ContainerTooltip } from "./styles";

const ChartRanger: React.FC<Props> = ({ data }) => {
  const config = {
    data,
    xField: "ano",
    yField: "valor",
    xAxis: {
      label: {
        autoRotate: false,
      },
    },
    slider: {
      start: 0,
      end: 0.5,
    },
    tooltip: {
      // fields: ["x", "y"],
      customContent: (title: any, data: any) => {
        const dataFormated = data[0]?.data;
        const unidade = data[0]?.data?.unidade;
        const classe = data[0]?.data?.unidade?.classe;
        console.log(data);
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

  return (
    <Column
      {...config}
      // onReady={(plot) => {
      //   plot.on("plot:click", (evt: any) => {
      //     const { x, y } = evt;
      //     const tooltipData = plot.chart.getTooltipItems({ x, y });
      //   });
      // }}
    />
  );
};

export default ChartRanger;
