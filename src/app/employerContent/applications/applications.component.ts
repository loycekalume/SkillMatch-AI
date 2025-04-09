// components/application-funnel/application-funnel.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface FunnelStage {
  name: string;
  count: number;
  percentage: number;
}

@Component({
  selector: 'app-applications',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-card application-funnel">
      <div class="card-header">
        <h2>Application Funnel</h2>
      </div>
      <div class="card-content">
        <div class="funnel-chart">
          <div class="funnel-stage" *ngFor="let stage of funnelStages">
            <div class="funnel-label">
              <span>{{ stage.name }}</span>
              <span>{{ stage.count }}{{ stage.name !== 'Applications' ? ' (' + stage.percentage + '%)' : '' }}</span>
            </div>
            <div class="funnel-bar">
              <div class="funnel-progress" [style.width.%]="stage.percentage"></div>
            </div>
          </div>
        </div>
        <div class="funnel-insights">
          <h3>AI Insights</h3>
          <ul>
            <li *ngFor="let insight of insights">
              <i class="fas fa-lightbulb"></i>
              <span>{{ insight }}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class ApplicationsComponent {
  funnelStages: FunnelStage[] = [
    { name: 'Applications', count: 47, percentage: 100 },
    { name: 'Resume Screening', count: 32, percentage: 68 },
    { name: 'Phone Interview', count: 18, percentage: 38 },
    { name: 'Technical Assessment', count: 12, percentage: 26 },
    { name: 'Final Interview', count: 8, percentage: 17 },
    { name: 'Offers Extended', count: 3, percentage: 6 }
  ];
  
  insights: string[] = [
    'Your technical assessment is filtering out 50% of candidates. Consider reviewing its difficulty level.',
    'Candidates with React experience have a 30% higher chance of reaching the final interview stage.'
  ];
}