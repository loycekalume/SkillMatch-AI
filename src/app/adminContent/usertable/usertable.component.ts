// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-usertable',
//   imports: [],
//   templateUrl: './usertable.component.html',
//   styleUrl: './usertable.component.css'
// })
// export class UsertableComponent {

// }
import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"
import { StatsCardComponent } from "../stats/stats.component"

interface User {
  name: string
  email: string
  role: string
  roleClass: string
  registered: string
  status: string
  statusClass: string
}

@Component({
  selector: "app-usertable",
  standalone:true,
  imports:[CommonModule],
  templateUrl: "./usertable.component.html",
  styleUrls: ["./usertable.component.css"],
})
export class UserTableComponent {
  @Input() users: User[] = [
    {
      name: "John Doe",
      email: "john.doe@example.com",
      role: "Job Seeker",
      roleClass: "admin-badge-info",
      registered: "Apr 2, 2025",
      status: "Active",
      statusClass: "admin-badge-success",
    },
    {
      name: "Jane Smith",
      email: "jane.smith@example.com",
      role: "Employer",
      roleClass: "admin-badge-success",
      registered: "Apr 1, 2025",
      status: "Active",
      statusClass: "admin-badge-success",
    },
    {
      name: "Michael Johnson",
      email: "michael.j@example.com",
      role: "Job Seeker",
      roleClass: "admin-badge-info",
      registered: "Mar 30, 2025",
      status: "Pending",
      statusClass: "admin-badge-warning",
    },
    {
      name: "Emily Davis",
      email: "emily.d@example.com",
      role: "Admin",
      roleClass: "admin-badge-primary",
      registered: "Mar 28, 2025",
      status: "Active",
      statusClass: "admin-badge-success",
    },
    {
      name: "Robert Wilson",
      email: "robert.w@example.com",
      role: "Employer",
      roleClass: "admin-badge-success",
      registered: "Mar 25, 2025",
      status: "Inactive",
      statusClass: "admin-badge-danger",
    },
  ]

  viewUser(user: User) {
    console.log("View user:", user)
  }

  editUser(user: User) {
    console.log("Edit user:", user)
  }

  deleteUser(user: User) {
    console.log("Delete user:", user)
  }
}
