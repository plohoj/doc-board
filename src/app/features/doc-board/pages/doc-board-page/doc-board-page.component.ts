import { Component, computed, DestroyRef, ElementRef, inject, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { MatButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { ActivatedRoute } from '@angular/router';
import { catchError, EMPTY, fromEvent, map, merge, switchMap, tap } from 'rxjs';
import { HeaderComponent } from '../../../../shared/components/header/header.component';
import { PageImageComponent } from '../../components/page-image/page-image.component';
import { ZoomPanelComponent } from '../../components/zoom-panel/zoom-panel.component';
import { IDocumentPageWithAnnotations, IDocumentWithAnnotations } from '../../interfaces/document-with-annotations.interface';
import { AnnotationsService } from '../../services/annotations.service';
import { DocBoardService } from '../../services/doc-board.service';

@Component({
  selector: 'db-doc-board-page',
  templateUrl: './doc-board-page.component.html',
  styleUrls: ['./doc-board-page.component.scss'],
  host: {
    '[style.--default-page-width]': '`${DEFAULT_PAGE_WIDTH_PX}px`',
    '[style.--page-zoom-ratio]': 'zoomRatio()',
  },
  imports: [
    MatProgressSpinner,
    MatButton,
    MatIcon,

    HeaderComponent,
    ZoomPanelComponent,
    PageImageComponent,
  ],
  providers: [
    DocBoardService,
    AnnotationsService,
  ],
})
export class DocBoardPageComponent {
  readonly #annotationsService = inject(AnnotationsService);
  readonly #docBoardService = inject(DocBoardService);
  readonly #destroyRef = inject(DestroyRef);

  // TODO Можно реализовать сервис который загрузит все изображения,
  // для того что бы получить максимальную ширину изображений
  readonly DEFAULT_PAGE_WIDTH_PX = 794;
  readonly zoomPercent = signal(this.#getDefaultZoom(window.innerWidth));
  readonly zoomRatio = computed(() => this.zoomPercent() / 100);

  readonly loadingState = signal<'LADING' | 'LOADED' | 'ERROR'>('LADING');
  readonly document = signal<IDocumentWithAnnotations | null>(null);

  readonly documentId$ = inject(ActivatedRoute).params.pipe(
    map(params => params['id'] as string)
  )

  readonly documentContainerRef = viewChild.required<ElementRef<HTMLElement>>('documentContainer');

  ngOnInit(): void {
    this.#annotationsService.setDocumentContainer(this.documentContainerRef().nativeElement);

    // Загрузка документа
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

    // scroll и resize события
    merge(
      fromEvent(window, 'resize'),
      fromEvent(this.documentContainerRef().nativeElement, 'scroll'),
    ).pipe(
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe(() => this.#annotationsService.dispatchUpdateAnnotationPosition());
  }

  onPageChange(page: IDocumentPageWithAnnotations, index: number): void {
    const modifiedPages = [...this.document()!.pages];
    modifiedPages[index] = page;

    this.document.set({
      ...this.document()!,
      pages: modifiedPages,
    });
  }

  onSave(): void {
    this.#docBoardService.saveDocument(this.document()!).pipe(
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe();
  }

  #getDefaultZoom(windowWidth: number): number {
    // TODO На мобильном экране и в некоторых браузерах, полосы прокрутки не отнимают место
    const SCROLL_PANEL_SIZE = 15 // Примерный размер полосы прокрутки
    const PADDINGS = 32;
    return Math.min(
      Math.floor(((windowWidth - SCROLL_PANEL_SIZE - PADDINGS) / this.DEFAULT_PAGE_WIDTH_PX) * 100),
      100
    );
  }
}
