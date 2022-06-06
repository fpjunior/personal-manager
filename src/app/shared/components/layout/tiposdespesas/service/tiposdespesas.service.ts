import { TiposdespesasModel } from '../model/tipodespesas.model';
import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_TIPOS_DESPESAS } from "src/app/shared/constants/url";

@Injectable({
  providedIn: "root",
})
export class TiposDespesasService extends RepositoryService<TiposdespesasModel> {
  constructor(public http: HttpClient) {
    super(http, URL_TIPOS_DESPESAS);
  }

  getAllTiposDespesas(): Observable<any> {
    return this.http.get(`${URL_TIPOS_DESPESAS}.json`);
  }

  deleteTiposDespesas(idTiposDespesas) {
    return this.http
      .delete(`${URL_TIPOS_DESPESAS}/${idTiposDespesas}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateTiposDespesas(TiposDespesasObj: TiposdespesasModel): Observable<any> {
    if (TiposDespesasObj.id) {
      return this.http
        .put<any>(`${URL_TIPOS_DESPESAS}/${TiposDespesasObj.id}.json`, TiposDespesasObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_TIPOS_DESPESAS + ".json", TiposDespesasObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}

