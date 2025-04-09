
import { Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProfileComponent } from './profile/profile.component';
import { JobsComponent } from './jobs/jobs.component';

import { InterviewsComponent } from './interviews/interviews.component';
import { MessagesComponent } from './messages/messages.component';

export const JOBSEEKER_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'interviews', component: InterviewsComponent },
  { path: 'messages', component: MessagesComponent }
];