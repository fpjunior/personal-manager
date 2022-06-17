/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DespesaService} from './despesas.service';

describe('DespesaService', () => {
  let service: DespesaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DespesaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
