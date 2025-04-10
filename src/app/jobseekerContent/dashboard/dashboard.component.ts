// src/app/features/jobseeker/dashboard/dashboard.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterModule } from '@angular/router';
import { JdataService } from '../../services/jdata.service';
import { HomeComponent } from '../../home/home.component';

// Import sub-components of the dashboard
import { StatsCardComponent } from '../stats-card/stats-card.component';
import { JobmatchesComponent } from '../jobmatches/jobmatches.component';
import { JobseekerComponent } from '../../jobseeker/jobseeker.component';
// import { SkillsAnalysisComponent } from '../../../components/skills-analysis/skills-analysis.component';
// import { RecentActivityComponent } from '../../../components/recent-activity/recent-activity.component';
// import { UpcomingInterviewsComponent } from '../../../components/upcoming-interviews/upcoming-interviews.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    CommonModule,
   
    RouterModule,
    StatsCardComponent,
    JobmatchesComponent,
    // SkillsAnalysisComponent,
    // RecentActivityComponent,
    // UpcomingInterviewsComponent
  ],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css','../../home/home.component.css','../../jobseeker/jobseeker.component.css'],
})
export class DashboardComponent implements OnInit {
  statsData: any[] = [];
  
  constructor(private dataService: JdataService) {}
  
  ngOnInit(): void {
    this.statsData = [
      { 
        icon: 'fas fa-chart-line', 
        title: 'Profile Strength', 
        value: `${this.dataService.getUser().profileStrength}%`, 
        progress: this.dataService.getUser().profileStrength,
        text: 'Complete your profile to increase visibility'
      },
      { 
        icon: 'fas fa-briefcase', 
        title: 'Job Applications', 
        value: '12', 
        text: '4 new applications this week'
      },
      { 
        icon: 'fas fa-calendar-check', 
        title: 'Interviews', 
        value: '3', 
        text: 'Next interview: Tomorrow, 10:00 AM'
      },
      { 
        icon: 'fas fa-comments', 
        title: 'Messages', 
        value: '5', 
        text: '2 unread messages from recruiters'
      }
    ];
  }
}