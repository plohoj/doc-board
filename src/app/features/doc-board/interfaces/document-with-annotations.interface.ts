
export interface IDocumentAnnotation {
  comment: string;
  /** Флаг, который сообщает о том что нужно раскрыть аннотацию */
  isActive?: boolean;
  /** Положение относительно страницы в процентах */
  x: number;
  /** Положение относительно страницы в процентах */
  y: number;
}

export interface IDocumentPageWithAnnotations {
  number: number;
  imageUrl: string;
  annotations: IDocumentAnnotation[];
}

export interface IDocumentWithAnnotations {
  name: string;
  pages: IDocumentPageWithAnnotations[];
}
