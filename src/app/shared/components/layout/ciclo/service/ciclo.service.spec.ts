/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { CicloService } from './ciclo.service';

describe('Service: Ciclo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CicloService]
    });
  });

  it('should ...', inject([CicloService], (service: CicloService) => {
    expect(service).toBeTruthy();
  }));
});
