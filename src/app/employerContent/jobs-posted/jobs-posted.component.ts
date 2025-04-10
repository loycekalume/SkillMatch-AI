// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-jobs-posted',
//   imports: [],
//   templateUrl: './jobs-posted.component.html',
//   styleUrl: './jobs-posted.component.css'
// })
// export class JobsPostedComponent {

// }
// components/job-postings/job-postings.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface JobPosting {
  title: string;
  location: string;
  remote: boolean;
  postedDaysAgo: number;
  applicantsCount: number;
  interviewsCount: number;
  shortlistedCount: number;
  status: 'active' | 'closed' | 'draft';
}

@Component({
  selector: 'app-jobs-posted',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-card job-postings">
      <div class="card-header">
        <h2>Job Postings</h2>
        <a routerLink="/jobs" class="view-all">Manage All</a>
      </div>
      <div class="card-content">
        <div class="job-posting-list">
          <div class="job-posting-item" *ngFor="let job of jobs">
            <div class="job-posting-info">
              <h3>{{ job.title }}</h3>
              <div class="job-posting-meta">
                <span><i class="fas fa-map-marker-alt"></i> {{ job.location }} {{ job.remote ? '(Remote)' : '' }}</span>
                <span><i class="fas fa-clock"></i> Posted {{ getPostedTimeText(job.postedDaysAgo) }}</span>
              </div>
            </div>
            <div class="job-posting-stats">
              <div class="job-stat">
                <div class="job-stat-value">{{ job.applicantsCount }}</div>
                <div class="job-stat-label">Applicants</div>
              </div>
              <div class="job-stat">
                <div class="job-stat-value">{{ job.interviewsCount }}</div>
                <div class="job-stat-label">Interviews</div>
              </div>
              <div class="job-stat">
                <div class="job-stat-value">{{ job.shortlistedCount }}</div>
                <div class="job-stat-label">Shortlisted</div>
              </div>
            </div>
            <div class="job-posting-status" [ngClass]="job.status">
              <span>{{ job.status | titlecase }}</span>
            </div>
            <div class="job-posting-actions">
              <button class="btn btn-outline btn-sm">Edit</button>
              <button class="btn btn-primary btn-sm">View Applicants</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls:  ['../../home/home.component.css','../../jobseeker/jobseeker.component.css','../../employer-dash-board/employer-dash-board.component.css'],
})
export class JobsPostedComponent {
  jobs: JobPosting[] = [
    {
      title: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      remote: true,
      postedDaysAgo: 14,
      applicantsCount: 18,
      interviewsCount: 5,
      shortlistedCount: 2,
      status: 'active'
    },
    {
      title: 'Full Stack Engineer',
      location: 'New York, NY',
      remote: false,
      postedDaysAgo: 7,
      applicantsCount: 12,
      interviewsCount: 3,
      shortlistedCount: 1,
      status: 'active'
    },
    {
      title: 'UI/UX Designer',
      location: 'Austin, TX',
      remote: true,
      postedDaysAgo: 3,
      applicantsCount: 9,
      interviewsCount: 0,
      shortlistedCount: 0,
      status: 'active'
    }
  ];

  getPostedTimeText(days: number): string {
    if (days < 7) {
      return `${days} days ago`;
    } else if (days < 14) {
      return '1 week ago';
    } else if (days < 21) {
      return '2 weeks ago';
    } else if (days < 30) {
      return '3 weeks ago';
    } else {
      return `${Math.floor(days / 30)} month${Math.floor(days / 30) > 1 ? 's' : ''} ago`;
    }
  }
}