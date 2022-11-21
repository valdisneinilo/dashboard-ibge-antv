import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Bar } from "@ant-design/plots";
import { Types } from "@antv/g2";

interface Config {
  data: {
    year: string;
    value: number;
  }[];
  xField: string;
  yField: string;
  seriesField: string;
  legend: {
    position:
      | "top-left"
      | "top"
      | "top-right"
      | "right"
      | "right-top"
      | "right-bottom"
      | "left"
      | "left-top"
      | "left-bottom"
      | "bottom"
      | "bottom-left"
      | "bottom-right"
      | undefined;
    background?: {
      padding: number;
      style: {
        fill?: string;
        fillOpacity?: number;
        stroke?: string;
        lineWidth?: number;
        lineDash?: number[];
        lineOpacity?: number;
        opacity?: number;
        shadowColor?: string;
        shadowBlur?: number;
        shadowOffsetX?: number;
        shadowOffsetY?: number;
        cursor?: string;
      };
    };
  };
}

interface UF {
  id: number;
  nome: string;
  regiao: {
    id: number;
    nome: string;
    sigla: string;
  };

  sigla: string;
}

interface IData {
  year: string;
  value: number;
}

type IDados = { [key: number]: string };

const DemoBar = () => {
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
            setData((dados: any) => [
              ...dados,
              {
                year: Object.keys(item)[0],
                value: Number(Object.values(item)[0]),
              },
            ]);
          }
        });
        setTitulo(data[0].indicador);
      });
  }, [pais, indicador, url]);

  const config: Config = {
    data,
    xField: "value",
    yField: "year",
    seriesField: "year",
    legend: {
      position: "top-right",
    },
  };

  return (
    <div style={{ padding: "10px" }}>
      <h1>{titulo.split("-")[0]}</h1>
      <h2>{titulo.split("-")[1]}</h2>
      <Bar {...config} />
    </div>
  );
};

export default DemoBar;
