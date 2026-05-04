export interface IDocument {
  name: string;
  pages: IDocumentPage[];
}

export interface IDocumentPage {
  number: number;
  imageUrl: string;
}
