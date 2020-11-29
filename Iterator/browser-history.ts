import { Iterator } from "./iterator.interface";

export class BrowserHistory {
  private urls: string[] = [];

  push(url: string) {
    this.urls.push(url);
  }

  pop(): string | undefined {
    return this.urls.pop();
  }

  createIterator(): Iterator<string> {
    return new ListIterator(this.urls);
  }
}

class ListIterator implements Iterator<string> {
  // this class encapsulates the logic to iterate over the list
  //   not super usefull in typescript / javascript but still can be used if
  // any custom logic is required for the iterating an array

  private urls: string[];
  private index: number;

  constructor(urls: string[]) {
    this.index = 0;
    this.urls = urls;
  }

  hasNext(): boolean {
    return this.index < this.urls.length;
  }

  current(): string {
    return this.urls[this.index];
  }

  next(): void {
    this.index++;
  }
}
