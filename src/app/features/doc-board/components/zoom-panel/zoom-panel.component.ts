import { Component, linkedSignal, model } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatIconButton } from '@angular/material/button';
import { MatFormField, MatSuffix } from '@angular/material/form-field';
import { MatIcon } from '@angular/material/icon';
import { MatInput } from '@angular/material/input';
import { MatTooltip } from '@angular/material/tooltip';

@Component({
  selector: 'db-zoom-panel',
  templateUrl: './zoom-panel.component.html',
  styleUrls: ['./zoom-panel.component.scss'],
  imports: [
    FormsModule,
    MatIconButton,
    MatIcon,
    MatTooltip,
    MatFormField,
    MatSuffix,
    MatInput
  ]
})
export class ZoomPanelComponent {

  #initialValue = 100;
  readonly MIN_ZOOM = 25;
  readonly MAX_ZOOM = 500;
  readonly ZOOM_STEP = 25;

  readonly value = model.required<number>();
  readonly textValue = linkedSignal(() => `${this.value()}`);

  shiftValue(value: number): void {
    const newValue = this.value() + value;
    this.applyValue(newValue);
  }

  onInputFocus(): void {
    this.#initialValue = this.value();
  }

  applyValue(value: string | number): void {
    const parsedValue: number = parseInt(value as string, 10);
    if (isNaN(parsedValue)) {
      this.value.set(this.#initialValue);
    } else {
      this.value.set(Math.min(Math.max(this.MIN_ZOOM, parsedValue), this.MAX_ZOOM));
    }
    this.textValue.set(`${this.value()}`);
  }
}
