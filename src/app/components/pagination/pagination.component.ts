import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output, input, computed  } from '@angular/core';

@Component({
  selector: 'pagination',
  standalone: true,
  imports: [NgClass],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.css'
})
export class PaginationComponent {
  @Input() currentPage: number = 1;
  totalItems = input<number>(1);
  @Input() itemsPerPage: number = 10;
  @Output() pageChange = new EventEmitter<number>();

  totalPages = computed(()=>Math.round(this.totalItems()/ this.itemsPerPage));
  

  get visiblePages(): number[] {
    const pages: number[] = [];
    const maxVisiblePages = 5;
    
    let start = Math.max(1, this.currentPage - 2);
    let end = Math.min(this.totalPages(), start + maxVisiblePages - 1);
    
    if (end - start + 1 < maxVisiblePages) {
      start = Math.max(1, end - maxVisiblePages + 1);
    }
    
    for (let i = start; i <= end; i++) {
      pages.push(i);
    }
    
    return pages;
  }

  

  onPageChange(page: number): void {
    if (page >= 1 && page <= this.totalPages()) {
      this.pageChange.emit(page);
    }
  }
}
