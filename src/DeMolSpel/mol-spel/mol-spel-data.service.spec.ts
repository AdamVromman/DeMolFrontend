import { TestBed } from '@angular/core/testing';

import { MolSpelDataService } from './mol-spel-data.service';

describe('MolSpelDataService', () => {
  let service: MolSpelDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolSpelDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
