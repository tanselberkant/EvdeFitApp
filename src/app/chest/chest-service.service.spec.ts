import { TestBed } from '@angular/core/testing';

import { ChestServiceService } from './chest-service.service';

describe('ChestServiceService', () => {
  let service: ChestServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ChestServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
