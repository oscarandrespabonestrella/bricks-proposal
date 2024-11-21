import { Component, OnInit } from "@angular/core";
import { CommonModule } from "@angular/common";
import data from "./data.json";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from "@angular/forms";
import { BadgeComponent } from "../../components/badge/badge.component";
@Component({
  selector: "app-create-document",
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, BadgeComponent],
  templateUrl: "./create-document.component.html",
  styleUrl: "./create-document.component.css",
})
export class CreateDocumentComponent implements OnInit {
  documentForm: FormGroup;
  documentTypes = data.documentTypes;
  showDisplayTitleInput = false;
  showFiles = false;
  formats = ["Digital", "Paper"];
  languages = ["English", "Spanish", "French", "German"];
  formatControl: FormControl = new FormControl(false);
  internalControl: FormControl = new FormControl(false);
  limitedControl: FormControl = new FormControl(false);
  personalControl: FormControl = new FormControl(false);
  transparencyControl: FormControl = new FormControl(false);

  constructor(private fb: FormBuilder) {
    this.documentForm = this.fb.group({
      documentTitle: ["", Validators.required],
      documentType: ["Letter", Validators.required],
      documentDate: ["", Validators.required],
      format: ["Digital"],
      mainLanguage: ["English"],
      marking: ["Financial Matters"],
      draftingMode: [false],
      embargoUntil: [""],
      from: ["", Validators.required],
      to: ["", Validators.required],
      isAnonymous: [false],
      annexesScanned: [true],
      translationRequested: [false],
    });
  }

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

  ngOnInit(): void {}

  onSubmit(): void {
    if (this.documentForm.valid) {
      console.log(this.documentForm.value);
    }
  }

  onCancel(): void {
    this.documentForm.reset();
  }

  onSaveTemporarily(): void {
    console.log("Saving temporarily:", this.documentForm.value);
  }
  toggleDisplayTitle() {
    this.showDisplayTitleInput = !this.showDisplayTitleInput;
  }
  toggleFiles() {
    this.showFiles = !this.showFiles;
  }
}
