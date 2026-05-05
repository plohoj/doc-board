import { Component, ElementRef, inject, input, output, signal, viewChild } from '@angular/core';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { IDocumentAnnotation, IDocumentPageWithAnnotations } from '../../interfaces/document-with-annotations.interface';
import { AnnotationComponent } from '../annotation/annotation.component';
import { AnnotationsService } from '../../services/annotations.service';

@Component({
  selector: 'db-page-image',
  templateUrl: './page-image.component.html',
  styleUrls: ['./page-image.component.scss'],
  host: {
    '[class.__has-error]': 'status() === "ERROR"',
    '[class.__loading]': 'status() === "LOADING"',
    '(click)': 'onHostClick($event)',
  },
  imports: [
    AnnotationComponent,
    MatProgressSpinner,
  ],
})
export class PageImageComponent {

  readonly #annotationsService = inject(AnnotationsService);

  readonly page = input.required<IDocumentPageWithAnnotations>();
  readonly pageChange = output<IDocumentPageWithAnnotations>();

  readonly status = signal<'LOADING' | 'ERROR' | 'LOADED'>('LOADING');
  readonly pageContainerRef = viewChild.required<ElementRef<HTMLElement>>('pageContainer');

  onImageLoadingError(): void {
    this.status.set('ERROR');
  }

  onImageLoadingEnd(): void {
    this.status.set('LOADED');
  }

  onAnnotationChange(annotation: IDocumentAnnotation, index: number): void {
    const modifiedAnnotations = [...this.page().annotations];
    modifiedAnnotations[index] = annotation;
    this.pageChange.emit({
      ...this.page(),
      annotations: modifiedAnnotations,
    });
  }

  onAnnotationRemove(index: number): void {
    this.pageChange.emit({
      ...this.page(),
      annotations: [
        ...this.page().annotations.slice(0, index),
        ...this.page().annotations.slice(index + 1),
      ],
    });
  }

  onHostClick(event: MouseEvent): void {
    const eventTarget = event.target
    if (eventTarget instanceof HTMLElement && eventTarget.closest('db-annotation')) {
      return;
    }

    this.pageChange.emit({
      ...this.page(),
      annotations: [
        ...this.page().annotations,
        {
          ...this.#annotationsService.getPointerPositionPercentByEvent(
            event,
            this.pageContainerRef().nativeElement.getBoundingClientRect(),
          ),
          comment: '',
          isActive: true,
        },
      ],
    });
  }
}
