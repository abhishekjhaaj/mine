import { TestBed } from '@angular/core/testing';

import { ViewtestService } from './viewtest.service';

describe('ViewtestService', () => {
  let service: ViewtestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewtestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
