// import { Firestore } from '@angular/fire/firestore';
import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, throwError } from "rxjs";
import { catchError, map, take, timeout } from "rxjs/operators";
import { IDespesas } from "../model/despesas.model";
import { UserService } from "../../usuarios/service/usuarios.service";
import { DESPESAS } from "src/app/shared/constants/url";
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
        return responseApi; // Spread operator para desestruturar o array
      }),
      catchError((error: any) => {
        console.error(error);
        return throwError(error);
      })
    );
  }

  deleteExpense(codeDespesa) {
    return this.http
      .delete(`${DESPESAS}/${codeDespesa}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateDespesa(despesaObj: IDespesas): Observable<any> {
    const firestoreObj = {
      fields: {
        category: { stringValue: despesaObj.category },
        description: { stringValue: despesaObj.description },
        amount: { integerValue: despesaObj.amount },
        paymentType: { stringValue: despesaObj.paymentType },
        wallet: { stringValue: despesaObj.wallet },
        establishment: { stringValue: despesaObj.establishment },
        date: { timestampValue: new Date(despesaObj.date).toISOString() },
        isFixed: { stringValue: despesaObj.isFixed },
        iconCategory: { stringValue: despesaObj.iconCategory }
      }
    };
    if (despesaObj.code || despesaObj.code === undefined || despesaObj.code === null) {
      //   return this.http
      //     .put<any>(`${URL_DESPESAS}/${despesaObj.code}`, firestoreObj, { headers: this.headers })
      //     .pipe(timeout(20000000), take(1));
      // } else {
      return this.http.post(DESPESAS, firestoreObj, { headers: this.headers }).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
