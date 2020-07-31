import { TestBed } from '@angular/core/testing';

import { ShoulderService } from './shoulder.service';

describe('ShoulderService', () => {
  let service: ShoulderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoulderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
