export type User = {
  uid: string | null,
  email: string | null,
  providerData: unknown
}

export type Navigate = (page: string) => void
export type Login = (user: User | null) => void
export type Logout = Login

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