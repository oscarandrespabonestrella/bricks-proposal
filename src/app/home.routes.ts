import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateDocumentComponent } from './pages/create-document/create-document.component';
import { CreateAssignmentComponent } from './pages/create-assignment/create-assignment.component';

export const HOME_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'create-document',
    component: CreateDocumentComponent,
  },
  {
    path: 'create-assignment',
    component: CreateAssignmentComponent,
  },
];
