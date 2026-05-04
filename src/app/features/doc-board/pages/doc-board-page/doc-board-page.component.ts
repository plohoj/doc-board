import { Component, DestroyRef, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, map, switchMap, tap } from 'rxjs';
import { IDocument } from '../../interfaces/document.interface';
import { DocBoardService } from '../../services/doc-board.service';

@Component({
  selector: 'app-doc-board-page',
  templateUrl: './doc-board-page.component.html',
  styleUrls: ['./doc-board-page.component.scss'],
  providers: [
    DocBoardService,
  ],
})
export class DocBoardPageComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #docBoardService = inject(DocBoardService);

  readonly loadingState = signal<'LADING' | 'LOADED' | 'ERROR'>('LADING');
  readonly document = signal<IDocument | null>(null)

  readonly documentId$ = inject(ActivatedRoute).params.pipe(
    map(params => params['id'] as string)
  )

  ngOnInit(): void {
    this.documentId$.pipe(
      tap(() => this.loadingState.set('LADING')),
      switchMap(documentId => this.#docBoardService.getDocument(documentId).pipe(
        tap(document => {
          this.document.set(document);
          this.loadingState.set('LOADED');
        }),
        catchError((error) => {
          this.loadingState.set('ERROR');
          this.document.set(null);
          console.error(error); // TODO Use notification service
          return EMPTY;
        }),
      )),
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe();
  }
}
