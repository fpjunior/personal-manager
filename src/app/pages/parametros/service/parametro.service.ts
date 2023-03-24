import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map, take, timeout } from 'rxjs/operators';
import { URL_PARAMETROS } from 'src/app/shared/constants/url';
import { RepositoryService } from 'src/app/shared/services/repository.service';
import { IParametro } from '../model/parametro.model';

@Injectable({
  providedIn: 'root'
})
export class ParametroService extends RepositoryService<IParametro> {

  constructor(public http: HttpClient) {
    super(http, URL_PARAMETROS);
  }

  getAllParametro(): Observable<any> {
    return this.http.get(`${URL_PARAMETROS}.json`);
  }

  saveOrUpdateDespesa(despesaObj: IParametro): Observable<any> {
      return this.http
        .put<any>(`${URL_PARAMETROS}/${despesaObj.code}.json`, despesaObj)
        .pipe(timeout(20000000), take(1));
  }

}
