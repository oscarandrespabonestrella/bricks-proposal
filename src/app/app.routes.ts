import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { HOME_ROUTES } from './home.routes';
import { CreateDocumentComponent } from './pages/create-document/create-document.component';
import { HomeLayoutComponent } from './pages/home-layout/home-layout.component';
import { IndexComponent } from './pages/index/index.component';

export const APP_ROUTES: Routes = [
  {
    path: '',
    component: IndexComponent    
  },
  {
    path: 'bricks',
    component: HomeLayoutComponent,
    children: HOME_ROUTES,
  }
];
