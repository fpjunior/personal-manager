import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_CATEGORIAS } from "src/app/shared/constants/url";
import { ICategorias } from "../model/categorias.model";

@Injectable({
  providedIn: "root",
})
export class CategoriasService extends RepositoryService<ICategorias> {
  constructor(public http: HttpClient) {
    super(http, URL_CATEGORIAS);
  }

  getAllCategorias(): Observable<any> {
    return this.http.get(`${URL_CATEGORIAS}.json`);
  }

  deleteCategorias(idCategorias) {
    return this.http
      .delete(`${URL_CATEGORIAS}/${idCategorias}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateCategorias(CategoriasObj: ICategorias): Observable<any> {
    if (CategoriasObj.id) {
      return this.http
        .put<any>(`${URL_CATEGORIAS}/${CategoriasObj.id}.json`, CategoriasObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_CATEGORIAS + ".json", CategoriasObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
