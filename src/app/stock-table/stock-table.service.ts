import { Injectable } from '@angular/core';
import { stocks } from './stocks';

@Injectable({
  providedIn: 'root'
})
export class StockTableService {
  private _stocks: any;

  constructor() {
    this._stocks    = stocks;
    this._tick      = this._tick.bind(this);
    setInterval(this._tick, 1000);
  }

  /**
   * Returns an array of Stock objects for the current user
   * @returns {Array}
   */
  getUsersStocks() {
    return Object.getOwnPropertyNames(this._stocks).reduce((acc, s) => {
      this._changesParser(s);
      acc.push(this._stocks[s]);
      return acc;
    }, []);
  }

  /**
   * Updates the price for a specific symbol
   * @param price
   * @private
   */
  private _updateStockPrice(symbol, price) {
    this._stocks[symbol].price = price;
    this._changesParser(symbol);
  }
  /**
   * Simulates price changes by selecting a subset of stocks and moving them up or down * by a random amount up to either 3% of their current value or 1/100th of the
   * currency unit whichever is more.
   * The price should never drop below 0.01
   * @private
   */
  private _tick() {
    Object.getOwnPropertyNames(this._stocks).forEach(symbol => {
      const shouldUpdate = Math.floor(Math.random() * 2) === 0;
      if (shouldUpdate) {
        const currentPrice = this._stocks[symbol].price;
        const maxMove = Math.max(0.01, currentPrice * 0.03);
        const newPrice = Math.max(0.01, currentPrice + ((Math.random() * maxMove * 2) - maxMove));
        this._updateStockPrice(symbol, newPrice);
      }
    })
  }
  /**
   * Adds new properties with updated values of calculated differences in prices for a specific symbol
   * @param symbol
   * @private
   */
  private _changesParser(symbol) {
    this._stocks[symbol].priceDiff = this._stocks[symbol].price - this._stocks[symbol].closingPrice;
    this._stocks[symbol].priceDiff >= 0 ? this._stocks[symbol].up = true : this._stocks[symbol].up = false;
    this._stocks[symbol].percentDiff = Math.abs(this._stocks[symbol].priceDiff) / this._stocks[symbol].closingPrice;
  }
}
