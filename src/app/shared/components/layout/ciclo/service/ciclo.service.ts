import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ciclo } from '../model/ciclo.model';
import { ApiResponseWrapper } from 'src/app/shared/models/response-api-wrapper.model';
import { timeout, map } from 'rxjs/operators';
import { URL_GET_CICLO, URL_RESTORE_CONFIG_CICLO } from 'src/app/shared/constants/url';

@Injectable({
  providedIn: 'root'
})
export class CicloService {

  private codigoIndicadorDivergenciaPreco = 1;

constructor(public http: HttpClient) { }

getConfigCiclo(): Observable<Ciclo>{
  return this.http.get<ApiResponseWrapper<Ciclo>>(`${URL_GET_CICLO}`)
  .pipe(timeout(2000), map(responseApi => responseApi.data))
}

getRestoreCiclo(): Observable<Ciclo> {
  return this.http
  .get<ApiResponseWrapper<Ciclo>>(`${URL_RESTORE_CONFIG_CICLO}`)
  .pipe(timeout(2000), map(responseApi => responseApi.data))
}

}
