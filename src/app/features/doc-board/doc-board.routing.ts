import { Routes, RouterModule } from '@angular/router';

export const docBoardRoutes: Routes = [
  {
    path: ':id',
    loadComponent: async () => (await import('./pages/doc-board-page/doc-board-page.component')).DocBoardPageComponent,
  }
];
