// import { Firestore } from '@angular/fire/firestore';
import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { DESPESAS, URL_DESPESAS } from "src/app/shared/constants/url";
import { IDespesas } from "../model/despesas.model";
import { UserService } from "../../usuarios/service/usuarios.service";
// import { Firestore, collection, collectionData} from '@angular/fire/firestore';


@Injectable({
  providedIn: "root",
})
export class DespesaService {
  user = sessionStorage.getItem('user').split('@')[0];

  // private firestore: Firestore = inject(Firestore); / ng add @angular/fire / inject Cloud Firestore
    users$: Observable<any[]>;

  constructor(public http: HttpClient, private userService: UserService,
  ) {
  }

  private readonly headers = new HttpHeaders({
    Authorization: 'Bearer ' + this.userService.authToken,
    'Content-Type': 'application/json',
  });

  getAllExpense(): Observable<any[]> {
    return this.http.get(`${DESPESAS}`, { headers: this.headers }).pipe(
      map((responseApi: any) => {
        const documents = responseApi.documents;
        const despesas = documents.map(doc => {
          const data = doc.fields;
          const objToTable = {
            amount: data.amount.stringValue,
            description: data.description.stringValue,
            paymentType: data.paymentType.stringValue,
          }
          return objToTable
        });
        return despesas;
      })
    );
}

  deleteExpense(codeDespesa) {
    return this.http
      .delete(`${URL_DESPESAS}/${codeDespesa}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateDespesa(despesaObj: IDespesas): Observable<any> {
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
