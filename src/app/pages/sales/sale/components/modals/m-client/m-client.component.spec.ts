import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MClientComponent } from './m-client.component';

describe('MClientComponent', () => {
  let component: MClientComponent;
  let fixture: ComponentFixture<MClientComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MClientComponent]
    });
    fixture = TestBed.createComponent(MClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
