// src/app/components/sidebar/sidebar.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './sidebar.component.html',
  styleUrls: ['../../home/home.component.css','../../jobseeker/jobseeker.component.css']
})
export class SidebarComponent {
  menuItems = [
    { link: 'jobseeker/dashboard', icon: 'fas fa-home', text: 'Dashboard', active: true },
    { link: 'jobseeker/jobs', icon: 'fas fa-briefcase', text: 'Find Jobs', active: false },
    { link: 'jobseeker/applications', icon: 'fas fa-file-alt', text: 'Applications', active: false },
    { link: 'jobseeker/profile', icon: 'fas fa-user', text: 'My Profile', active: false },
    { link: 'jobseeker/interviews', icon: 'fas fa-calendar-alt', text: 'Interviews', active: false },
    { link: 'jobseeker/messages', icon: 'fas fa-comments', text: 'Messages', badge: 5, active: false },
    { link: 'jobseeker/ai-assistant', icon: 'fas fa-robot', text: 'AI Assistant', active: false }
  ];
  
  closeSidebar(): void {
    document.querySelector('.sidebar')?.classList.remove('active');
  }
}