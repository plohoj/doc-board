import { Injectable } from '@angular/core';
import { delay, map, Observable, of } from 'rxjs';
import { IDocument } from '../interfaces/document.interface';

@Injectable()
export class DocBoardService {

  getDocument(documentId: string): Observable<IDocument> {
    return of({
      "name": "test doc",
      "pages": [
        {
          "number": 1,
          "imageUrl": "pages/1.png"
        },
        {
          "number": 2,
          "imageUrl": "pages/2.png"
        },
        {
          "number": 3,
          "imageUrl": "pages/3.png"
        },
        {
          "number": 4,
          "imageUrl": "pages/4.png"
        },
        {
          "number": 5,
          "imageUrl": "pages/5.png"
        }
      ]
    }).pipe(
      delay(Math.floor(Math.random() * 1000)),
      map(document => this.#normalizeDocumentLink(document))
    );
  }

  #normalizeDocumentLink(document: IDocument): IDocument {
    return {
      ...document,
      pages: document.pages.map(page => ({
        ...page,
        imageUrl: `/images/${page.imageUrl}`
      }))
    };
  }
}
