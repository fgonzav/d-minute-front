import { TestBed, inject } from '@angular/core/testing';

import { SessionService } from './session.service';

describe('SignOnService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SessionService]
    });
  });

  it('should be created', inject([SessionService], (service: SessionService) => {
    expect(service).toBeTruthy();
  }));
});
