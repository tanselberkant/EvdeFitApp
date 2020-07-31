import { TestBed } from '@angular/core/testing';

import { AbdominalService } from './abdominal.service';

describe('AbdominalService', () => {
  let service: AbdominalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AbdominalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
