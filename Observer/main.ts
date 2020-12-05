import { DataSource } from "./datasource";
import { StatusBar } from "./statusbar";
import { StockListView } from "./stocklistview";

const stocksPrices = new DataSource();

const statusBar = new StatusBar(stocksPrices);
const stockListView = new StockListView(stocksPrices);

stocksPrices.setStockPrice({ symbol: "APPL", price: 255, isInWatchlist: true });
stocksPrices.setStockPrice({
  symbol: "GOOG",
  price: 200,
  isInWatchlist: false,
});
