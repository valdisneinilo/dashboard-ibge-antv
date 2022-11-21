import BasicColumnPlot from "./Components/BasicColumnPlot";
import BasicBarPlot from "./Components/BasicBarPlot";
import { Select } from "antd";

const App: React.FC = () => {
  return (
    <div>
      <Select>
        <Select.Option value="77818">
          Economia - Chegada de turistas
        </Select.Option>
        <Select.Option value="77819">
          Economia - Gastos públicos com educação
        </Select.Option>
        <Select.Option value="77820">
          Economia - Gastos públicos com saúde
        </Select.Option>
        <Select.Option value="77821">
          Economia - Investimentos em pesquisa e desenvolvimento
        </Select.Option>
        <Select.Option value="77822">
          Economia - Mulheres de 15 anos ou mais de idade economicamente ativas
        </Select.Option>
        <Select.Option value="77824">
          Economia - População de 15 anos ou mais de idade economicamente ativa
        </Select.Option>
        <Select.Option value="77825">
          Economia - Total de exportações
        </Select.Option>
        <Select.Option value="77826">
          Economia - Total de importações
        </Select.Option>
        <Select.Option value="77827">Economia - Total do PIB</Select.Option>
      </Select>

      <Select>
        <Select.Option value="77830">
          Indicadores sociais - Esperança de vida ao nascer
        </Select.Option>
        <Select.Option value="77831">
          Indicadores sociais - Índice de desenvolvimento humano
        </Select.Option>
        <Select.Option value="77832">
          Indicadores sociais - População com acesso à água potável
        </Select.Option>
        <Select.Option value="77833">
          Indicadores sociais - População com acesso à rede sanitária
        </Select.Option>
        <Select.Option value="77835">
          Indicadores sociais - Taxa bruta de matrículas para todos os níveis de
          ensino
        </Select.Option>
        <Select.Option value="77836">
          Indicadores sociais - Taxa de alfabetização das pessoas de 15 anos ou
          mais de idade
        </Select.Option>
      </Select>

      <Select>
        <Select.Option value="77838">
          Meio Ambiente - Áreas cultivadas
        </Select.Option>
        <Select.Option value="77839">
          Meio Ambiente - Áreas de pastagens permanentes
        </Select.Option>
        <Select.Option value="77840">
          Meio Ambiente - Áreas protegidas no total do território nacional
        </Select.Option>
        <Select.Option value="77841">
          Meio Ambiente - Produção de gás natural
        </Select.Option>
        <Select.Option value="77842">
          Meio Ambiente - Produção de petróleo
        </Select.Option>
      </Select>

      <Select>
        <Select.Option value="77844">
          População - Densidade demográfica
        </Select.Option>
        <Select.Option value="77845">População - Homens</Select.Option>
        <Select.Option value="77846">População - Mulheres</Select.Option>
        <Select.Option value="77847">
          População - População residente em área rural
        </Select.Option>
        <Select.Option value="77848">
          População - População residente em área urbana
        </Select.Option>
        <Select.Option value="77849">População - População</Select.Option>
        <Select.Option value="77850">
          População - Taxa bruta de mortalidade
        </Select.Option>
        <Select.Option value="77851">
          População - Taxa bruta de natalidade
        </Select.Option>
        <Select.Option value="77852">
          População - Taxa média anual do crescimento da população
        </Select.Option>
      </Select>

      <Select>
        <Select.Option value="77854">
          Redes - Assinaturas de telefonia celular
        </Select.Option>
        <Select.Option value="77855">
          Redes - Assinaturas de telefonia fixa
        </Select.Option>
        <Select.Option value="77857">
          Redes - Indivíduos com acesso à internet
        </Select.Option>
      </Select>

      <Select>
        <Select.Option value="77829">Saúde - Consumo calórico</Select.Option>
        <Select.Option value="77834">
          Saúde - Incidência de subnutrição
        </Select.Option>
      </Select>
      <BasicColumnPlot />
      <BasicBarPlot />
    </div>
  );
};

export default App;
