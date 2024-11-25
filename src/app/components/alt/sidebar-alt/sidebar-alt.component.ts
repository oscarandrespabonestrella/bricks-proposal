import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'sidebar-alt',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './sidebar-alt.component.html',
  styles:
  `
  .sidebar-section li.active{
    background: white;
    border-top-left-radius: 6em;
    border-bottom-left-radius: 6em;
    color: #3c77bd;
  }
  
  `
})
export class SidebarAltComponent {
  @Input() isOpen = true;
}
