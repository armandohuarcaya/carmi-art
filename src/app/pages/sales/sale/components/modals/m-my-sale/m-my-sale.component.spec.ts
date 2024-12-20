import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MMySaleComponent } from './m-my-sale.component';

describe('MMySaleComponent', () => {
  let component: MMySaleComponent;
  let fixture: ComponentFixture<MMySaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MMySaleComponent]
    });
    fixture = TestBed.createComponent(MMySaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
