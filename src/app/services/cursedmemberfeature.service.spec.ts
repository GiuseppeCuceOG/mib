import { TestBed } from '@angular/core/testing';

import { CursedmemberfeatureService } from './cursedmemberfeature.service';

describe('CursedmemberfeatureService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CursedmemberfeatureService = TestBed.get(CursedmemberfeatureService);
    expect(service).toBeTruthy();
  });
});
