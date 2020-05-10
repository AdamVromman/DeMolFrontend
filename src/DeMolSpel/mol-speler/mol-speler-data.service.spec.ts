import { TestBed } from '@angular/core/testing';

import { MolSpelerDataService } from './mol-speler-data.service';

describe('MolSpelerDataService', () => {
  let service: MolSpelerDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MolSpelerDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
