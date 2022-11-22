import styled from "styled-components";

export const Container = styled.div`
  .containerGraficos {
    display: flex;
    justify-content: center;
    align-items: baseline;
  }
`;

export const Titulo = styled.h1`
  font-size: 1.5rem;
  margin: 30px 0;
  color: #444;
`;

export const ContainerSeletor = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Seletor = styled.div`
  width: 200px;
  height: 200px;
  background: url(${(props: any) => props.property});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  margin: 2rem;
  cursor: pointer;

  &:hover {
    opacity: 0.5;
  }
`;
