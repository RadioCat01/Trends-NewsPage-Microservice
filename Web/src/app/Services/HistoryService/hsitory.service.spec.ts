import { TestBed } from '@angular/core/testing';

import { HsitoryService } from './hsitory.service';

describe('HsitoryService', () => {
  let service: HsitoryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HsitoryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
