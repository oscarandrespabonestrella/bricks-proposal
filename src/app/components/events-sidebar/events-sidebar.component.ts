import { Component, EventEmitter, Output } from "@angular/core";
import { BadgeComponent } from "../badge/badge.component";

@Component({
  selector: "[events-sidebar]",
  standalone: true,
  imports: [BadgeComponent],
  templateUrl: "./events-sidebar.component.html",
})
export class EventsSidebarComponent {
  @Output() closeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleEventsSidebar() {
    this.closeSidebar.emit(true);
  }
}
