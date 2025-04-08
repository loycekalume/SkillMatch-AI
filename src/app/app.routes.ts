import { Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { JobseekerComponent } from './jobseeker/jobseeker.component';
import { EmployerComponent } from './employer/employer.component';
import { AdminComponent } from './admin/admin.component';
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
    { path: 'jobseeker', component: JobseekerComponent },
    { path: 'employer', component: EmployerComponent },
    { path: 'admin', component: AdminComponent },

];
