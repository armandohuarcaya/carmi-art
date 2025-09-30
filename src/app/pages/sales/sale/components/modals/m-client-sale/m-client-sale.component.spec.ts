import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClientSaleComponent } from './m-client-sale.component';

describe('MClientSaleComponent', () => {
  let component: MClientSaleComponent;
  let fixture: ComponentFixture<MClientSaleComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MClientSaleComponent]
    });
    fixture = TestBed.createComponent(MClientSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
