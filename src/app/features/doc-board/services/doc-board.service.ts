import { Injectable } from '@angular/core';
import { delay, map, Observable, of, timer } from 'rxjs';
import { IDocumentWithAnnotations } from '../interfaces/document-with-annotations.interface';
import { IDocumentDto } from '../interfaces/document.dto';

@Injectable()
export class DocBoardService {

  getDocument(documentId: string): Observable<IDocumentWithAnnotations> {
    return of<IDocumentDto>({
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
      map(document => this.#normalizeDocument(document))
    );
  }

  saveDocument(document: IDocumentWithAnnotations): Observable<void> {
    console.log(document);
    return timer(Math.floor(Math.random() * 1000)).pipe(
      map(() => {})
    );
  };

  #normalizeDocument(document: IDocumentDto): IDocumentWithAnnotations {
    return {
      ...document,
      pages: document.pages.map(page => ({
        ...page,
        imageUrl: `/images/${page.imageUrl}`,
        annotations: [],
      }))
    };
  }
}
