import React, { useEffect, useState } from "react";
import { Column } from "@ant-design/charts";
import { IData, IDados } from "./types";

const DemoColumn: React.FC = () => {
  const [pais, setPais] = useState(["BR"]);
  const [indicador, setIndicador] = useState("77820");
  const [data, setData] = useState<IData[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/${indicador}`;

  useEffect(() => {
    setData([]);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        data[0].series[0].serie.forEach((item: IDados) => {
          if (Object.values(item)[0] !== null) {
            setData((dados) => [
              ...dados,
              {
                ano: Object.keys(item)[0],
                valor: Number(Object.values(item)[0]),
              },
            ]);
          }
        });
        setTitulo(data[0].indicador);
      });
  }, [pais, indicador, url]);

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
    <div>
      <h1>{titulo.split("-")[0]}</h1>
      <h2>{titulo.split("-")[1]}</h2>
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
    </div>
  );
};

export default DemoColumn;
