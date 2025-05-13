import { TestBed } from '@angular/core/testing';

import { SSalesService } from './s-sales.service';

describe('SSalesService', () => {
  let service: SSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
