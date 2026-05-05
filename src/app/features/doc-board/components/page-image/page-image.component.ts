import { Component, ElementRef, inject, input, signal } from '@angular/core';
import { IDocumentPage } from '../../interfaces/document.interface';
import { AnnotationComponent } from '../annotation/annotation.component';
import { MatProgressSpinner } from '@angular/material/progress-spinner';

@Component({
  selector: 'db-page-image',
  templateUrl: './page-image.component.html',
  styleUrls: ['./page-image.component.scss'],
  host: {
    '[class.__has-error]': 'status() === "ERROR"',
    '[class.__loading]': 'status() === "LOADING"',
  },
  imports: [
    AnnotationComponent,
    MatProgressSpinner
  ],
})
export class PageImageComponent {
  readonly hostRef = inject<ElementRef<HTMLElement>>(ElementRef);

  readonly page = input.required<IDocumentPage>();

  readonly status = signal<'LOADING' | 'ERROR' | 'LOADED'>('LOADING');

  onImageLoadingError(): void {
    this.status.set('ERROR');
  }

  onImageLoadingEnd(): void {
    this.status.set('LOADED');
  }
}
