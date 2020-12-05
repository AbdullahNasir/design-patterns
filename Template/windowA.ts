import { Window } from "./window.abstract";

export class WindowA extends Window {
  protected afterClose(): void {
    console.log("cleaning up windowA");
  }
}
