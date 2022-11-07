import { TestBed } from '@angular/core/testing';

import { CrudRentaService } from './crud-renta.service';

describe('CrudRentaService', () => {
  let service: CrudRentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrudRentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
