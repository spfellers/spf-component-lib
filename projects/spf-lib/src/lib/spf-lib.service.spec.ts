import { TestBed } from '@angular/core/testing';

import { SpfLibService } from './spf-lib.service';

describe('SpfLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpfLibService = TestBed.get(SpfLibService);
    expect(service).toBeTruthy();
  });
});
