import React, { useState } from "react";
import { Form, Select, Space, Row, Col, notification, Button } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { paises, assuntos, detalhesAssunto } from "./assets";
import { Props } from "./props";

const FormApp: React.FC<Props> = ({ setIndicador, setPais }) => {
  const [assunto, setAssunto] = useState<string>();
  const { Option } = Select;
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    setPais(values?.pais);
    setIndicador(values?.indicador);
    setTimeout(() => {
      form.resetFields();
    }, 1000);
  };
  const onFinishFailed = () => {
    notification.error({
      placement: "topRight",
      message: `Verifique os campos e tente novamente`,
      style: {
        background: " #ffdada",
      },
    });
  };

  return (
    <Form
      layout="vertical"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      form={form}
    >
      <Row gutter={16} style={{ width: "100%" }}>
        <Col xs={16} sm={12} md={6} lg={3}>
          <Form.Item
            label="País"
            name="pais"
            rules={[
              { required: true, message: "Por favor preencha este campo!" },
            ]}
          >
            <Select
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
              {paises.map((item) => (
                <Option key={item.sigla} value={`${item.sigla} - ${item.pais}`}>
                  {item.pais}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={16} sm={12} md={6} lg={3}>
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
            <Select style={{ width: "200px" }} onChange={(e) => setAssunto(e)}>
              {assuntos.map((item) => (
                <Option key={item.valor} value={item.valor}>
                  {item.nome}
                </Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
        <Col xs={16} sm={12} md={6} lg={6}>
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
            <Select>
              {assunto === "economia"
                ? detalhesAssunto.economia.map((item) => (
                    <Option key={item.valor} value={item.valor}>
                      {item.nome}
                    </Option>
                  ))
                : assunto === "indicadores-sociais"
                ? detalhesAssunto["indicadores-sociais"].map((item) => (
                    <Option key={item.valor} value={item.valor}>
                      {item.nome}
                    </Option>
                  ))
                : assunto === "meio-ambiente"
                ? detalhesAssunto["meio-ambiente"].map((item) => (
                    <Option key={item.valor} value={item.valor}>
                      {item.nome}
                    </Option>
                  ))
                : assunto === "populacao"
                ? detalhesAssunto["meio-ambiente"].map((item) => (
                    <Option key={item.valor} value={item.valor}>
                      {item.nome}
                    </Option>
                  ))
                : assunto === "redes"
                ? detalhesAssunto.redes.map((item) => (
                    <Option key={item.valor} value={item.valor}>
                      {item.nome}
                    </Option>
                  ))
                : detalhesAssunto.saude.map((item) => (
                    <Option key={item.valor} value={item.valor}>
                      {item.nome}
                    </Option>
                  ))}
            </Select>
          </Form.Item>
        </Col>

        <Col xs={16} sm={12} md={4} lg={2}>
          <Form.Item label=" ">
            <Button type="primary" icon={<SearchOutlined />} htmlType="submit">
              Pesquisar
            </Button>
          </Form.Item>
        </Col>
      </Row>
    </Form>
  );
};

export default FormApp;
