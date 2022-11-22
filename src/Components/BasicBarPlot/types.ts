export interface Props {
  data: any;
}

export interface Config {
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
