/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ParametroService } from './parametro.service';

describe('Service: Parametro', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParametroService]
    });
  });

  it('should ...', inject([ParametroService], (service: ParametroService) => {
    expect(service).toBeTruthy();
  }));
});
