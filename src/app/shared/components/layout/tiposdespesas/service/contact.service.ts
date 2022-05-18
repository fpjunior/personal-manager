import { TiposdespesasModel } from './../model/tipodespesas.model';
import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_CONTACTS } from "src/app/shared/constants/url";

@Injectable({
  providedIn: "root",
})
export class TiposDespesasService extends RepositoryService<TiposdespesasModel> {
  constructor(public http: HttpClient) {
    super(http, URL_CONTACTS);
  }

  getAllTiposDespesas(): Observable<any> {
    return this.http.get(`${URL_CONTACTS}.json`);
  }

  deleteTiposDespesas(idTiposDespesas) {
    return this.http
      .delete(`${URL_CONTACTS}/${idTiposDespesas}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateTiposDespesas(TiposDespesasObj: TiposdespesasModel): Observable<any> {
    if (TiposDespesasObj.id) {
      return this.http
        .put<any>(`${URL_CONTACTS}/${TiposDespesasObj.id}.json`, TiposDespesasObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_CONTACTS + ".json", TiposDespesasObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
function tipostespesasObj<T>(arg0: string, tipostespesasObj: any) {
  throw new Error('Function not implemented.');
}

