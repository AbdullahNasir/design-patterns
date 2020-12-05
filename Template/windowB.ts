import { Window } from "./window.abstract";

export class WindowB extends Window {
  protected afterClose(): void {
    console.log("cleaning up windowB");
  }
}
