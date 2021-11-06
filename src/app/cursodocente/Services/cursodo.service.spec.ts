import { TestBed } from '@angular/core/testing';

import { CursodoService } from './cursodo.service';

describe('CursodoService', () => {
  let service: CursodoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CursodoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
