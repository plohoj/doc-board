import { Routes } from '@angular/router';
import { docBoardRoutes } from './features/doc-board/doc-board.routes';

export const routes: Routes = [
  {
    path: '',
    children: docBoardRoutes,
  },
];
