import { Routes } from '@angular/router';
import { docBoardRoutes } from './features/doc-board/doc-board.routing';

export const routes: Routes = [
  {
    path: '',
    children: docBoardRoutes
  }
];
