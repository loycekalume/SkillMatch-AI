
import { Routes } from '@angular/router';
import { JobsPostedComponent } from './jobs-posted/jobs-posted.component';
import { ApplicationsComponent } from './applications/applications.component';
import { EmployerDashboardComponent } from '../employer-dash-board/employer-dash-board.component';
import { EmployerInterviewComponent } from './employer-interview/employer-interview.component';
// import { MessagesComponent } from './messages/messages.component';

export const EMPLOYER_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: EmployerDashboardComponent },
  { path: 'applications', component:ApplicationsComponent },
  { path: 'job-postings', component: JobsPostedComponent },
  { path: 'interviews', component: EmployerInterviewComponent },
  // { path: 'messages', component: MessagesComponent }
];