import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandsHomeComponent } from './brands-home.component';

describe('BrandsHomeComponent', () => {
  let component: BrandsHomeComponent;
  let fixture: ComponentFixture<BrandsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BrandsHomeComponent]
    });
    fixture = TestBed.createComponent(BrandsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
