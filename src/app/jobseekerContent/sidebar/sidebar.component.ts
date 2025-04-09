// src/app/components/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {
  menuItems = [
    { link: '/dashboard', icon: 'fas fa-home', text: 'Dashboard', active: true },
    { link: '/jobs', icon: 'fas fa-briefcase', text: 'Find Jobs', active: false },
    { link: '/applications', icon: 'fas fa-file-alt', text: 'Applications', active: false },
    { link: '/profile', icon: 'fas fa-user', text: 'My Profile', active: false },
    { link: '/interviews', icon: 'fas fa-calendar-alt', text: 'Interviews', active: false },
    { link: '/messages', icon: 'fas fa-comments', text: 'Messages', badge: 5, active: false },
    { link: '/ai-assistant', icon: 'fas fa-robot', text: 'AI Assistant', active: false }
  ];
  
  closeSidebar(): void {
    document.querySelector('.sidebar')?.classList.remove('active');
  }
}