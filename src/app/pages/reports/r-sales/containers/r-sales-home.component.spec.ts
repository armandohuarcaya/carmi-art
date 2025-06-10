import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSalesHomeComponent } from './r-sales-home.component';

describe('RSalesHomeComponent', () => {
  let component: RSalesHomeComponent;
  let fixture: ComponentFixture<RSalesHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RSalesHomeComponent]
    });
    fixture = TestBed.createComponent(RSalesHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
