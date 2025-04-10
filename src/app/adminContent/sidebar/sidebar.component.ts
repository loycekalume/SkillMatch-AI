// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-sidebar',
//   imports: [],
//   templateUrl: './sidebar.component.html',
//   styleUrl: './sidebar.component.css'
// })
// export class SidebarComponent {

// }
import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "app-sidebar",
  standalone:true,
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"],
})
export class SidebarComponent {
  @Input() collapsed = false
  @Output() toggleSidebar = new EventEmitter<void>()

  menuItems = [
    { path: "admin/dashboard", icon: "fas fa-chart-line", text: "Dashboard", active: true, badge: null },
    { path: "/users", icon: "fas fa-users", text: "User Management", active: false, badge: 24 },
    { path: "/security", icon: "fas fa-shield-alt", text: "Platform Security", active: false, badge: null },
    { path: "/ai-monitoring", icon: "fas fa-brain", text: "AI Accuracy", active: false, badge: null },
    { path: "/performance", icon: "fas fa-tachometer-alt", text: "System Performance", active: false, badge: null },
    { path: "/jobs", icon: "fas fa-briefcase", text: "Job Monitoring", active: false, badge: 12 },
    { path: "/settings", icon: "fas fa-cog", text: "Platform Settings", active: false, badge: null },
  ]

  onToggleSidebar() {
    this.toggleSidebar.emit()
  }
}
