import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'multi-select',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './multi-select.component.html',
  styleUrl: './multi-select.component.css'
})
export class MultiSelectComponent {
  @Input() options: string[] = [];
  @Output() selectionChange = new EventEmitter<string[]>();

  selectedOptions: string[] = [];
  isDropdownOpen = false;

  toggleDropdown(): void {
    this.isDropdownOpen = !this.isDropdownOpen;
  }

  toggleSelection(option: string): void {
    if (this.selectedOptions.includes(option)) {
      this.selectedOptions = this.selectedOptions.filter(opt => opt !== option);
    } else {
      this.selectedOptions.push(option);
    }
    this.selectionChange.emit(this.selectedOptions);
  }

  isSelected(option: string): boolean {
    return this.selectedOptions.includes(option);
  }

  clearSelection(): void {
    this.selectedOptions = [];
    this.selectionChange.emit(this.selectedOptions);
  }
}
