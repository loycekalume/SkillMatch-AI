// src/app/components/header/header.component.ts
import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JdataService, User } from '../../services/jdata.service';
import { HomeComponent } from '../../home/home.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrls: ['../../home/home.component.css','../../jobseeker/jobseeker.component.css']
})
export class HeaderComponent implements OnInit {
  user!: User;
  notifications = 3;
  
  constructor(private dataService: JdataService) {}
  
  ngOnInit(): void {
    this.user = this.dataService.getUser();
  }
  
  toggleMenu(): void {
    document.querySelector('.sidebar')?.classList.add('active');
  }
}