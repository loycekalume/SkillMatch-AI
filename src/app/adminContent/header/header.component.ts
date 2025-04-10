// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-header',
//   imports: [],
//   templateUrl: './header.component.html',
//   styleUrl: './header.component.css'
// })
// export class HeaderComponent {

// }
import { Component, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "app-header",
  standalone:true,
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Output() toggleMobileSidebar = new EventEmitter<void>()

  onToggleMobileSidebar() {
    this.toggleMobileSidebar.emit()
  }
}
