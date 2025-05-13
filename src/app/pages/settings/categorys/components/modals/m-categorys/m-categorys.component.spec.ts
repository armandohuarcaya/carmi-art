import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MCategorysComponent } from './m-categorys.component';

describe('MCategorysComponent', () => {
  let component: MCategorysComponent;
  let fixture: ComponentFixture<MCategorysComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MCategorysComponent]
    });
    fixture = TestBed.createComponent(MCategorysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
