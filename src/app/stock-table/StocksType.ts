export interface Stocks {
  closingPrice: number;
  currency: string;
  name: string;
  price: number;
  symbol: string;
  priceDiff?: number;
  percentDiff?: number;
  up?: boolean;
}
