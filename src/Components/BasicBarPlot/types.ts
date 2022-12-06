interface dados {
  type?: string;
  sales?: number;
  ano: string;
  valor: number;
  indicador: string;
  unidade: {
    id: string;
    classe: string;
    multiplicador: number;
  };
}

export interface Props {
  data: dados[];
}
