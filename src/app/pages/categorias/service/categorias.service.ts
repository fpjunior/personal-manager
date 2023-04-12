import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { TYPE_CATEGORY } from "src/app/shared/constants/url";
import { ICategorias } from "../model/categorias.model";
import { UserService } from "../../usuarios/service/usuarios.service";

@Injectable({
  providedIn: "root",
})
export class CategoriasService {

  constructor(public http: HttpClient, private userService: UserService,
  ) {
  }

  private readonly headers = new HttpHeaders({
    Authorization: 'Bearer ' + this.userService.authToken,
    'Content-Type': 'application/json',
  });

  getAllCategory(): Observable<any[]> {
    return this.http.get(`${TYPE_CATEGORY}`, { headers: this.headers }).pipe(
      map((responseApi: any) => {
        const documents = responseApi.documents;
        const despesas = documents.map(doc => {
          const data = doc.fields;
          const objToTable = {
            color: data.color.stringValue,
            icon: data.icon.stringValue,
            name: data.name.stringValue,
          }
          return objToTable
        });
        return despesas;
      })
    );
}


  // getAllCategorias(): Observable<any> {
  //   return this.http.get(`${TYPE_CATEGORY}.json`);
  // }

  deleteCategorias(idCategorias) {
    return this.http
      .delete(`${TYPE_CATEGORY}/${idCategorias}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateCategorias(CategoriasObj: ICategorias): Observable<any> {
    if (CategoriasObj.id) {
      return this.http
        .put<any>(`${TYPE_CATEGORY}/${CategoriasObj.id}.json`, CategoriasObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(TYPE_CATEGORY + ".json", CategoriasObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
