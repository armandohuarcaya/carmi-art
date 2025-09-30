import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientsHomeComponent } from './clients-home.component';

describe('ClientsHomeComponent', () => {
  let component: ClientsHomeComponent;
  let fixture: ComponentFixture<ClientsHomeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsHomeComponent]
    });
    fixture = TestBed.createComponent(ClientsHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
