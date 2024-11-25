import { Component, EventEmitter, inject, Output } from '@angular/core';
import { SharedService } from '../../../core/shared.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DropdownTriggerForDirective } from '../../dropdown/dropdown-trigger-for.directive';
import { DropdownComponent } from '../../dropdown/dropdown.component';

@Component({
  selector: 'navbar-alt',
  standalone: true,
  imports: [ CommonModule,
    RouterModule,
    DropdownComponent,
    DropdownTriggerForDirective,
    RouterModule],
  templateUrl: './navbar-alt.component.html'
})
export class NavbarAltComponent {
  protected sharedService = inject(SharedService);
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sharedService.setSidebarCollapsed(
      !this.sharedService.sidebarCollapsed()
    );
    this.sidebarToggle.emit();
  }
}
