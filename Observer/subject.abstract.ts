import { Observer } from "./observer.interface";

// aka Observable
export abstract class Subject {
  private observers: Observer[] = [];

  addObserver(observer: Observer): void {
    this.observers.push(observer);
  }

  removeObserver(observer: Observer): void {
    const index = this.observers.indexOf(observer);
    this.observers.splice(index, 1);
  }

  protected notifyObservers() {
    this.observers.forEach((observer) => {
      observer.notify();
    });
  }
}
