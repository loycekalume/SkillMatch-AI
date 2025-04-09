// components/top-candidates/top-candidates.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Candidate {
  name: string;
  position: string;
  location: string;
  matchPercentage: number;
  skills: string[];
  experienceYears: number;
  avatar: string;
}

@Component({
  selector: 'app-top-candidates',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-card top-candidates">
      <div class="card-header">
        <h2>Top Candidates</h2>
        <a routerLink="/candidates" class="view-all">View All</a>
      </div>
      <div class="card-content">
        <div class="candidate-cards">
          <div class="candidate-card" *ngFor="let candidate of candidates">
            <div class="candidate-header">
              <div class="candidate-avatar">
                <img src="{{ candidate.avatar }}" alt="{{ candidate.name }}">
              </div>
              <div class="candidate-info">
                <h3>{{ candidate.name }}</h3>
                <p>{{ candidate.position }}</p>
                <div class="candidate-location">
                  <i class="fas fa-map-marker-alt"></i>
                  <span>{{ candidate.location }}</span>
                </div>
              </div>
              <div class="match-badge">{{ candidate.matchPercentage }}% Match</div>
            </div>
            <div class="candidate-skills">
              <span class="skill-tag" *ngFor="let skill of candidate.skills">{{ skill }}</span>
            </div>
            <div class="candidate-experience">
              <i class="fas fa-briefcase"></i>
              <span>{{ candidate.experienceYears }}+ years experience</span>
            </div>
            <div class="candidate-footer">
              <button class="btn btn-outline btn-sm">View Profile</button>
              <button class="btn btn-primary btn-sm">Contact</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  `,
  styles: []
})
export class TopcandidatesComponent {
  candidates: Candidate[] = [
    {
      name: 'John Doe',
      position: 'Senior Frontend Developer',
      location: 'San Francisco, CA',
      matchPercentage: 95,
      skills: ['React', 'JavaScript', 'TypeScript', 'HTML/CSS'],
      experienceYears: 5,
      avatar: '/assets/placeholder.svg'
    },
    {
      name: 'Jane Smith',
      position: 'Full Stack Engineer',
      location: 'New York, NY',
      matchPercentage: 88,
      skills: ['Node.js', 'React', 'MongoDB', 'Express'],
      experienceYears: 4,
      avatar: '/assets/placeholder.svg'
    }
  ];
}