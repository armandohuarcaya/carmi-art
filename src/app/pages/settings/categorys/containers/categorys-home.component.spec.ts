import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategorysHomeComponent } from './categorys-home.component';

describe('CategorysHomeComponent', () => {
  let component: CategorysHomeComponent;
  let fixture: ComponentFixture<CategorysHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CategorysHomeComponent]
    });
    fixture = TestBed.createComponent(CategorysHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
