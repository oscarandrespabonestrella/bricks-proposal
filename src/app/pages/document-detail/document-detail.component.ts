import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { BadgeComponent } from "../../components/badge/badge.component";
import { InfoDocumentSidebarComponent } from "../../components/info-document-sidebar/info-document-sidebar.component";
import { EventsSidebarComponent } from "../../components/events-sidebar/events-sidebar.component";

@Component({
  selector: "app-document-detail",
  standalone: true,
  imports: [
    CommonModule,
    BadgeComponent,
    InfoDocumentSidebarComponent,
    EventsSidebarComponent,
  ],
  templateUrl: "./document-detail.component.html",
  styleUrl: "./document-detail.component.css",
})
export class DocumentDetailComponent {
  infoSidebar = false;
  eventsSidebar = false;
  files = [
    {
      name: "SCAN_Menu_preview.pdf",
      icon: "bi-file-earmark-pdf",
      type: "Main element",
      version: 0.1,
      date: "11/11/2023",
    },
    {
      name: "User_Manual_v1.docx",
      icon: "bi-file-earmark-word",
      type: "Translation",
      version: 0.9,
      date: "10/05/2023",
    },
    {
      name: "Financial_Report_Q3.xlsx",
      icon: "bi-file-earmark-excel",
      type: "Translation",
      version: 3.2,
      date: "09/30/2023",
    },
  ];
  linkedFiles = [
    {
      name: "Reply on Acknowledgment of receipt bmart anonymous",
      user: "NIJHOF Bernd (AD-department)",
      badge: "Has reply",
      icon: "bi-box-arrow-in-right",
    },
    {
      name: "Reply on Acknowledgment of receipt bmart europe anonymous",
      user: "NIJHOF Bernd (AD-department) from NIJHOF Bernd (AD-department) to NIJHOF Bernd (AD-department)",
      badge: "Has reply",
      icon: "bi-box-arrow-in-right",
    },
  ];

  toggleInfoSidebar() {
    this.infoSidebar = !this.infoSidebar;
  }
  toggleEventsSidebar() {
    this.eventsSidebar = !this.eventsSidebar;
  }
}
