import { Component, input } from '@angular/core';

@Component({
  selector: 'db-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  readonly title = input('');
}
