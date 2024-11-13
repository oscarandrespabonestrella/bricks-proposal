import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-create-document',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './create-document.component.html',
  styleUrl: './create-document.component.css',
})
export class CreateDocumentComponent implements OnInit {
  documentForm: FormGroup;
  formats = ['Digital', 'Paper'];
  languages = ['English', 'Spanish', 'French', 'German'];

  constructor(private fb: FormBuilder) {
    this.documentForm = this.fb.group({
      documentTitle: ['', Validators.required],
      documentType: ['Letter', Validators.required],
      documentDate: ['', Validators.required],
      format: ['Digital'],
      mainLanguage: ['English'],
      marking: ['Financial Matters'],
      draftingMode: [false],
      embargoUntil: [''],
      from: ['', Validators.required],
      to: ['', Validators.required],
      isAnonymous: [false],
      annexesScanned: [true],
      translationRequested: [false],
    });
  }

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
    console.log('Saving temporarily:', this.documentForm.value);
  }
}
