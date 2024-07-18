import { TestBed } from '@angular/core/testing';

import { CheckUSerService } from './check-user.service';

describe('CheckUSerService', () => {
  let service: CheckUSerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CheckUSerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
