import { Component, EventEmitter, inject, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedService } from '../../core/shared.service';
import { DropdownComponent } from '../dropdown/dropdown.component';
import { DropdownTriggerForDirective } from '../dropdown/dropdown-trigger-for.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    DropdownComponent,
    DropdownTriggerForDirective,
  ],
  template: `
    <nav class="navbar">
      <div class="navbar-start">
        <button class="menu-toggle" (click)="toggleSidebar()">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="3" y1="12" x2="21" y2="12"></line>
            <line x1="3" y1="6" x2="21" y2="6"></line>
            <line x1="3" y1="18" x2="21" y2="18"></line>
          </svg>
        </button>
        <div class="brand">BRICKS</div>
      </div>
      <div class="navbar-center">
      
      

        <ul class="navbar-nav">
          <li class="nav-item">
            <a href="#" class="nav-link active">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                    <polyline points="9 22 9 12 15 12 15 22"/>
                  </svg>
            Home</a>
          </li>
          
          <li class="nav-item">
            <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 12h-6l-2 3h-4l-2-3H2"/>
                      <path d="M5.45 5.11 2 12v6a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-6l-3.45-6.89A2 2 0 0 0 16.76 4H7.24a2 2 0 0 0-1.79 1.11z"/>
                    </svg>My inbox</a>
          </li>
          <li class="nav-item">
            <a href="#" class="nav-link">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M12 20h9"/>
                      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                    </svg>My follow-up</a>
          </li>
          <li class="nav-item">
          <a href="#" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/>
                    </svg>My folders</a>
        </li>
        <li class="nav-item">
          <a href="#" class="nav-link">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/>
                      <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/>
                    </svg>My entity</a>
        </li>
        </ul>      
      
      
      
      </div>
      <div class="navbar-end">
        <div class="search-box md:w-1/3">
            <input type="text" placeholder="Search, e.g. by reference number" />
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </div>
          <a class="create-btn" [routerLink]="['/create-document']">Create</a>
          <div class="profile text-right flex gap-2 items-center" [dropdownTriggerFor]="dropdown">
            <div>              
              <h6 class="text-sm font-semibold">GONZALEZ PEREIRA MARTINS Jose Luís </h6>
              <p class="text-xs"> (EXPO - DIR COMMITTEES)</p>
            </div>
            <i class="bi bi-caret-down-fill"></i>
          </div>
          
          <my-dropdown #dropdown>
            <div class="dropdown-menu">
              <button class="profile-button" onClick={onClick}>
                <div class="avatar">
                  NB
                </div>
                <div class="profile-info">
                  <div class="profile-name">NIJHOF Bernd</div>
                  <div class="profile-email">Bernd.NIJHOFamexiogrou...</div>
                </div>
              </button>
              <div class="menu-section">
                <button class="menu-item">
                  <div class="menu-item-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                    <span class="font">Settings</span>
                  </div>
                </button>
              </div>

              <div class="menu-section">
                <button class="menu-item">
                  <div class="menu-item-with-chevron">
                    <div class="menu-item-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M22 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      <span>Show Hierarchy Below</span>
                    </div>
                    
                  </div>
                </button>

                <button class="menu-item">
                  <div class="menu-item-with-chevron">
                    <div class="menu-item-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                      </svg>
                      <span>Switch Profile</span>
                    </div>
                    
                  </div>
                </button>

                <button class="menu-item">
                  <div class="menu-item-with-chevron">
                    <div class="menu-item-content">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <circle cx="12" cy="10" r="3"/>
                        <path d="M7 20.662V19a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v1.662"/>
                      </svg>
                      <span>Switch Role</span>
                    </div>
                    
                  </div>
                </button>
              </div>

              <div class="menu-section">
                <button class="menu-item">
                  <div class="menu-item-content">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                      <polyline points="16 17 21 12 16 7"/>
                      <line x1="21" y1="12" x2="9" y2="12"/>
                    </svg>
                    <span>Logout</span>
                  </div>
                </button>
              </div>
            </div>
          </my-dropdown>
      </div>

    </nav>
  `,
  styles: [
    `
    
  `,
  ],
})
export class NavbarComponent {
  protected sharedService = inject(SharedService);
  @Output() sidebarToggle = new EventEmitter<void>();

  toggleSidebar() {
    this.sharedService.setSidebarCollapsed(
      !this.sharedService.sidebarCollapsed()
    );
    this.sidebarToggle.emit();
  }
}
