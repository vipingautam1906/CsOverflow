import { TestBed } from '@angular/core/testing';

import { LandingserviceService } from './landingservice.service';

describe('LandingserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LandingserviceService = TestBed.get(LandingserviceService);
    expect(service).toBeTruthy();
  });
});
