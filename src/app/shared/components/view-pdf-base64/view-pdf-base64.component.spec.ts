import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewPdfBase64Component } from './view-pdf-base64.component';

describe('ViewPdfBase64Component', () => {
  let component: ViewPdfBase64Component;
  let fixture: ComponentFixture<ViewPdfBase64Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ViewPdfBase64Component]
    });
    fixture = TestBed.createComponent(ViewPdfBase64Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
