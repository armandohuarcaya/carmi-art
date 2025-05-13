import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MBrandsComponent } from './m-brands.component';

describe('MBrandsComponent', () => {
  let component: MBrandsComponent;
  let fixture: ComponentFixture<MBrandsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MBrandsComponent]
    });
    fixture = TestBed.createComponent(MBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
