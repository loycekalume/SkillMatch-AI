

// pages/employer-dashboard/employer-dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../employerContent/sidebar/sidebar.component';
import { HeaderComponent } from '../employerContent/header/header.component';
import { StatsComponent } from '../employerContent/stats/stats.component';
import { TopcandidatesComponent } from '../employerContent/topcandidates/topcandidates.component';
// import { HiringMetricsComponent } from '../../components/hiring-metrics/hiring-metrics.component';
import { ApplicationsComponent } from '../employerContent/applications/applications.component';
// import { RecentActivityComponent } from '../../components/recent-activity/recent-activity.component';
import { EmployerInterviewComponent } from '../employerContent/employer-interview/employer-interview.component';
import { JobsPostedComponent } from '../employerContent/jobs-posted/jobs-posted.component';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    StatsComponent,
    TopcandidatesComponent,
    
    JobsPostedComponent,
    ApplicationsComponent,
    
    EmployerInterviewComponent
  ],
  template: `
    <div class="dashboard-container">
      <app-sidebar></app-sidebar>
      <main class="main-content">
        <app-header (menuToggle)="toggleSidebar()"></app-header>
        <div class="dashboard-content">
          <!-- Action Button -->
          <div class="action-button-container">
            <button class="btn btn-primary post-job-btn">
              <i class="fas fa-plus"></i> Post New Job
            </button>
          </div>

          <!-- Stats Cards -->
          <app-stats></app-stats>

          <!-- Main Dashboard Sections -->
          <div class="dashboard-grid">
            <app-top-candidates></app-top-candidates>
            
          <app-jobs-posted></app-jobs-posted>
            <app-applications></app-applications>
            
            <app-employer-interview></app-employer-interview>
          </div>
        </div>
      </main>
    </div>
  `,
  styleUrls: ['employer-dash-board.component.css','../home/home.component.css','../jobseeker/jobseeker.component.css'],
})
export class EmployerDashboardComponent {
  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }
}

