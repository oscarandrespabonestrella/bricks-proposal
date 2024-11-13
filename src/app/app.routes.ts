import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HOME_ROUTES } from './home.routes';
import { CreateDocumentComponent } from './pages/create-document/create-document.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: HomeLayoutComponent,
    children: HOME_ROUTES,
  },
  {
    path: 'create-document',
    component: CreateDocumentComponent,
  },
];
