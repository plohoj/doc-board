import { Routes } from '@angular/router';
import { notFoundRoutes } from '../not-found/not-found.routes';

export const docBoardRoutes: Routes = [
  {
    path: ':id',
    loadComponent: async () => (await import('./pages/doc-board-page/doc-board-page.component')).DocBoardPageComponent,
  },
  {
    path: '**',
    children: notFoundRoutes,
  }
];
