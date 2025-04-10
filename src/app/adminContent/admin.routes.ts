
import { Routes } from '@angular/router';
import { AdmindashboardComponent } from './admindashboard/admindashboard.component';



export const ADMIN_ROUTES: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: AdmindashboardComponent },
   

  // { path: 'messages', component: MessagesComponent }
];