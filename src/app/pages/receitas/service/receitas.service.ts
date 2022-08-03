import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_RECEITAS } from "src/app/shared/constants/url";
import { ReceitasModel } from "../model/receitas.model";

@Injectable({
  providedIn: "root",
})
export class ReceitaService extends RepositoryService<ReceitasModel> {
  constructor(public http: HttpClient) {
    super(http, URL_RECEITAS);
  }

   getAllReceitas(): Observable<any> {
    return this.http.get(`${URL_RECEITAS}.json`);
  }

  deleteReceita(codeReceita) {
    return this.http
      .delete(`${URL_RECEITAS}/${codeReceita}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateReceita(receitaObj:ReceitasModel): Observable<any> {
    if (receitaObj.code) {
      return this.http
        .put<any>(`${URL_RECEITAS}/${receitaObj.code}.json`, receitaObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_RECEITAS + ".json", receitaObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
