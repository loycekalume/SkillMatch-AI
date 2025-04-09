// src/app/components/stats-card/stats-card.component.ts
import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

interface StatCard {
  icon: string;
  title: string;
  value: string;
  progress?: number;
  text: string;
}

@Component({
  selector: 'app-stats-card',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="stat-card">
      <div class="stat-icon">
        <i [class]="stat.icon"></i>
      </div>
      <div class="stat-info">
        <h3>{{ stat.title }}</h3>
        <div class="stat-value">{{ stat.value }}</div>
        <div class="progress-bar" *ngIf="stat.progress !== undefined">
          <div class="progress" [style.width.%]="stat.progress"></div>
        </div>
        <p>{{ stat.text }}</p>
      </div>
    </div>
  `,
  styleUrls: ['./stats-card.component.css']
})
export class StatsCardComponent {
  @Input() stat!: StatCard;
}