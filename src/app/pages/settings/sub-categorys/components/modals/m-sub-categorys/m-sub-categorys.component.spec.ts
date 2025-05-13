import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MSubCategorysComponent } from './m-sub-categorys.component';

describe('MSubCategorysComponent', () => {
  let component: MSubCategorysComponent;
  let fixture: ComponentFixture<MSubCategorysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MSubCategorysComponent]
    });
    fixture = TestBed.createComponent(MSubCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
