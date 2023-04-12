export interface FundData {
  name: string;
  logo: string;
  code: string;
  data: {value: number, label: string, labelComponent: any}[];
  price: number;
  variation: number;
  fundAssets: {
    name: string;
    about: string;
    featureImage: string;
    logo: string;
  }[];
}
