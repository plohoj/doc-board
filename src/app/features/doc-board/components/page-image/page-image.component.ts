import { Component, input, signal } from '@angular/core';
import { IDocumentPage } from '../../interfaces/document.interface';

@Component({
  selector: 'db-page-image',
  templateUrl: './page-image.component.html',
  styleUrls: ['./page-image.component.scss'],
  host: {
    '[class.__has-error]': 'hasError()',
  }
})
export class PageImageComponent {
  readonly page = input.required<IDocumentPage>();

  readonly hasError = signal(false);

  onImageLoadingError(): void {
    this.hasError.set(true);
  }
}
