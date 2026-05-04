import { Routes } from '@angular/router';

export const notFoundRoutes: Routes = [
  {
    path: '**',
    loadComponent: async () => (await import('./pages/not-found-page/not-found-page.component')).NotFoundPageComponent,
  }
];
