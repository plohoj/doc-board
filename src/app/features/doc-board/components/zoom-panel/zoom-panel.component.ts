import { Component, model } from '@angular/core';
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

  readonly defaultValue = 100;
  readonly minZoom = 25;
  readonly maxZoom = 500;
  readonly zoomStep = 25;

  readonly value = model(this.defaultValue);

  shiftValue(value: number): void {
    const newValue = this.value() + value;
    this.applyValue(newValue);
  }

  applyValue(value: string | number): void {
    const parsedValue: number = parseInt(value as string, 10);
    if (isNaN(parsedValue)) {
      this.value.set(this.defaultValue);
    } else {
      this.value.set(Math.min(Math.max(parsedValue, this.minZoom), this.maxZoom));
    }
  }
}
