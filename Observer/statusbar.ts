import { DataSource } from "./datasource";
import { Observer } from "./observer.interface";

// One of the concrete observer that will observe a subject i.e. datasource
export class StatusBar implements Observer {
  private dataSource: DataSource;

  constructor(datasource: DataSource) {
    this.dataSource = datasource;
    this.dataSource.addObserver(this);
  }
  notify(): void {
    console.log("Status bar notified about datasource change");
    console.log(
      `new prices of stocks in watchlist: ${JSON.stringify(
        this.dataSource.getStockPrices().filter((stock) => stock.isInWatchlist)
      )}`
    );
  }
}
