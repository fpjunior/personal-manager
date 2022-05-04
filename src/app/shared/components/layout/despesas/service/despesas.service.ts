import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';
import { DespesasModel } from '../model/despesas.model';

@Injectable({
  providedIn: 'root'
})

export class DespesasService {

  despesaUrl = 'http://localhost:3000/despesas'

  constructor(public http: HttpClient) { }

  getAllDespesas(): Observable<any>{
    return this.http.get(this.despesaUrl)
  }

  saveDespesa(despesaObj: DespesasModel ): Observable<any> {
    return this.http.post(this.despesaUrl, despesaObj).pipe(
      map((responseApi: any) => responseApi),
      take(1)
    )
  }

}
