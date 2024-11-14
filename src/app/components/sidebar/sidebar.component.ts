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
            <h3>Navigation</h3>
            <ul>
              <li><a href="#" class="active">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                  <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                  <polyline points="9 22 9 12 15 12 15 22"/>
                </svg>
              Home
            </a></li>
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 12h-6l-2 3h-4l-2-3H2"/>
                    <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                  </svg>
              Open task</a></li>
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <circle cx="12" cy="12" r="10"/>
                    <polyline points="12 6 12 12 16 14"/>
                  </svg>Upcoming task</a></li>
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-check" viewBox="0 0 16 16">
  <path d="M10.854 7.854a.5.5 0 0 0-.708-.708L7.5 9.793 6.354 8.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0z"/>
  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2M9.5 3A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
</svg>Completed task</a></li>
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-file-earmark-text" viewBox="0 0 16 16">
  <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5"/>
  <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z"/>
</svg>Received documents</a></li>              
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>My follow-up</a></li>
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                  </svg>My folders</a></li>
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                  </svg>My entity</a></li>
              <li><a href="#">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
</svg>Contacts</a></li>
            </ul>
          </div>
          
          <div class="sidebar-section">
            <h3>Quick Actions</h3>
            <ul>
              <li><a href="#">Create Incoming Document</a></li>
              <li><a href="#">Create Outgoing Document</a></li>
              <li><a href="#">Add Delegation</a></li>              
            </ul>
          </div>
        </div>
        
        <div class="user-menu">
          <div class="user-info">
            <div class="avatar">PM</div>
            <div class="user-details">
              <div class="user-name">Project Manager</div>
              <div class="user-email">pmexample.com</div>
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
      z-index: 9;
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
      overflow-y: auto;
    }

    .main-menu {
      flex-grow: 1;
    }

    .sidebar-section {
      padding: 24px 0;

    }
    .sidebar-section:not(:first-child){
      border-top: 1px solid #DADADA;

    }

    .sidebar-section h3 {
      font-size: 14px;
      color: #666;
      margin-bottom: 8px;
      font-weight: 500;
      text-transform: uppercase;
    }

    .sidebar-section ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .sidebar-section ul li a {
      color: #333;
      text-decoration: none;
      padding: 8px 12px;
      display: flex;
      align-items: center;
      gap: 12px;
      font-size: 14px;
      border-radius: 4px;
      margin: 2px 0;
    }
    .sidebar-section ul li a svg {
      flex-shrink: 0;
      color: #666;
    }

    .sidebar-section ul li a:hover {
      background: #f5f5f5;
      color: #1976d2;
    }

    .sidebar-section ul li a:hover svg {
      color: #1976d2;
    }

    .sidebar-section ul li a.active {
      background: #e3f2fd;
      color: #1976d2;
      font-weight: 500;
    }

    .sidebar-section ul li a.active svg {
      color: #1976d2;
    }

    .sidebar-section ul li a:hover {
      background: #f5f5f5;
      color: #1976d2;
    }

    .sidebar-section ul li a.active {
      background: #e3f2fd;
      color: #1976d2;
      font-weight: 500;
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
      background: #e3f2fd;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 14px;
      color: #1976d2;
      font-weight: 500;
    }

    .user-details {
      flex: 1;
      min-width: 0;
    }

    .user-name {
      font-weight: 500;
      font-size: 14px;
      color: #333;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .user-email {
      font-size: 12px;
      color: #666;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
    }

    .user-links {
      list-style: none;
      margin: 0;
      padding: 0;
    }

    .user-link {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #666;
      text-decoration: none;
      padding: 8px 12px;
      font-size: 14px;
      border-radius: 4px;
    }

    .user-link:hover {
      background: #f5f5f5;
      color: #1976d2;
    }

    .user-link svg {
      flex-shrink: 0;
    }
  `,
  ],
})
export class SidebarComponent {
  @Input() isOpen = true;
}
