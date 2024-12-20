import { TestBed } from '@angular/core/testing';

import { SProductsService } from './s-products.service';

describe('SProductsService', () => {
  let service: SProductsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SProductsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
