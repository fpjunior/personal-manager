/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { DespesasService } from './despesas.service';

describe('Service: Despesas', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DespesasService]
    });
  });

  it('should ...', inject([DespesasService], (service: DespesasService) => {
    expect(service).toBeTruthy();
  }));
});
