import { Component } from '@angular/core';
import { MultiSelectComponent } from '../../components/multi-select/multi-select.component';
import data from "./task-list.json";
import { BadgeComponent } from '../../components/badge/badge.component';
import { PaginationComponent } from '../../components/pagination/pagination.component';
import { PaginationPipe } from '../../pipes/pagination.pipe';
import { SelectionModel } from '@angular/cdk/collections';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-inbox',
  standalone: true,
  imports: [MultiSelectComponent, BadgeComponent, PaginationComponent, PaginationPipe, CommonModule],
  templateUrl: './inbox.component.html',
  styleUrl: './inbox.component.css'
})
export class InboxComponent {
  taskList = (data.tasklist as unknown as Array<{[key:string]: string}>);
  currentPage = 1;
  itemsPerPage = 10;
  selection = new SelectionModel<{[key:string]: string}>(true, []);

  
  onPageChange(page: number) {
    this.currentPage = page;    
  }

  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.taskList?.length;
    return numSelected === numRows;
  }

  masterToggle() {
    this.isAllSelected()
      ? this.selection.clear()
      : this.taskList?.forEach(row => this.selection.select(row));
  }

  public onCheckRowChange(row: {[key:string]: string}): void {
    this.selection.toggle(row);
  }

}
