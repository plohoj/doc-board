import { Component, computed, DestroyRef, DOCUMENT, inject, signal } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, map, switchMap, tap } from 'rxjs';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { ZoomPanelComponent } from '../../components/zoom-panel/zoom-panel.component';
import { IDocument } from '../../interfaces/document.interface';
import { DocBoardService } from '../../services/doc-board.service';

@Component({
  selector: 'db-doc-board-page',
  templateUrl: './doc-board-page.component.html',
  styleUrls: ['./doc-board-page.component.scss'],
  host: {
    '[style.--default-page-width]': '`${defaultPageWidthPx}px`',
    '[style.--page-zoom-ratio]': 'zoomRatio()',
  },
  imports: [
    HeaderComponent,
    ZoomPanelComponent,
  ],
  providers: [
    DocBoardService,
  ],
})
export class DocBoardPageComponent {
  readonly #destroyRef = inject(DestroyRef);
  readonly #docBoardService = inject(DocBoardService);

  // TODO Можно реализовать сервис который загрузит все изображения,
  // для того что бы получить максимальную ширину изображений
  readonly defaultPageWidthPx = 794;
  readonly zoomPercent = signal(this.getDefaultZoom(window.innerWidth));
  readonly zoomRatio = computed(() => this.zoomPercent() / 100);

  readonly loadingState = signal<'LADING' | 'LOADED' | 'ERROR'>('LADING');
  readonly document = signal<IDocument | null>(null);

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

  getDefaultZoom(windowWidth: number): number {
    // TODO На мобильном экране полосы прокрутки не отнимают место
    const SCROLL_PANEL_SIZE = 15 + 16; // Примерный размер полосы прокрутки + paddings
    return Math.min(
      Math.floor(((windowWidth - SCROLL_PANEL_SIZE) / this.defaultPageWidthPx) * 100),
      100
    );
  }
}
