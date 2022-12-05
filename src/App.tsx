import { useEffect, useState } from "react";
import FormApp from "./Components/Form";
import {
  AreaChartOutlined,
  PieChartOutlined,
  BarChartOutlined,
  LineChartOutlined,
} from "@ant-design/icons";
import { Container, Titulo, ContainerSeletor, Seletor } from "./style";
import { IDados, IData } from "./types";
import BasicColumnPlot from "./Components/BasicColumnPlot";
import SetStyleOfLinePlotPoint from "./Components/SetStyleOfLinePlotPoint";
import BasicBarPlot from "./Components/BasicBarPlot";
import PiePlotSpiderLabel from "./Components/PiePlotSpiderLabel";
import PiePlotOuterLabel from "./Components/PiePlotOuterLabel";
import ChartRanger from "./Components/ChartRanger";

const App: React.FC = () => {
  const [grafico, setGrafico] = useState<React.ReactNode>(1);
  const [pais, setPais] = useState<string>("BR");
  const [indicador, setIndicador] = useState<string>("77827");
  const [data, setData] = useState<IData[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/${indicador}`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData([]);

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
  }, [url]);

  return (
    <Container>
      <FormApp setPais={setPais} setIndicador={setIndicador} />
      <Titulo>
        {<AreaChartOutlined />}
        {"  "}
        {<BarChartOutlined />}
        {"  "}
        {titulo}
        {"  "}
        {<PieChartOutlined />}
        {"  "}
        {<LineChartOutlined />}
      </Titulo>

      {grafico === 1 && <BasicColumnPlot data={data} />}
      {grafico === 2 && <ChartRanger data={data} />}
      {grafico === 3 && <SetStyleOfLinePlotPoint data={data} />}
      {grafico === 4 && <BasicBarPlot data={data} />}
      {grafico === 5 && <PiePlotSpiderLabel data={data} />}
      {grafico === 6 && <PiePlotOuterLabel data={data} />}

      <ContainerSeletor className="containerGraficos">
        <Seletor property="basicColumnPlot.jpg" onClick={() => setGrafico(1)} />
        <Seletor property="chartRanger.gif" onClick={() => setGrafico(2)} />
        <Seletor property="basicBarPlot.png" onClick={() => setGrafico(4)} />
        <Seletor property="pieSpider.gif" onClick={() => setGrafico(5)} />
        <Seletor property="pierPlot.png" onClick={() => setGrafico(6)} />
        <Seletor
          property="setStyleOfLinePlotPoint.gif"
          onClick={() => setGrafico(3)}
        />
      </ContainerSeletor>
    </Container>
  );
};

export default App;
