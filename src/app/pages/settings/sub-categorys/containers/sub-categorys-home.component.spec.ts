import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubCategorysHomeComponent } from './sub-categorys-home.component';

describe('SubCategorysHomeComponent', () => {
  let component: SubCategorysHomeComponent;
  let fixture: ComponentFixture<SubCategorysHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SubCategorysHomeComponent]
    });
    fixture = TestBed.createComponent(SubCategorysHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
