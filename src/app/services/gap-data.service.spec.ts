import { TestBed } from '@angular/core/testing';

import { GapDataService } from './gap-data.service';

describe('GapDataService', () => {
  let service: GapDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GapDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
