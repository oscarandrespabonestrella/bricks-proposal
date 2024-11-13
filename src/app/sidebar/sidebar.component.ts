import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="sidebar" [class.collapsed]="!isOpen">
      <div class="sidebar-content">
        <div class="main-menu">
          <div class="sidebar-section">
            <h3>Quick Actions</h3>
            <ul>
              <li><a href="#">Create New Task</a></li>
              <li><a href="#">Recent Documents</a></li>
              <li><a href="#">Shared with Me</a></li>
            </ul>
          </div>
          <div class="sidebar-section">
            <h3>Favorites</h3>
            <ul>
              <li><a href="#">Important Tasks</a></li>
              <li><a href="#">Starred Items</a></li>
            </ul>
          </div>
        </div>
        
        <div class="user-menu">
          <div class="user-info">
            <div class="avatar">PM</div>
            <div class="user-details">
              <div class="user-name">Project Manager</div>
              <div class="user-email">pm.example.com</div>
            </div>
          </div>
          <ul class="user-links">
            <li>
              <a href="#" class="user-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"/>
                  <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z"/>
                </svg>
                Settings
              </a>
            </li>
            <li>
              <a href="#" class="user-link">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                  <polyline points="16 17 21 12 16 7"/>
                  <line x1="21" y1="12" x2="9" y2="12"/>
                </svg>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
    .sidebar {
      width: 250px;
      height: calc(100vh - 56px);
      background: white;
      border-right: 1px solid #ddd;
      transition: transform 0.3s ease;
      position: fixed;
      top: 56px;
      left: 0;
      display: flex;
      flex-direction: column;
    }

    .sidebar.collapsed {
      transform: translateX(-100%);
    }

    .sidebar-content {
      padding: 16px;
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    .main-menu {
      flex-grow: 1;
    }

    .sidebar-section {
      margin-bottom: 24px;
    }

    .sidebar-section h3 {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
      font-weight: 500;
    }

    .sidebar-section ul {
      list-style: none;
    }

    .sidebar-section ul li a {
      color: #333;
      text-decoration: none;
      padding: 8px 0;
      display: block;
      font-size: 14px;
    }

    .sidebar-section ul li a:hover {
      color: #1976d2;
    }

    .user-menu {
      border-top: 1px solid #ddd;
      padding-top: 16px;
      margin-top: 16px;
    }

    .user-info {
      display: flex;
      align-items: center;
      gap: 12px;
      padding: 8px 0;
      margin-bottom: 8px;
    }

    .avatar {
      width: 40px;
      height: 40px;
      border-radius: 20px;
      background: #f0f0f0;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #666;
    }

    .user-details {
      flex: 1;
    }

    .user-name {
      font-weight: 500;
      font-size: 14px;
      color: #333;
    }

    .user-email {
      font-size: 12px;
      color: #666;
    }

    .user-links {
      list-style: none;
      margin-top: 8px;
    }

    .user-link {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #666;
      text-decoration: none;
      padding: 8px 0;
      font-size: 14px;
    }

    .user-link:hover {
      color: #1976d2;
    }

    .user-link svg {
      flex-shrink: 0;
    }
  `,
  ],
})
export class SidebarComponent {
  @Input() isOpen = false;
}
