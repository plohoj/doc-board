import { Injectable } from '@angular/core';
import { IHorizontalPosition } from '../interfaces/horizontal-position.interface';

@Injectable()
export class AnnotationsService {

  #documentContainerElement?: HTMLElement;

  readonly #MAX_ANNOTATION_SIZE_PX = 550;
  readonly #ANNOTATION_SIZE_RATIO = 0.9;
  readonly #PADDING_PX = 16;

  setDocumentContainer(element: HTMLElement): void {
    this.#documentContainerElement = element;
  }

  getAnnotationHorizontalPosition(
    /** Элемент относительно которого выполняется абсолютное позиционирование */
    pageContainerRect: DOMRect,
    /** Координаты относительно {@link pageContainerRect} */
    pointerX: number,
  ): IHorizontalPosition {
    if (!this.#documentContainerElement) {
      return { x: 0, width: 0 };
    }
    const documentContainerRect = this.#documentContainerElement.getBoundingClientRect();
    const annotationWidth = Math.min(
      this.#MAX_ANNOTATION_SIZE_PX,
      this.#documentContainerElement.clientWidth * this.#ANNOTATION_SIZE_RATIO
    );

    const containerLeftScroll = this.#documentContainerElement.scrollLeft;
    const padding = Math.min(this.#PADDING_PX, (this.#documentContainerElement.clientWidth - annotationWidth) / 2);

    const documentAndPageDiffX = pageContainerRect.x - documentContainerRect.x + containerLeftScroll;
    // Координаты относительно контейнера документа
    let annotationX = documentAndPageDiffX + pointerX - (annotationWidth / 2);
    // Смещаем от левой границы
    annotationX = Math.max(containerLeftScroll + padding, annotationX);
    // Смещаем от правой границы
    annotationX = Math.min(containerLeftScroll + this.#documentContainerElement.clientWidth - padding - annotationWidth, annotationX);

    return { x: annotationX - documentAndPageDiffX, width: annotationWidth };
  }
}
