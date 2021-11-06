import { TestBed } from '@angular/core/testing';

import { EstudicursoService } from './estudicurso.service';

describe('EstudicursoService', () => {
  let service: EstudicursoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EstudicursoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
