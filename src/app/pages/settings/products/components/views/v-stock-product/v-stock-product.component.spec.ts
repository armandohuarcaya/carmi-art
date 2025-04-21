import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VStockProductComponent } from './v-stock-product.component';

describe('VStockProductComponent', () => {
  let component: VStockProductComponent;
  let fixture: ComponentFixture<VStockProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VStockProductComponent]
    });
    fixture = TestBed.createComponent(VStockProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
