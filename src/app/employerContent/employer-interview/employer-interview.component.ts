// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employer-interview',
//   imports: [],
//   templateUrl: './employer-interview.component.html',
//   styleUrl: './employer-interview.component.css'
// })
// export class EmployerInterviewComponent {

// }
// modules/employer-dashboard/components/upcoming-interviews/upcoming-interviews.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Interview {
  candidate: {
    name: string;
    position: string;
    avatar: string;
  };
  date: string;
  time: string;
  type: 'technical' | 'cultural' | 'initial' | 'final';
  duration: number;
  interviewers: number;
}

@Component({
  selector: 'app-employer-interview',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-card upcoming-interviews">
      <div class="card-header">
        <h2>Upcoming Interviews</h2>
        <a routerLink="/employerinterviews" class="view-all">View All</a>
      </div>
      <div class="card-content">
        <div class="interview-list">
          <div class="interview-item" *ngFor="let interview of interviews">
            <div class="interview-time">
              <div class="interview-date">{{ interview.date }}</div>
              <div class="interview-hour">{{ interview.time }}</div>
            </div>
            <div class="interview-details">
              <div class="interview-candidate">
                <img src="{{ interview.candidate.avatar }}" alt="{{ interview.candidate.name }}" height="40" width="40">
                <div>
                  <h4>{{ interview.candidate.name }}</h4>
                  <p>{{ interview.candidate.position }}</p>
                </div>
              </div>
              <div class="interview-type">
                <span class="interview-badge {{ interview.type }}">{{ interview.type | titlecase }}</span>
                <span>{{ interview.duration }} minutes</span>
              </div>
              <div class="interview-participants">
                <div class="participant-avatars">
                  <img *ngFor="let i of [].constructor(interview.interviewers)" 
                       src="/assets/placeholder.svg" alt="Interviewer {{ i+1 }}" height="30" width="30">
                </div>
                <span>{{ interview.interviewers }} interviewer{{ interview.interviewers > 1 ? 's' : '' }}</span>
              </div>
            </div>
            <div class="interview-actions">
              <button class="btn btn-outline btn-sm">Reschedule</button>
              <button class="btn" [ngClass]="interview.date === 'Today' ? 'btn-primary' : 'btn-outline'" class="btn-sm">
                {{ interview.date === 'Today' ? 'Join' : 'View Profile' }}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styleUrls:  ['../../home/home.component.css','../../jobseeker/jobseeker.component.css','../../employer-dash-board/employer-dash-board.component.css'],
})
export class EmployerInterviewComponent {
  interviews: Interview[] = [
    {
      candidate: {
        name: 'Jane Smith',
        position: 'Full Stack Engineer',
        avatar: '/assets/placeholder.svg'
      },
      date: 'Today',
      time: '2:00 PM',
      type: 'technical',
      duration: 45,
      interviewers: 2
    },
    {
      candidate: {
        name: 'John Doe',
        position: 'Senior Frontend Developer',
        avatar: '/assets/placeholder.svg'
      },
      date: 'Tomorrow',
      time: '10:00 AM',
      type: 'cultural',
      duration: 30,
      interviewers: 1
    }
  ];
}