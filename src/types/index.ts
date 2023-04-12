export interface FundData {
  name: string;
  logo: string;
  code: string;
  data: {value: number}[];
  price: number;
  variation: number;
}

export interface FundChartData extends FundData {
  data: {value: number; date: string}[];
}
