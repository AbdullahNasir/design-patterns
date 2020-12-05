import { Subject } from "./subject.abstract";

// This is our concrete Observable/Subject
export class DataSource extends Subject {
  private stockPrices: Array<{
    symbol: string;
    price: number;
    isInWatchlist: boolean;
  }>;

  constructor() {
    super();
    this.stockPrices = [];
  }

  setStockPrice(newStock: {
    symbol: string;
    price: number;
    isInWatchlist: boolean;
  }) {
    const index = this.stockPrices.indexOf(newStock);

    if (index > -1) {
      this.stockPrices[index] = newStock;
    } else {
      this.stockPrices.push(newStock);
    }

    this.notifyObservers();
  }

  getStockPrices(): Array<{
    symbol: string;
    price: number;
    isInWatchlist: boolean;
  }> {
    return this.stockPrices;
  }
}
