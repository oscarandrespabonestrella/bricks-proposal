import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SidebarComponent } from '../../components/sidebar/sidebar.component';
import { NavbarComponent } from '../../components/navbar/navbar.component';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, RouterOutlet],
  templateUrl: './home-layout.component.html',
  styles: [
    `
    .app-container {
      min-height: 100vh;
      background: #f5f5f5;
    }

    .main-content {
      margin-left: 0;
      margin-top: 56px;
      padding: 24px;
      transition: margin-left 0.3s ease;
    }

    .main-content.sidebar-open {
      margin-left: 250px;
    }

    .content-wrapper {
      max-width: 1200px;
      margin: 0 auto;
    }

    h1 {
      margin: 0 0 16px;
      font-size: 24px;
      color: #333;
    }

    p {
      color: #666;
      font-size: 16px;
      line-height: 1.5;
    }
  `,
  ],
})
export class HomeLayoutComponent {
  isSidebarOpen = true;

  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
