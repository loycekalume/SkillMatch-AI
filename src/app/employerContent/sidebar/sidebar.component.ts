// components/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <aside class="sidebar" [class.active]="isActive">
      <div class="sidebar-header">
        <div class="logo">
          <img src="/assets/placeholder.svg" alt="SkillMatch AI Logo" height="40" width="40">
          <h2>SkillMatch AI</h2>
        </div>
        <button class="sidebar-close" (click)="toggleSidebar()">
          <i class="fas fa-times"></i>
        </button>
      </div>
      <div class="sidebar-content">
        <nav class="sidebar-menu">
          <ul>
            <li [class.active]="isRouteActive('employer-dashboard')">
              <a routerLink="/employer-dashboard">
                <i class="fas fa-home"></i>
                <span>Dashboard</span>
              </a>
            </li>
            <li [class.active]="isRouteActive('job-postings')">
              <a routerLink="/job-postings">
                <i class="fas fa-briefcase"></i>
                <span>Job Postings</span>
              </a>
            </li>
            <li [class.active]="isRouteActive('candidates')">
              <a routerLink="/candidates">
                <i class="fas fa-users"></i>
                <span>Candidates</span>
              </a>
            </li>
            <li [class.active]="isRouteActive('applications')">
              <a routerLink="/applications">
                <i class="fas fa-file-alt"></i>
                <span>Applications</span>
                <span class="badge">12</span>
              </a>
            </li>
            <li [class.active]="isRouteActive('interviews')">
              <a routerLink="/interviews">
                <i class="fas fa-calendar-alt"></i>
                <span>Interviews</span>
              </a>
            </li>
            <li [class.active]="isRouteActive('messages')">
              <a routerLink="/messages">
                <i class="fas fa-comments"></i>
                <span>Messages</span>
                <span class="badge">3</span>
              </a>
            </li>
            <li [class.active]="isRouteActive('employer-ai-assistant')">
              <a routerLink="/employer-ai-assistant">
                <i class="fas fa-robot"></i>
                <span>AI Assistant</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div class="sidebar-footer">
        <a routerLink="/company-profile">
          <i class="fas fa-building"></i>
          <span>Company Profile</span>
        </a>
        <a routerLink="/settings">
          <i class="fas fa-cog"></i>
          <span>Settings</span>
        </a>
        <a routerLink="/login">
          <i class="fas fa-sign-out-alt"></i>
          <span>Logout</span>
        </a>
      </div>
    </aside>
  `,
  styles: []
})
export class SidebarComponent {
  isActive = false;

  toggleSidebar(): void {
    this.isActive = !this.isActive;
  }

  isRouteActive(route: string): boolean {
    return window.location.pathname.includes(route);
  }
}