// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-stats',
//   imports: [],
//   templateUrl: './stats.component.html',
//   styleUrl: './stats.component.css'
// })
// export class StatsComponent {

// }
import { CommonModule } from "@angular/common"
import { Component, Input } from "@angular/core"

@Component({
  selector: "app-stats",
  standalone:true,
  imports:[CommonModule],
  templateUrl: "./stats.component.html",
  styleUrls: ["./stats.component.css"],
})
export class StatsCardComponent {
  @Input() icon = ""
  @Input() iconClass = ""
  @Input() value = ""
  @Input() label = ""
  @Input() changeValue = ""
  @Input() changeDirection: "positive" | "negative" = "positive"
}
