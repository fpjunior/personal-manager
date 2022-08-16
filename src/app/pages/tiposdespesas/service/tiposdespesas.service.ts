import { CategoriasModel } from '../model/tipodespesas.model';
import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_TIPOS_DESPESAS } from "src/app/shared/constants/url";

@Injectable({
  providedIn: "root",
})
export class CategoriasService extends RepositoryService<CategoriasModel> {
  constructor(public http: HttpClient) {
    super(http, URL_TIPOS_DESPESAS);
  }

  getAllCategorias(): Observable<any> {
    return this.http.get(`${URL_TIPOS_DESPESAS}.json`);
  }

  deleteCategorias(idCategorias) {
    return this.http
      .delete(`${URL_TIPOS_DESPESAS}/${idCategorias}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateCategorias(CategoriasObj: CategoriasModel): Observable<any> {
    if (CategoriasObj.id) {
      return this.http
        .put<any>(`${URL_TIPOS_DESPESAS}/${CategoriasObj.id}.json`, CategoriasObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_TIPOS_DESPESAS + ".json", CategoriasObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
