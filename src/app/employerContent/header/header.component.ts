// components/header/header.component.ts
import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="dashboard-header">
      <div class="header-left">
        <button class="menu-toggle" (click)="menuToggle.emit()">
          <i class="fas fa-bars"></i>
        </button>
        <h1>Employer Dashboard</h1>
      </div>
      <div class="header-right">
        <div class="search-bar">
          <i class="fas fa-search"></i>
          <input type="text" placeholder="Search candidates, jobs...">
        </div>
        <div class="notifications">
          <button class="notification-btn">
            <i class="fas fa-bell"></i>
            <span class="notification-badge">5</span>
          </button>
        </div>
        <div class="user-profile">
          <div class="user-avatar">
            <img src="/assets/placeholder.svg" alt="Company Logo" height="40" width="40">
          </div>
          <div class="user-info">
            <h4>TechCorp</h4>
            <p>HR Manager</p>
          </div>
          <button class="dropdown-toggle">
            <i class="fas fa-chevron-down"></i>
          </button>
        </div>
      </div>
    </header>
  `,
  styles: []
})
export class HeaderComponent {
  @Output() menuToggle = new EventEmitter<void>();
}