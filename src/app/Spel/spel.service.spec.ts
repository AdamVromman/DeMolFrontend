import { TestBed } from '@angular/core/testing';

import { SpelService } from './spel.service';

describe('SpelService', () => {
  let service: SpelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
