import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadsCommanPageComponent } from './loads-comman-page.component';

describe('LoadsCommanPageComponent', () => {
  let component: LoadsCommanPageComponent;
  let fixture: ComponentFixture<LoadsCommanPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadsCommanPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadsCommanPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
