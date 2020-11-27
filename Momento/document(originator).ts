import { DocumentProperties } from "./document-properties.interface";
import { DocumentState } from "./document-state(momento)";

export class Doc {
  private documentProperties: DocumentProperties = {
    fontName: "Sans serif",
    fontSize: "16",
    content: "",
  };

  public set(property: "content" | "fontSize" | "fontName", value: string) {
    this.documentProperties[property] = value;
  }

  public get(): DocumentProperties {
    return this.documentProperties;
  }

  public createState(): DocumentState {
    return new DocumentState({ ...this.documentProperties });
  }

  public undo(docState: DocumentState) {
    this.documentProperties = docState.getDocumentProperties();
  }
}
