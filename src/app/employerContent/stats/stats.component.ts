// components/stats/stats.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stats-row">
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-briefcase"></i>
        </div>
        <div class="stat-info">
          <h3>Active Job Postings</h3>
          <div class="stat-value">5</div>
          <p>2 jobs posted this month</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-users"></i>
        </div>
        <div class="stat-info">
          <h3>Total Applicants</h3>
          <div class="stat-value">47</div>
          <p>12 new applications this week</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-calendar-check"></i>
        </div>
        <div class="stat-info">
          <h3>Scheduled Interviews</h3>
          <div class="stat-value">8</div>
          <p>Next interview: Today, 2:00 PM</p>
        </div>
      </div>
      <div class="stat-card">
        <div class="stat-icon">
          <i class="fas fa-user-check"></i>
        </div>
        <div class="stat-info">
          <h3>Hired Candidates</h3>
          <div class="stat-value">3</div>
          <p>1 candidate hired this month</p>
        </div>
      </div>
    </div>
  `,
  styleUrls:  ['../../home/home.component.css','../../jobseeker/jobseeker.component.css','../../employer-dash-board/employer-dash-board.component.css'],
})
export class StatsComponent {}