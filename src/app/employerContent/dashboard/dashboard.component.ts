// pages/employer-dashboard/employer-dashboard.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { StatsComponent } from '../stats/stats.component';
import { TopcandidatesComponent } from '../topcandidates/topcandidates.component';
import { JobsComponent } from '../jobs/jobs.component';
// import { HiringMetricsComponent } from '../../components/hiring-metrics/hiring-metrics.component';
import { ApplicationsComponent } from '..//applications/applications.component';
// import { RecentActivityComponent } from '../../components/recent-activity/recent-activity.component';
import { InterviewsComponent } from '../interviews/interviews.component';

@Component({
  selector: 'app-employer-dashboard',
  standalone: true,
  imports: [
    CommonModule,
    SidebarComponent,
    HeaderComponent,
    StatsComponent,
    TopcandidatesComponent,
    JobsComponent,
    
    ApplicationsComponent,
    
    InterviewsComponent
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
            <app-jobs></app-jobs>
          
            <app-applications></app-applications>
            
            <app-interviews></app-interviews>
          </div>
        </div>
      </main>
    </div>
  `,
  styles: []
})
export class DashboardComponent {
  toggleSidebar(): void {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('active');
    }
  }
}