import { TestBed } from '@angular/core/testing';

import { ArmExerciseService } from './arm-exercise.service';

describe('ArmExerciseService', () => {
  let service: ArmExerciseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArmExerciseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
