import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  .containerGraficos {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }

  .form {
    width: 100%;
  }
`;

export const Titulo = styled.h1`
  font-size: 1.5rem;
  margin: 50px 0;
  color: #fff;
  background-color: #444;
  padding: 10px;
  text-align: center;
  border-radius: 4px;
`;

export const ContainerSeletor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 700px) {
    background-color: #efefef;
  }
`;

export const Seletor = styled.div`
  width: 200px;
  height: 200px;
  background: url(${(props: any) => props.property});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 1rem;
  margin-top: 50px;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }

  @media (max-width: 700px) {
    width: 30px;
    height: 30px;
  }
`;
