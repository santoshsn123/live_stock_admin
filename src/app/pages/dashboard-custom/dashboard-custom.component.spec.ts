import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardCustomComponent } from './dashboard-custom.component';

describe('DashboardCustomComponent', () => {
  let component: DashboardCustomComponent;
  let fixture: ComponentFixture<DashboardCustomComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DashboardCustomComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardCustomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
