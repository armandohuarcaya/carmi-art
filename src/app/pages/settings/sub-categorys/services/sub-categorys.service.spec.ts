import { TestBed } from '@angular/core/testing';

import { SubCategorysService } from './sub-categorys.service';

describe('SubCategorysService', () => {
  let service: SubCategorysService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubCategorysService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
