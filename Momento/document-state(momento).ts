import { DocumentProperties } from "./document-properties.interface";

export class DocumentState {
  private documentProperties: DocumentProperties;

  constructor(documentProps: DocumentProperties) {
    this.documentProperties = documentProps;
  }

  public getDocumentProperties(): DocumentProperties {
    return this.documentProperties;
  }
}
