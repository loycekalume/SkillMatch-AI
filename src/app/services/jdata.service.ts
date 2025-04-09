// src/app/services/data.service.ts
import { Injectable } from '@angular/core';

export interface User {
  name: string;
  title: string;
  avatar: string;
  profileStrength: number;
}

export interface Job {
  title: string;
  company: string;
  logo: string;
  location: string;
  salary: string;
  skills: string[];
  matchPercentage: number;
  postedDate: string;
}

export interface Activity {
  type: 'application' | 'interview' | 'message' | 'profile';
  title: string;
  company: string;
  timeAgo: string;
  icon: string;
}

export interface Interview {
  title: string;
  company: string;
  time: string;
  isPrepared: boolean;
  canJoin: boolean;
}

export interface Skill {
  name: string;
  demand: string;
  progress: number;
  text: string;
}

@Injectable({
  providedIn: 'root'
})
export class JdataService {
  getUser(): User {
    return {
      name: 'John Doe',
      title: 'Frontend Developer',
      avatar: '/placeholder.svg?height=40&width=40',
      profileStrength: 85
    };
  }
  
  getJobMatches(): Job[] {
    return [
      {
        title: 'Senior Frontend Developer',
        company: 'TechCorp',
        logo: '/placeholder.svg?height=30&width=30',
        location: 'San Francisco, CA (Remote)',
        salary: '$120K - $150K',
        skills: ['React', 'TypeScript', 'Next.js', 'UI/UX'],
        matchPercentage: 95,
        postedDate: '2 days ago'
      },
      {
        title: 'Full Stack Engineer',
        company: 'InnovateTech',
        logo: '/placeholder.svg?height=30&width=30',
        location: 'New York, NY (Hybrid)',
        salary: '$110K - $140K',
        skills: ['Node.js', 'React', 'MongoDB', 'AWS'],
        matchPercentage: 88,
        postedDate: '1 week ago'
      }
    ];
  }
  
  getActivities(): Activity[] {
    return [
      {
        type: 'application',
        title: 'You applied for Senior Frontend Developer',
        company: 'TechCorp',
        timeAgo: '2 days ago',
        icon: 'fas fa-file-alt'
      },
      {
        type: 'interview',
        title: 'Interview scheduled with InnovateTech',
        company: 'InnovateTech',
        timeAgo: 'Yesterday',
        icon: 'fas fa-calendar-alt'
      },
      {
        type: 'message',
        title: 'New message from Sarah Chen',
        company: 'TechCorp',
        timeAgo: '4 hours ago',
        icon: 'fas fa-comments'
      },
      {
        type: 'profile',
        title: 'Your profile was viewed by a recruiter',
        company: 'DesignStudio',
        timeAgo: '1 hour ago',
        icon: 'fas fa-eye'
      }
    ];
  }
  
  getInterviews(): Interview[] {
    return [
      {
        title: 'Senior Frontend Developer',
        company: 'TechCorp',
        time: 'Tomorrow, 10:00 AM - 11:00 AM',
        isPrepared: false,
        canJoin: true
      },
      {
        title: 'Full Stack Engineer',
        company: 'InnovateTech',
        time: 'April 5, 2025, 2:00 PM - 3:30 PM',
        isPrepared: false,
        canJoin: false
      }
    ];
  }
  
  getSkillsData() {
    return {
      userSkills: [90, 85, 75, 60, 30, 70],
      marketDemand: [95, 90, 70, 80, 85, 65],
      labels: ['React', 'JavaScript', 'CSS', 'Node.js', 'TypeScript', 'UI/UX']
    };
  }
  
  getRecommendedSkills(): Skill[] {
    return [
      {
        name: 'TypeScript',
        demand: 'High Demand',
        progress: 30,
        text: 'Adding TypeScript will increase your match rate by 15%'
      },
      {
        name: 'React Native',
        demand: 'Growing Demand',
        progress: 0,
        text: 'Mobile development skills are increasingly requested'
      }
    ];
  }
}