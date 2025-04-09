import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployerComponent } from './employer/employer.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './jobseekerContent/profile/profile.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './jobseekerContent/dashboard/dashboard.component';

import { JobsComponent } from './jobseekerContent/jobs/jobs.component';

import { InterviewsComponent } from './jobseekerContent/interviews/interviews.component';
import { MessagesComponent } from './jobseekerContent/messages/messages.component';

export const routes: Routes = [
    { path: '',
        loadComponent() {
            return import('./home/home.component').then(({ HomeComponent }) => HomeComponent);
        },
     }, 
    { path: 'signUp', 
        loadComponent() {
            return import('./sign-up/sign-up.component').then(({ SignUpComponent }) => SignUpComponent);
        },
    },
    { path: 'login', 
        loadComponent() {
            return import('./login/login.component').then(({ LoginComponent }) => LoginComponent);
        },
    },
    // { path: 'jobseeker', component: JobseekerComponent },
    // { path: 'employer', component: EmployerComponent },
    { path: 'admin', component: AdminComponent },
    {
        path: '',
        component: MainLayoutComponent,
        children: [
          {
            path: '',
            loadChildren: () => import('./jobseekerContent/jobseeker.routes').then(m => m.JOBSEEKER_ROUTES)
          },]},
    { path: 'profile', component: ProfileComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  
  {path:"jobseeker", component: MainLayoutComponent,children:[
    { path: '', component: DashboardComponent },
    { path: 'profile', component: ProfileComponent },
      { path: 'jobs', component: JobsComponent },
      
      { path: 'interviews', component: InterviewsComponent },
      { path: 'messages', component: MessagesComponent }
  ]}
];
