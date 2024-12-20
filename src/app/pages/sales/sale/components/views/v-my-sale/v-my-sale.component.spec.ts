import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VMySaleComponent } from './v-my-sale.component';

describe('VMySaleComponent', () => {
  let component: VMySaleComponent;
  let fixture: ComponentFixture<VMySaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VMySaleComponent]
    });
    fixture = TestBed.createComponent(VMySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
