import { Component, inject } from '@angular/core';
import { SidebarAltComponent } from '../../components/alt/sidebar-alt/sidebar-alt.component';
import { NavbarAltComponent } from '../../components/alt/navbar-alt/navbar-alt.component';
import { SharedService } from '../../core/shared.service';
import { RouterModule } from '@angular/router';

@Component({
  standalone: true,
  imports: [SidebarAltComponent, NavbarAltComponent, RouterModule],
  templateUrl: './home-layout-alt.component.html',
  styles:
  `
  .custom-bg {
    background: #3c77bd;
    // background-image: linear-gradient(to top, #dfe9f3 0%, white 100%);
  }
  .custom-bg-2 {
    background-image: linear-gradient(to bottom, #dfe9f3 0%, white 100%);
  }
  `
})
export class HomeLayoutAltComponent {
  protected sharedService = inject(SharedService);
}
