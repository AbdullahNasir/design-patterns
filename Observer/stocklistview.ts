import { Observer } from "./observer.interface";
import { DataSource } from "./datasource";

// One of the concrete observer that will observe a subject i.e. datasource
export class StockListView implements Observer {
  private dataSource: DataSource;

  constructor(datasource: DataSource) {
    this.dataSource = datasource;
    this.dataSource.addObserver(this);
  }

  notify(): void {
    console.log("stock list view notified about datasource change");
    console.log(
      `new prices of stocks : ${JSON.stringify(
        this.dataSource.getStockPrices()
      )}`
    );
  }
}
