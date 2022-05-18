import { TestBed } from '@angular/core/testing';
import { TiposDespesasService } from './tiposdespesas.service';



describe('TiposDespesasService', () => {
  let service: TiposDespesasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TiposDespesasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
