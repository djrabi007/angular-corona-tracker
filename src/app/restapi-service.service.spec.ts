import { TestBed } from '@angular/core/testing';

import { RestapiServiceService } from './restapi-service.service';

describe('RestapiServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RestapiServiceService = TestBed.get(RestapiServiceService);
    expect(service).toBeTruthy();
  });
});
