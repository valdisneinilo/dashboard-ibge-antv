export interface IData {
  ano: string;
  valor: number;
  indicador: string;
  unidade: {
    id: string;
    classe: string;
    multiplicador: number;
  };
}
