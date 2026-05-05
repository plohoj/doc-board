export interface IDocumentDto {
  name: string;
  pages: IDocumentPageDto[];
}

export interface IDocumentPageDto {
  number: number;
  imageUrl: string;
}
