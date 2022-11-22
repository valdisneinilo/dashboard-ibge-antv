import styled from "styled-components";
import { Button, Form, Select, Space, notification } from "antd";
import { useEffect, useState } from "react";
import { SearchOutlined } from "@ant-design/icons";
import BasicColumnPlot from "./Components/BasicColumnPlot";
import SetStyleOfLinePlotPoint from "./Components/SetStyleOfLinePlotPoint";
import BasicBarPlot from "./Components/BasicBarPlot";
import PiePlotSpiderLabel from "./Components/PiePlotSpiderLabel";
import PiePlotOuterLabel from "./Components/PiePlotOuterLabel";
import ChartRanger from "./Components/ChartRanger";

export interface IData {
  ano: string;
  valor: number;
}
export type IDados = { [key: number]: string };

const App: React.FC = () => {
  const [grafico, setGrafico] = useState<React.ReactNode>(1);
  const [pais, setPais] = useState<string>("BR");
  const [assunto, setAssunto] = useState<string>("economia");
  const [indicador, setIndicador] = useState<string>("77827");
  const [data, setData] = useState<IData[]>([]);
  const [titulo, setTitulo] = useState<string>("");
  const url = `https://servicodados.ibge.gov.br/api/v1/paises/${pais}/indicadores/${indicador}`;
  const { Option } = Select;

  const onFinish = (values: any) => {
    setPais(values?.pais);
    setIndicador(values?.indicador);
  };
  const onFinishFailed = (errorInfo: any) => {
    notification.info({
      placement: "bottomRight",
      message: `Verifique os campos e tente novamente`,
    });
  };

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
  }, [url]);

  return (
    <Container>
      <Form
        layout="vertical"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
      >
        <Space style={{ display: "flex", flexWrap: "wrap" }}>
          <Form.Item
            label="País"
            name="pais"
            rules={[
              { required: true, message: "Por favor preencha este campo!" },
            ]}
          >
            <Select
              defaultValue="BR"
              style={{ width: "200px" }}
              showSearch
              filterOption={(input: any, option: any) => {
                return (
                  option?.children
                    ?.toLowerCase()
                    .indexOf(input.toLowerCase()) >= 0
                );
              }}
            >
              <Option value="ZA">África do Sul</Option>
              <Option value="DE">Alemanha</Option>
              <Option value="AD">Andorra</Option>
              <Option value="AO">Angola</Option>
              <Option value="AG">Antígua e Barbuda</Option>
              <Option value="SA">Arábia Saudita</Option>
              <Option value="DZ">Argélia</Option>
              <Option value="AR">Argentina</Option>
              <Option value="AM">Armênia</Option>
              <Option value="AU">Austrália</Option>
              <Option value="AT">Áustria</Option>
              <Option value="AZ">Azerbaijão</Option>
              <Option value="BS">Bahamas</Option>
              <Option value="BD">Bangladesh</Option>
              <Option value="BB">Barbados</Option>
              <Option value="BH">Barein</Option>
              <Option value="BY">Belarus</Option>
              <Option value="BE">Bélgica</Option>
              <Option value="BZ">Belize</Option>
              <Option value="BJ">Benin</Option>
              <Option value="BO">Bolívia</Option>
              <Option value="BA">Bósnia e Herzegovina</Option>
              <Option value="BW">Botsuana</Option>
              <Option value="BR">Brasil</Option>
              <Option value="BN">Brunei</Option>
              <Option value="BG">Bulgária</Option>
              <Option value="BF">Burkina Faso</Option>
              <Option value="BI">Burundi</Option>
              <Option value="BT">Butão</Option>
              <Option value="CV">Cabo Verde</Option>
              <Option value="CM">Camarões</Option>
              <Option value="KH">Camboja</Option>
              <Option value="CA">Canadá</Option>
              <Option value="QA">Catar</Option>
              <Option value="KZ">Cazaquistão</Option>
              <Option value="TD">Chade</Option>
              <Option value="CL">Chile</Option>
              <Option value="CN">China</Option>
              <Option value="CY">Chipre</Option>
              <Option value="CO">Colômbia</Option>
              <Option value="KM">Comores</Option>
              <Option value="CG">Congo</Option>
              <Option value="CI">Costa do Marfim</Option>
              <Option value="CR">Costa Rica</Option>
              <Option value="HR">Croácia</Option>
              <Option value="CU">Cuba</Option>
              <Option value="DK">Dinamarca</Option>
              <Option value="DJ">Djibouti</Option>
              <Option value="DM">Dominica</Option>
              <Option value="EG">Egito</Option>
              <Option value="SV">El Salvador</Option>
              <Option value="AE">Emirados Árabes Unidos</Option>
              <Option value="EC">Equador</Option>
              <Option value="ER">Eritréia</Option>
              <Option value="SK">Eslováquia</Option>
              <Option value="SI">Eslovênia</Option>
              <Option value="ES">Espanha</Option>
              <Option value="US">Estados Unidos da América</Option>
              <Option value="EE">Estônia</Option>
              <Option value="SZ">Eswatini</Option>
              <Option value="ET">Etiópia</Option>
              <Option value="FJ">Fiji</Option>
              <Option value="PH">Filipinas</Option>
              <Option value="FI">Finlândia</Option>
              <Option value="FR">França</Option>
              <Option value="GA">Gabão</Option>
              <Option value="GM">Gâmbia</Option>
              <Option value="GH">Gana</Option>
              <Option value="GE">Geórgia</Option>
              <Option value="GD">Granada</Option>
              <Option value="GR">Grécia</Option>
              <Option value="GT">Guatemala</Option>
              <Option value="GY">Guiana</Option>
              <Option value="GN">Guiné</Option>
              <Option value="GQ">Guiné Equatorial</Option>
              <Option value="GW">Guiné-Bissau</Option>
              <Option value="HT">Haiti</Option>
              <Option value="HL">Holanda</Option>
              <Option value="HN">Honduras</Option>
              <Option value="HU">Hungria</Option>
              <Option value="YE">Iêmen</Option>
              <Option value="MH">Ilhas Marshall</Option>
              <Option value="SB">Ilhas Salomão</Option>
              <Option value="IN">Índia</Option>
              <Option value="ID">Indonésia</Option>
              <Option value="IR">Irã</Option>
              <Option value="IQ">Iraque</Option>
              <Option value="IE">Irlanda</Option>
              <Option value="IS">Islândia</Option>
              <Option value="IL">Israel</Option>
              <Option value="IT">Itália</Option>
              <Option value="JM">Jamaica</Option>
              <Option value="JP">Japão</Option>
              <Option value="JO">Jordânia</Option>
              <Option value="KI">Kiribati</Option>
              <Option value="KW">Kuwait</Option>
              <Option value="LA">Laos</Option>
              <Option value="LS">Lesoto</Option>
              <Option value="LV">Letônia</Option>
              <Option value="LB">Líbano</Option>
              <Option value="LR">Libéria</Option>
              <Option value="LY">Líbia</Option>
              <Option value="LI">Liechtenstein</Option>
              <Option value="LT">Lituânia</Option>
              <Option value="LU">Luxemburgo</Option>
              <Option value="MK">Macedônia do Norte</Option>
              <Option value="MG">Madagáscar</Option>
              <Option value="MY">Malásia</Option>
              <Option value="MW">Malauí</Option>
              <Option value="MV">Maldivas</Option>
              <Option value="ML">Mali</Option>
              <Option value="MT">Malta</Option>
              <Option value="MA">Marrocos</Option>
              <Option value="MU">Maurício</Option>
              <Option value="MR">Mauritânia</Option>
              <Option value="MX">México</Option>
              <Option value="MM">Mianmar</Option>
              <Option value="FM">Micronésia</Option>
              <Option value="MZ">Moçambique</Option>
              <Option value="MD">Moldávia</Option>
              <Option value="MC">Mônaco</Option>
              <Option value="MN">Mongólia</Option>
              <Option value="ME">Montenegro</Option>
              <Option value="NA">Namíbia</Option>
              <Option value="NR">Nauru</Option>
              <Option value="NP">Nepal</Option>
              <Option value="NI">Nicarágua</Option>
              <Option value="NE">Níger</Option>
              <Option value="NG">Nigéria</Option>
              <Option value="NO">Noruega</Option>
              <Option value="NZ">Nova Zelândia</Option>
              <Option value="OM">Omã</Option>
              <Option value="PW">Palau</Option>
              <Option value="PA">Panamá</Option>
              <Option value="PG">Papua Nova Guiné</Option>
              <Option value="PK">Paquistão</Option>
              <Option value="PY">Paraguai</Option>
              <Option value="PE">Peru</Option>
              <Option value="PL">Polônia</Option>
              <Option value="PT">Portugal</Option>
              <Option value="KE">Quênia</Option>
              <Option value="KG">Quirguistão</Option>
              <Option value="GB">Reino Unido</Option>
              <Option value="CF">República Centro Africana</Option>
              <Option value="KR">República da Coréia</Option>
              <Option value="CD">República Democrática do Congo</Option>
              <Option value="DO">República Dominicana</Option>
              <Option value="KP">
                República Popular Democrática da Coréia
              </Option>
              <Option value="CZ">República Tcheca</Option>
              <Option value="RO">Romênia</Option>
              <Option value="RW">Ruanda</Option>
              <Option value="RU">Rússia (Federação Russa)</Option>
              <Option value="WS">Samoa</Option>
              <Option value="SM">San Marino</Option>
              <Option value="LC">Santa Lúcia</Option>
              <Option value="KN">São Cristóvão e Nevis</Option>
              <Option value="ST">São Tomé e Príncipe</Option>
              <Option value="VC">São Vicente e Granadinas</Option>
              <Option value="SC">Seichelles</Option>
              <Option value="SN">Senegal</Option>
              <Option value="SL">Serra Leoa</Option>
              <Option value="RS">Sérvia</Option>
              <Option value="SG">Singapura</Option>
              <Option value="SY">Síria</Option>
              <Option value="SO">Somália</Option>
              <Option value="LK">Sri Lanka</Option>
              <Option value="SD">Sudão</Option>
              <Option value="SS">Sudão do Sul</Option>
              <Option value="SE">Suécia</Option>
              <Option value="CH">Suíça</Option>
              <Option value="SR">Suriname</Option>
              <Option value="TJ">Tadjiquistão</Option>
              <Option value="TH">Tailândia</Option>
              <Option value="TZ">Tanzânia</Option>
              <Option value="TL">Timor Leste</Option>
              <Option value="TG">Togo</Option>
              <Option value="TO">Tonga</Option>
              <Option value="TT">Trinidad e Tobago</Option>
              <Option value="TN">Tunísia</Option>
              <Option value="TM">Turcomenistão</Option>
              <Option value="TR">Turquia</Option>
              <Option value="TV">Tuvalu</Option>
              <Option value="UA">Ucrânia</Option>
              <Option value="UG">Uganda</Option>
              <Option value="UY">Uruguai</Option>
              <Option value="UZ">Uzbequistão</Option>
              <Option value="VU">Vanuatu</Option>
              <Option value="VE">Venezuela</Option>
              <Option value="VN">Vietnã</Option>
              <Option value="ZM">Zâmbia</Option>
              <Option value="ZW">Zimbábue</Option>
            </Select>
          </Form.Item>

          <Form.Item
            name="assunto"
            label="Assunto"
            rules={[
              {
                required: true,
                message: "Por favor preencha este campo!",
              },
            ]}
          >
            <Select
              defaultValue="economia"
              style={{ width: "200px" }}
              onChange={(e) => setAssunto(e)}
            >
              <Option value="economia">Economia</Option>
              <Option value="indicadores-sociais">Indicadores sociais</Option>
              <Option value="meio-ambiente">Meio Ambiente</Option>
              <Option value="populacao">População</Option>
              <Option value="redes">Redes</Option>
              <Option value="saude">Saúde</Option>
            </Select>
          </Form.Item>

          {assunto === "economia" && (
            <Form.Item
              name="indicador"
              label="ver dados sobre"
              rules={[
                {
                  required: true,
                  message: "Por favor preencha este campo!",
                },
              ]}
            >
              <Select defaultValue="77827">
                <Option value="77818">Chegada de turistas</Option>
                <Option value="77819">Gastos públicos com educação</Option>
                <Option value="77820">Gastos públicos com saúde</Option>
                <Option value="77821">
                  Investimentos em pesquisa e desenvolvimento
                </Option>
                <Option value="77822">
                  Mulheres de 15 anos ou mais de idade economicamente ativas
                </Option>
                <Option value="77824">
                  População de 15 anos ou mais de idade economicamente ativa
                </Option>
                <Option value="77825">Total de exportações</Option>
                <Option value="77826">Total de importações</Option>
                <Option value="77827">Total do PIB</Option>
              </Select>
            </Form.Item>
          )}

          {assunto === "indicadores-sociais" && (
            <Form.Item
              name="indicador"
              label="ver dados sobre"
              rules={[
                {
                  required: true,
                  message: "Por favor preencha este campo!",
                },
              ]}
            >
              <Select defaultValue="77830">
                <Option value="77830">Esperança de vida ao nascer</Option>
                <Option value="77831">Índice de desenvolvimento humano</Option>
                <Option value="77832">
                  População com acesso à água potável
                </Option>
                <Option value="77833">
                  População com acesso à rede sanitária
                </Option>
                <Option value="77835">
                  Taxa bruta de matrículas para todos os níveis de ensino
                </Option>
                <Option value="77836">
                  Taxa de alfabetização das pessoas de 15 anos ou mais de idade
                </Option>
              </Select>
            </Form.Item>
          )}

          {assunto === "meio-ambiente" && (
            <Form.Item
              name="indicador"
              label="ver dados sobre"
              rules={[
                {
                  required: true,
                  message: "Por favor preencha este campo!",
                },
              ]}
            >
              <Select defaultValue="77838">
                <Option value="77838">Áreas cultivadas</Option>
                <Option value="77839">Áreas de pastagens permanentes</Option>
                <Option value="77840">
                  Áreas protegidas no total do território nacional
                </Option>
                <Option value="77841">Produção de gás natural</Option>
                <Option value="77842">Produção de petróleo</Option>
              </Select>
            </Form.Item>
          )}

          {assunto === "populacao" && (
            <Form.Item
              name="indicador"
              label="ver dados sobre"
              rules={[
                {
                  required: true,
                  message: "Por favor preencha este campo!",
                },
              ]}
            >
              <Select defaultValue="77844">
                <Option value="77844">Densidade demográfica</Option>
                <Option value="77845">Homens</Option>
                <Option value="77846">Mulheres</Option>
                <Option value="77847">População residente em área rural</Option>
                <Option value="77848">
                  População residente em área urbana
                </Option>
                <Option value="77849">População</Option>
                <Option value="77850">Taxa bruta de mortalidade</Option>
                <Option value="77851">Taxa bruta de natalidade</Option>
                <Option value="77852">
                  Taxa média anual do crescimento da população
                </Option>
              </Select>
            </Form.Item>
          )}

          {assunto === "redes" && (
            <Form.Item
              name="indicador"
              label="ver dados sobre"
              rules={[
                {
                  required: true,
                  message: "Por favor preencha este campo!",
                },
              ]}
            >
              <Select defaultValue="77854">
                <Option value="77854">Assinaturas de telefonia celular</Option>
                <Option value="77855">Assinaturas de telefonia fixa</Option>
                <Option value="77857">Indivíduos com acesso à internet</Option>
              </Select>
            </Form.Item>
          )}

          {assunto === "saude" && (
            <Form.Item
              name="indicador"
              label="ver dados sobre"
              rules={[
                {
                  required: true,
                  message: "Por favor preencha este campo!",
                },
              ]}
            >
              <Select defaultValue="77829">
                <Option value="77829">Consumo calórico</Option>
                <Option value="77834">Incidência de subnutrição</Option>
              </Select>
            </Form.Item>
          )}

          <Form.Item label=" ">
            <Button type="primary" icon={<SearchOutlined />} htmlType="submit">
              Pesquisar
            </Button>
          </Form.Item>
        </Space>
      </Form>

      <Titulo>{titulo}</Titulo>

      {grafico === 1 && <BasicColumnPlot data={data} />}
      {grafico === 2 && <ChartRanger data={data} />}
      {grafico === 3 && <SetStyleOfLinePlotPoint data={data} />}
      {grafico === 4 && <BasicBarPlot data={data} />}
      {grafico === 5 && <PiePlotSpiderLabel data={data} />}
      {grafico === 6 && <PiePlotOuterLabel data={data} />}

      <ul className="containerGraficos">
        <li className="basicColumnPlot"></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </Container>
  );
};

export default App;

const Container = styled.div`
  .containerGraficos {
    display: flex;
    justify-content: center;
    align-items: baseline;

    li {
      width: 200px;
      height: 200px;
      background: url("basicBarPlot.png");
      background-size: cover;
      background-repeat: no-repeat;
      background-position: center;
    }
  }
`;

const Titulo = styled.h1`
  font-size: 1.5rem;
  margin: 30px 0;
  color: #444;
`;
