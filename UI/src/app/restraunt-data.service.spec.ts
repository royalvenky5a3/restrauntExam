import { TestBed } from '@angular/core/testing';

import { RestrauntDataService } from './restraunt-data.service';

describe('RestrauntDataServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestrauntDataService = TestBed.get(RestrauntDataService);
    expect(service).toBeTruthy();
  });
});
