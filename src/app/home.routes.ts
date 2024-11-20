import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { CreateDocumentComponent } from './pages/create-document/create-document.component';
import { CreateAssignmentComponent } from './pages/create-assignment/create-assignment.component';
import { InboxComponent } from './pages/inbox/inbox.component';
import { TaskDetailComponent } from './pages/task-detail/task-detail.component';
import { DocumentDetailComponent } from './pages/document-detail/document-detail.component';

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
    path: 'inbox',
    component: InboxComponent,
  },
  {
    path: 'task-detail',
    component: TaskDetailComponent,
  },
  {
    path: 'document-detail',
    component: DocumentDetailComponent,
  },
  {
    path: 'create-assignment',
    component: CreateAssignmentComponent,
  },
];
