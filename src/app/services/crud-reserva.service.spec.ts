import { TestBed } from '@angular/core/testing';

import { CrudReservaService } from './crud-reserva.service';

describe('CrudReservaService', () => {
  let service: CrudReservaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudReservaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
