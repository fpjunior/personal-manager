import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_CONTACTS, URL_DESPESAS } from "src/app/shared/constants/url";
import { DespesasModel } from "../model/despesas.model";
import { FormGroup } from "@angular/forms";

@Injectable({
  providedIn: "root",
})
export class DespesaService extends RepositoryService<DespesasModel> {
  constructor(public http: HttpClient) {
    super(http, URL_DESPESAS);
  }

   getAllExpense(): Observable<any> {
    return this.http.get(`${URL_DESPESAS}.json`);
  }

  deleteExpense(codeDespesa) {
    return this.http
      .delete(`${URL_DESPESAS}/${codeDespesa}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateDespesa(despesaObj: DespesasModel): Observable<any> {
    if (despesaObj.code) {
      return this.http
        .put<any>(`${URL_DESPESAS}/${despesaObj.code}.json`, despesaObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_DESPESAS + ".json", despesaObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
