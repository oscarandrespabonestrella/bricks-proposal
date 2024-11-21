import { Component, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "[info-document-sidebar]",
  standalone: true,
  imports: [],
  templateUrl: "./info-document-sidebar.component.html",
})
export class InfoDocumentSidebarComponent {
  @Output() closeSidebar: EventEmitter<boolean> = new EventEmitter<boolean>();
  toggleInfoSidebar() {
    this.closeSidebar.emit(true);
  }
}
