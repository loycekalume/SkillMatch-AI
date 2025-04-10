import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployerComponent } from './employer/employer.component';
import { AdminComponent } from './admin/admin.component';
import { ProfileComponent } from './jobseekerContent/profile/profile.component';
import { MainLayoutComponent } from './main-layout/main-layout.component';
import { DashboardComponent } from './jobseekerContent/dashboard/dashboard.component';

import { JobsComponent } from './jobseekerContent/jobs/jobs.component';

import { ApplicationsComponent } from './employerContent/applications/applications.component';

import { InterviewsComponent } from './jobseekerContent/interviews/interviews.component';
import { MessagesComponent } from './jobseekerContent/messages/messages.component';
import { EmployerDashboardComponent } from './employer-dash-board/employer-dash-board.component';
import { EmployerInterviewComponent } from './employerContent/employer-interview/employer-interview.component';
import { JobsPostedComponent } from './employerContent/jobs-posted/jobs-posted.component';
import path from 'path';
import { AdmindashboardComponent } from './adminContent/admindashboard/admindashboard.component';

export const routes: Routes = [
    {
        path: '',
        loadComponent() {
            return import('./home/home.component').then(({ HomeComponent }) => HomeComponent);
        },
    },
    {
        path: 'signUp',
        loadComponent() {
            return import('./sign-up/sign-up.component').then(({ SignUpComponent }) => SignUpComponent);
        },
    },
    {
        path: 'login',
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
                path: 'jobseeker',
                loadChildren: () => import('./jobseekerContent/jobseeker.routes').then(m => m.JOBSEEKER_ROUTES)
            },]
    },

    // {
    //     path: 'employer',
    //     component: EmployerDashboardComponent,
    //     children: [
    //         {
    //             path: '',
    //             loadChildren: () => import('./employerContent/employer.routes').then(m => m.EMPLOYER_ROUTES)
    //         },]
    // },
    // { path: 'profile', component: ProfileComponent },
    // { path: '', redirectTo: 'dashboard', pathMatch: 'full' },

    // {
    //     path: "jobseeker", component: MainLayoutComponent, children: [
    //         { path: '', component: DashboardComponent },
    //         { path: 'profile', component: ProfileComponent },
    //         { path: 'jobs', component: JobsComponent },

    //         { path: 'interviews', component: InterviewsComponent },
    //         { path: 'messages', component: MessagesComponent }
    //     ]
    // },

 
  {
        path: '',
        component: EmployerDashboardComponent,
        children: [
               {
               path: 'employer',
               loadChildren: () => import('./employerContent/employer.routes').then(m => m.EMPLOYER_ROUTES)
               }    
            // { path: 'applications', component: ApplicationsComponent },
            // { path: 'jobsPosted', component: JobsPostedComponent },

            // { path: 'employerinterviews', component: EmployerInterviewComponent },
            // { path: 'messages', component: MessagesComponent }
        ],
    },
   {
    path: '',
    component: AdmindashboardComponent,
    children: [
          {
        path: 'admin',
        loadChildren: () => import('./adminContent/admin.routes').then(m => m.ADMIN_ROUTES)
          }
    ]

},
];
