import { Component, computed, DestroyRef, ElementRef, inject, input, model, OnInit, viewChild } from '@angular/core';
import { takeUntilDestroyed, toSignal } from '@angular/core/rxjs-interop';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { MatTooltip } from '@angular/material/tooltip';
import { BehaviorSubject, delay, distinctUntilChanged, EMPTY, exhaustMap, filter, fromEvent, map, merge, shareReplay, skipUntil, skipWhile, switchMap, take, takeUntil, tap, timer } from 'rxjs';
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
    '[style.--pointer-x-ratio]': 'pointerPositionPercent().x / 100',
    '[style.--pointer-y-ratio]': 'pointerPositionPercent().y / 100',
    '[style.--annotation-x]': '`${annotationPositionPx().x}px`',
    '[style.--annotation-width]': '`${annotationPositionPx().width}px`',
    '[class.__hover]': 'status() === "HOVER"',
    '[class.__active]': 'status() === "ACTIVE"',
  }
})
export class AnnotationComponent implements OnInit {

  readonly #annotationsService = inject(AnnotationsService);
  readonly #destroyRef = inject(DestroyRef);

  /** Элемент относительно которого выполняется абсолютное позиционирование. */
  readonly pageContainerRef = input.required<ElementRef<HTMLElement>>();
  readonly pointerPositionPercent = model.required<IPoint>();
  readonly annotationPositionPx = computed<IHorizontalPosition>(() => {
    const pageContainerRect = this.pageContainerRef().nativeElement.getBoundingClientRect();
    return this.#annotationsService.getAnnotationHorizontalPosition(
      pageContainerRect,
      (this.pointerPositionPercent().x / 100) * pageContainerRect.width,
    )
  });
  readonly text = model<string>('');

  readonly pointerRef = viewChild.required<ElementRef<HTMLElement>>('pointer');
  readonly textContainerRef = viewChild.required<ElementRef<HTMLElement>>('textContainer');
  readonly #statusSubject = new BehaviorSubject<'ACTIVE' | 'HOVER' | 'CLOSED'>('CLOSED');
  readonly status = toSignal(this.#statusSubject);

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
        return dragHandler$.pipe(
          tap(mouseMoveEvent => this.#setPositionByEvent(mouseMoveEvent)),
          takeUntil(fromEvent<MouseEvent>(window, 'mouseup')),
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
        : merge(
          fromEvent<MouseEvent>(this.pointerRef().nativeElement, 'mouseenter'),
          fromEvent<MouseEvent>(this.textContainerRef().nativeElement, 'mouseenter'),
        ).pipe(
          tap(() => this.#statusSubject.next('HOVER')),
          switchMap(() => merge(
            fromEvent<MouseEvent>(this.pointerRef().nativeElement, 'mouseleave'),
            fromEvent<MouseEvent>(this.textContainerRef().nativeElement, 'mouseleave'),
          ).pipe(
            delay(100),
            tap(() => this.#statusSubject.next('CLOSED')),
            take(1),
          )),
        )
      ),
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe();
    // #endregion

    // #region Обработка клика
    merge(
      fromEvent<MouseEvent>(this.pointerRef().nativeElement, 'click'),
      fromEvent<MouseEvent>(this.textContainerRef().nativeElement, 'click'),
    ).pipe(
      tap(() => this.#statusSubject.next('ACTIVE')),
      exhaustMap(() => fromEvent<MouseEvent>(window, 'mousedown').pipe(
        filter(event => this.#isAnnotationContainTarget(event.target as Node)),
        tap(() => this.#statusSubject.next('CLOSED')),
        take(1),
      )),
      takeUntilDestroyed(this.#destroyRef),
    ).subscribe();
    // #endregion
  }

  remove(): void {
    // TODO
  }

  close(): void {
    requestAnimationFrame(() => this.#statusSubject.next('CLOSED'));
  }

  #isAnnotationContainTarget(target: Node): boolean {
    return !this.pointerRef().nativeElement.contains(target)
      && !this.textContainerRef().nativeElement.contains(target);
  }

  #setPositionByEvent(event: MouseEvent): void {
    const pageContainerRect = this.pageContainerRef().nativeElement.getBoundingClientRect();
    const pointerXRatio = (event.clientX - pageContainerRect.left) / pageContainerRect.width;
    const pointerYRatio = (event.clientY - pageContainerRect.top) / pageContainerRect.height;

    this.pointerPositionPercent.set({ x: pointerXRatio * 100, y: pointerYRatio * 100 });
  }
}
