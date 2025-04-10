// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-admindashboard',
//   imports: [],
//   templateUrl: './admindashboard.component.html',
//   styleUrl: './admindashboard.component.css'
// })
// export class AdmindashboardComponent {

// }
import { Component, type OnInit, type AfterViewInit, type ElementRef, ViewChild } from "@angular/core"
import { Chart, registerables } from "chart.js"
import { CommonModule } from "@angular/common"
import { UserTableComponent } from "../usertable/usertable.component"
import { PaginationComponent } from "../paginations/paginations.component"
import { JobCardComponent } from "../jobcard/jobcard.component"
import { Stats } from "fs"
import { StatsCardComponent } from "../stats/stats.component"
import { FormsModule } from "@angular/forms"


Chart.register(...registerables)

interface Job {
  title: string
  company: string
  companyLogo: string
  status: string
  statusClass: string
  location: string
  salary: string
  postedTime: string
  applicants: number
  skills: string[]
}

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports:[CommonModule,UserTableComponent,JobCardComponent,PaginationComponent,StatsCardComponent,FormsModule],
  templateUrl: "./admindashboard.component.html",
  styleUrls: ["./admindashboard.component.css"],
})
export class AdmindashboardComponent implements OnInit, AfterViewInit {
  @ViewChild("userRegistrationChart") chartCanvas!: ElementRef<HTMLCanvasElement>
  chart: any

  statsCards = [
    {
      icon: "fas fa-users",
      iconClass: "primary",
      value: "25,487",
      label: "Total Users",
      changeValue: "12% from last month",
      changeDirection: "positive",
    },
    {
      icon: "fas fa-briefcase",
      iconClass: "success",
      value: "3,254",
      label: "Active Job Postings",
      changeValue: "8% from last month",
      changeDirection: "positive",
    },
    {
      icon: "fas fa-handshake",
      iconClass: "warning",
      value: "1,876",
      label: "Successful Matches",
      changeValue: "15% from last month",
      changeDirection: "positive",
    },
    {
      icon: "fas fa-building",
      iconClass: "danger",
      value: "842",
      label: "Registered Companies",
      changeValue: "5% from last month",
      changeDirection: "positive",
    },
  ]

  jobs: Job[] = [
    {
      title: "Senior Frontend Developer",
      company: "TechCorp",
      companyLogo: "/placeholder.svg?height=40&width=40",
      status: "Active",
      statusClass: "active",
      location: "San Francisco, CA (Remote)",
      salary: "$120K - $150K",
      postedTime: "Posted 2 days ago",
      applicants: 18,
      skills: ["React", "JavaScript", "TypeScript", "HTML", "CSS"],
    },
    {
      title: "Full Stack Engineer",
      company: "InnovateTech",
      companyLogo: "/placeholder.svg?height=40&width=40",
      status: "Pending Review",
      statusClass: "pending",
      location: "New York, NY (Hybrid)",
      salary: "$110K - $140K",
      postedTime: "Posted 1 week ago",
      applicants: 12,
      skills: ["Node.js", "React", "MongoDB", "Express"],
    },
  ]

  timeRanges = ["Last 7 days", "Last 30 days", "Last 90 days"]
  selectedTimeRange = "Last 7 days"

  constructor() {}

  ngOnInit() {}

  ngAfterViewInit() {
    this.initChart()
  }

  initChart() {
    const ctx = this.chartCanvas.nativeElement.getContext("2d")
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: "line",
        data: {
          labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
          datasets: [
            {
              label: "Job Seekers",
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: "#6c5ce7",
              tension: 0.1,
            },
            {
              label: "Employers",
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: "#00b894",
              tension: 0.1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            y: {
              beginAtZero: true,
            },
          },
        },
      })
    }
  }

  onTimeRangeChange(event: Event) {
    const select = event.target as HTMLSelectElement
    this.selectedTimeRange = select.value
    // Here you would typically fetch new data based on the selected time range
    // and update the chart
  }

  exportData() {
    console.log("Exporting data...")
  }

  addUser() {
    console.log("Adding new user...")
  }

  viewAllJobs() {
    console.log("Viewing all jobs...")
  }
}

