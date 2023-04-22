export type Sample = {
  color: string;
  symbol: string;
};

export type StateSample = Sample | null;

export type ChartNode = {
  col: number;
  row: number;
  color: string;
  symbol: string;
};

export type Chart = ChartNode[];

export type ChartStateNode = ChartNode | null;