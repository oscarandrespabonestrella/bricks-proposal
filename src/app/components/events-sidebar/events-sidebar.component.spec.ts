import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventsSidebarComponent } from './events-sidebar.component';

describe('EventsSidebarComponent', () => {
  let component: EventsSidebarComponent;
  let fixture: ComponentFixture<EventsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventsSidebarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
