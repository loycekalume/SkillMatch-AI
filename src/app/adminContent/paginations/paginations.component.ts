// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-paginations',
//   imports: [],
//   templateUrl: './paginations.component.html',
//   styleUrl: './paginations.component.css'
// })
// export class PaginationsComponent {

// }
import { CommonModule } from "@angular/common"
import { Component, Input, Output, EventEmitter } from "@angular/core"

@Component({
  selector: "app-pagination",
  standalone: true,
  imports: [CommonModule],
  templateUrl: "./paginations.component.html",
  styleUrls: ["./paginations.component.css"],
})
export class PaginationComponent {
  @Input() currentPage = 1
  @Input() totalPages = 1
  @Input() totalItems = 0
  @Input() itemsPerPage = 10
  @Output() pageChange = new EventEmitter<number>()

  get pages(): number[] {
    const pages = []
    for (let i = 1; i <= this.totalPages; i++) {
      pages.push(i)
    }
    return pages
  }

  get startItem(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1
  }

  get endItem(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.totalItems)
  }

  changePage(page: number) {
    if (page !== this.currentPage && page >= 1 && page <= this.totalPages) {
      this.pageChange.emit(page)
    }
  }
}
