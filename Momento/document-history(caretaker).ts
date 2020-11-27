import { DocumentState } from "./document-state(momento)";

export class DocumentHistory {
  private states: DocumentState[];

  constructor() {
    this.states = [];
  }

  push(state: DocumentState) {
    this.states.push(state);
  }

  pop(): DocumentState | undefined {
    return this.states.pop();
  }
}
