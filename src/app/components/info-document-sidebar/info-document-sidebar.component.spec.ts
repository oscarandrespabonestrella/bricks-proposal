import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoDocumentSidebarComponent } from './info-document-sidebar.component';

describe('InfoDocumentSidebarComponent', () => {
  let component: InfoDocumentSidebarComponent;
  let fixture: ComponentFixture<InfoDocumentSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoDocumentSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoDocumentSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
