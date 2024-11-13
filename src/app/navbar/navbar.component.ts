import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <nav class="navbar">
      <div class="navbar-left">
        <button class="menu-trigger" (click)="toggleSidebar()">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <path d="M3 12h18M3 6h18M3 18h18"/>
          </svg>
        </button>
        <div class="brand">BRICKS</div>
        <div class="nav-links">
          <a href="#" class="nav-link active">Home</a>
          <a href="#" class="nav-link">My inbox</a>
          <a href="#" class="nav-link">My follow-up</a>
          <a href="#" class="nav-link">My entity</a>
          <a href="#" class="nav-link">My folders</a>
        </div>
      </div>
      <div class="navbar-right">
        <div class="search-box">
          <input type="text" placeholder="Search, e.g. by reference number" class="search-input">
        </div>
        <button class="btn btn-primary">Create</button>
        <div class="user-menu">PM</div>
      </div>
    </nav>
  `,
  styles: [`
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 16px;
      height: 56px;
      border-bottom: 1px solid #ddd;
      background: white;
    }

    .navbar-left, .navbar-right {
      display: flex;
      align-items: center;
      gap: 16px;
    }

    .menu-trigger {
      background: none;
      border: none;
      cursor: pointer;
      padding: 8px;
      color: #666;
    }

    .brand {
      font-weight: bold;
      font-size: 20px;
      color: #1976d2;
      margin-right: 24px;
    }

    .nav-links {
      display: flex;
      gap: 8px;
    }

    .search-box {
      position: relative;
    }

    .user-menu {
      width: 32px;
      height: 32px;
      border-radius: 4px;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #666;
      cursor: pointer;
    }
  `]
})
export class NavbarComponent {
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sidebarToggle.emit();
  }
}