import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MProductComponent } from './m-product.component';

describe('MProductComponent', () => {
  let component: MProductComponent;
  let fixture: ComponentFixture<MProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MProductComponent]
    });
    fixture = TestBed.createComponent(MProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
