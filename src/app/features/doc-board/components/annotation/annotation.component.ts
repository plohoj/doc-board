import { Component, computed, DestroyRef, effect, ElementRef, inject, input, linkedSignal, model, OnInit, output, signal, viewChild } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { BehaviorSubject, delay, distinctUntilChanged, EMPTY, exhaustMap, filter, fromEvent, map, merge, shareReplay, skipWhile, switchMap, take, takeUntil, tap, timer } from 'rxjs';
import { IDocumentAnnotation } from '../../interfaces/document-with-annotations.interface';
import { IHorizontalPosition } from '../../interfaces/horizontal-position.interface';
import { IPoint } from '../../interfaces/point.interface';
import { AnnotationsService } from '../../services/annotations.service';

@Component({
  selector: 'db-annotation',
  templateUrl: './annotation.component.html',
  styleUrls: ['./annotation.component.scss'],
  imports: [
    FormsModule,
    MatIcon,
    MatIconButton,
    MatTooltip,
  ],
  host: {
    '[style.--pointer-x-ratio]': 'pointerPositionRatio().x',
    '[style.--pointer-y-ratio]': 'pointerPositionRatio().y',
    '[style.--annotation-x]': '`${annotationPositionPx().x}px`',
    '[style.--annotation-width]': '`${annotationPositionPx().width}px`',
    '[class.__hover]': 'status() === "HOVER"',
    '[class.__active]': 'status() === "ACTIVE"',
  },
})
export class AnnotationComponent implements OnInit {

  readonly #hostRef = inject<ElementRef<HTMLElement>>(ElementRef);
  readonly #annotationsService = inject(AnnotationsService);
  readonly #destroyRef = inject(DestroyRef);

  /** Элемент относительно которого выполняется абсолютное позиционирование. */
  readonly pageContainerRef = input.required<ElementRef<HTMLElement>>();
  readonly annotation = input.required<IDocumentAnnotation>();
  readonly annotationChange = output<IDocumentAnnotation>();
  readonly remove = output<void>();

  readonly pointerPositionRatio = computed<IPoint>(() => ({
    x: this.annotation().x / 100,
    y: this.annotation().y / 100,
  }));
  readonly annotationPositionPx = computed<IHorizontalPosition>(() => {
    const pageContainerRect = this.pageContainerRef().nativeElement.getBoundingClientRect();
    return this.#annotationsService.getAnnotationHorizontalPosition(
      pageContainerRect,
      this.pointerPositionRatio().x * pageContainerRect.width,
    )
  });

  readonly pointerRef = viewChild.required<ElementRef<HTMLElement>>('pointer');
  readonly textContainerRef = viewChild.required<ElementRef<HTMLElement>>('textContainer');
  readonly #statusSubject = new BehaviorSubject<'ACTIVE' | 'HOVER' | 'CLOSED'>('CLOSED');
  readonly status = toSignal(this.#statusSubject);

  constructor() {
    effect(() => {
      if (this.annotation().isActive) {
        this.#statusSubject.next('ACTIVE');

        // Удаляем флаг, который сообщает о том что нужно раскрыть аннотацию
        const {isActive: _, ...annotationWithoutIsActiveField} = this.annotation();
        this.annotationChange.emit(annotationWithoutIsActiveField);
      }
    });
  }

  ngOnInit(): void {
    // TODO Touchscreen
    const isActiveStatus$ = this.#statusSubject.pipe(
      map(status => status === 'ACTIVE'),
      distinctUntilChanged(),
      shareReplay({ bufferSize: 1, refCount: true }),
    );

    // #region Обработка перетаскивания
    fromEvent<MouseEvent>(this.pointerRef().nativeElement, 'mousedown').pipe(
      exhaustMap((mouseDownEvent) => {
        let dragHandler$ = fromEvent<MouseEvent>(window, 'mousemove');
        // Защита от случайного движения мышью во время клика
        if (this.#statusSubject.value !== 'ACTIVE') {
          const START_MOVING_DISTANCE_PX = 10;
          dragHandler$ = dragHandler$.pipe(
            skipWhile(mouseMoveEvent =>
              Math.pow(mouseDownEvent.x - mouseMoveEvent.x, 2) + Math.pow(mouseDownEvent.y - mouseMoveEvent.y, 2)
                <= Math.pow(START_MOVING_DISTANCE_PX, 2)
            ),
          );
        }
        let wasDragEvent = false;
        return dragHandler$.pipe(
          tap(mouseMoveEvent => {
            wasDragEvent = true;
            this.#setPositionByEvent(mouseMoveEvent);
          }),
          takeUntil(
            fromEvent<MouseEvent>(window, 'mouseup').pipe(
              tap(() => {
                // После окончания перетаскивания нужно отменить событие клика,
                // иначе при клике вне аннотации будет создана новая аннотация.
                if (wasDragEvent) {
                  fromEvent(window, 'click', { capture: true }).pipe(
                    tap(event => event.stopPropagation()),
                    takeUntil(timer(0)),
                  ).subscribe();
                }
              })
            )
          ),
          filter(() => this.#statusSubject.value !== 'ACTIVE'),
          tap(() => this.#statusSubject.next('ACTIVE')),
        );
      }),
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe();
    // #endregion

    // #region Обработка наведения
    isActiveStatus$.pipe(
      switchMap(isActiveStatus => isActiveStatus
        ? EMPTY
        : fromEvent<MouseEvent>(this.#hostRef.nativeElement, 'mouseenter').pipe(
          tap(() => this.#statusSubject.next('HOVER')),
          switchMap(() => fromEvent<MouseEvent>(this.#hostRef.nativeElement, 'mouseleave').pipe(
            delay(100),
            tap(() => this.#statusSubject.next('CLOSED')),
            take(1),
          )),
        )
      ),
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe();
    // #endregion

    // #region Обработка внутри аннотации
    fromEvent<MouseEvent>(this.#hostRef.nativeElement, 'click').pipe(
      tap(() => this.#statusSubject.next('ACTIVE')),
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe();
    // #endregion

    // #region Обработка вне аннотации
    isActiveStatus$.pipe(
      switchMap(isActiveStatus => isActiveStatus
        ? fromEvent<MouseEvent>(window, 'mousedown').pipe(
          filter(event => !this.#isAnnotationContainTarget(event.target as Node)),
          tap(() => this.#statusSubject.next('CLOSED')),
          takeUntilDestroyed(this.#destroyRef),
        )
        : EMPTY,
      ),
    ).subscribe();
    // #endregion
  }

  onRemove(): void {
    requestAnimationFrame(() => this.#removingWithAnimation());
  }

  onClose(): void {
    requestAnimationFrame(() => this.#statusSubject.next('CLOSED'));
  }

  onCommentChange(comment: string): void {
    this.annotationChange.emit({
      ...this.annotation(),
      comment,
    });
  }

  #removingWithAnimation(): void {
    merge(
      fromEvent(this.textContainerRef().nativeElement, 'animationend'),
      fromEvent(this.textContainerRef().nativeElement, 'animationcancel'),
    ).pipe(
      take(1),
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe(() => this.remove.emit());
    this.#statusSubject.next('CLOSED');
  }

  #isAnnotationContainTarget(target: Node): boolean {
    return this.#hostRef.nativeElement.contains(target);
  }

  #setPositionByEvent(event: MouseEvent): void {
    this.annotationChange.emit({
      ...this.annotation(),
      ...this.#annotationsService.getPointerPositionPercentByEvent(
        event,
        this.pageContainerRef().nativeElement.getBoundingClientRect()
      )
    });
  }
}
