import { useEffect, useState } from "react";
import { IData } from "./types";
import { Container, Titulo, ContainerSeletor, Seletor } from "./style";
import FormApp from "./Components/Form";

import { Empty, Tooltip } from "antd";
import {
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";

import BasicColumnPlot from "./Components/BasicColumnPlot";
import SetStyleOfLinePlotPoint from "./Components/SetStyleOfLinePlotPoint";
import BasicBarPlot from "./Components/BasicBarPlot";
import PiePlotSpiderLabel from "./Components/PiePlotSpiderLabel";
import PiePlotOuterLabel from "./Components/PiePlotOuterLabel";
import ChartRanger from "./Components/ChartRanger";

const App: React.FC = () => {
  const [grafico, setGrafico] = useState<number>(0);
  const [pais, setPais] = useState<string>();
  const [indicador, setIndicador] = useState<string>();
  const [data, setData] = useState<IData[]>([]);

  const url = `https://servicodados.ibge.gov.br/api/v1/paises/${
    pais?.split("-")[0]
  }/indicadores/${indicador}`;

  useEffect(() => {
    pais !== undefined &&
      indicador !== undefined &&
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          setData([]);
          data[0].series[0].serie.forEach((item: IData) => {
            if (Object.values(item)[0] !== null) {
              setData((dados) => [
                ...dados,
                {
                  ano: Object.keys(item)[0],
                  valor: Number(Object.values(item)[0]),
                  indicador: data[0].indicador,
                  unidade: {
                    id: data[0].unidade.id,
                    classe: data[0].unidade.classe,
                    multiplicador: data[0].unidade.multiplicador,
                  },
                },
              ]);
            }
          });
        })
        .then(() => grafico === 0 && setGrafico(1));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url]);

  return (
    <Container>
      <FormApp setPais={setPais} setIndicador={setIndicador} />
      <Titulo>
        {<AreaChartOutlined />}
        {"  "}
        {<BarChartOutlined />}
        {grafico !== 0 && pais?.split("-")[1]}
        {"  "} - {grafico !== 0 && data[0]?.indicador}
        {"  "}
        {<PieChartOutlined />}
        {"  "}
        {<LineChartOutlined />}
      </Titulo>
      {grafico === 0 && <Empty description="Sem dados" />}
      {grafico === 1 && <BasicColumnPlot data={data} />}
      {grafico === 2 && <ChartRanger data={data} />}
      {grafico === 3 && <SetStyleOfLinePlotPoint data={data} />}
      {grafico === 4 && <BasicBarPlot data={data} />}
      {grafico === 5 && <PiePlotSpiderLabel data={data} />}
      {grafico === 6 && <PiePlotOuterLabel data={data} />}

      <ContainerSeletor className="containerGraficos">
        <Tooltip
          title={
            grafico === 0
              ? "Primeiro solicite as informações no formulário acima"
              : "Gráfico de colunas"
          }
        >
          <Seletor
            property="basicColumnPlot.jpg"
            onClick={() => grafico !== 0 && setGrafico(1)}
          />
        </Tooltip>

        <Tooltip
          title={
            grafico === 0
              ? "Primeiro solicite as informações no formulário acima"
              : "Gráfico de barras"
          }
        >
          <Seletor
            property="chartRanger.gif"
            onClick={() => grafico !== 0 && setGrafico(2)}
          />
        </Tooltip>

        <Tooltip
          title={
            grafico === 0
              ? "Primeiro solicite as informações no formulário acima"
              : "Gráfico de linha"
          }
        >
          <Seletor
            property="basicBarPlot.png"
            onClick={() => grafico !== 0 && setGrafico(4)}
          />
        </Tooltip>

        <Tooltip
          title={
            grafico === 0
              ? "Primeiro solicite as informações no formulário acima"
              : "Gráfico de pizza"
          }
        >
          <Seletor
            property="pieSpider.gif"
            onClick={() => grafico !== 0 && setGrafico(5)}
          />
        </Tooltip>

        <Tooltip
          title={
            grafico === 0
              ? "Primeiro solicite as informações no formulário acima"
              : "Gráfico de pizza"
          }
        >
          <Seletor
            property="pierPlot.png"
            onClick={() => grafico !== 0 && setGrafico(6)}
          />
        </Tooltip>

        <Tooltip
          title={
            grafico === 0
              ? "Primeiro solicite as informações no formulário acima"
              : "Gráfico de linha"
          }
        >
          <Seletor
            property="setStyleOfLinePlotPoint.gif"
            onClick={() => grafico !== 0 && setGrafico(3)}
          />
        </Tooltip>
      </ContainerSeletor>
    </Container>
  );
};

export default App;
