import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeLayoutAltComponent } from './home-layout-alt.component';

describe('HomeLayoutAltComponent', () => {
  let component: HomeLayoutAltComponent;
  let fixture: ComponentFixture<HomeLayoutAltComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeLayoutAltComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeLayoutAltComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
