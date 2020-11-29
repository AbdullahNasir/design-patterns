import { BrowserHistory } from "./browser-history";

const browserHistory = new BrowserHistory();

browserHistory.push("http://google.com");
browserHistory.push("http://facebook.com");
browserHistory.push("http://gmail.com");

const iterator = browserHistory.createIterator();

while (iterator.hasNext()) {
  console.log(iterator.current());
  iterator.next();
}
