// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-jobcard',
//   imports: [],
//   templateUrl: './jobcard.component.html',
//   styleUrl: './jobcard.component.css'
// })
// export class JobcardComponent {

// }
import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

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
  selector: "app-jobcard",
  standalone:true,
  imports:[CommonModule],
  templateUrl: "./jobcard.component.html",
  styleUrls: ["./jobcard.component.css"],
})
export class JobCardComponent {
  @Input() job!: Job

  viewJob() {
    console.log("View job:", this.job)
  }

  editJob() {
    console.log("Edit job:", this.job)
  }

  approveJob() {
    console.log("Approve job:", this.job)
  }
}
