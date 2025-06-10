import { TestBed } from '@angular/core/testing';

import { SRSalesService } from './s-r-sales.service';

describe('SRSalesService', () => {
  let service: SRSalesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SRSalesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
