import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginationPerInputComponent } from './pagination-per-input.component';

describe('PaginationPerInputComponent', () => {
  let component: PaginationPerInputComponent;
  let fixture: ComponentFixture<PaginationPerInputComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaginationPerInputComponent]
    });
    fixture = TestBed.createComponent(PaginationPerInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
