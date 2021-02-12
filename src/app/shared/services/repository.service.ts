import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, take, timeout } from 'rxjs/operators';

import { ApiResponseWrapper } from '../models/response-api-wrapper.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService<T> {
  constructor(protected http: HttpClient, private URL: string) {}

  listAll(): Observable<T[]> {
    return this.http.get<ApiResponseWrapper<T[]>>(this.URL).pipe(
      delay(1000),
      timeout(20000),
      map((responseApi) => responseApi.data),
      take(1)
    );
  }

  list(): Observable<T> {
    return this.http.get<ApiResponseWrapper<T>>(this.URL).pipe(
      delay(1000),
      timeout(20000),
      map((responseApi) => responseApi.data),
      take(1)
    );
  }

  loadById(id: number): Observable<T> {
    return this.http.get<T>(`${this.URL}/${id}`).pipe(
      timeout(20000),
      take(1));
  }

  loadWithFilter(filter: string): Observable<T[]> {
    const params = new HttpParams().set('filtro', filter)
    return this.http.get<ApiResponseWrapper<T[]>>(this.URL, {params}).pipe(
      delay(1000),
      timeout(20000),
      map((responseApi) => responseApi.data),
      take(1)
    );
  }

  saveOrUpdate(record: T): Observable<T> {
    if (record['codigo']) {
      return this.update(record);
    }
    return this.save(record);
  }

  deleteById(id: number): Observable<T> {
    return this.http.delete<T>(`${this.URL}/${id}`).pipe(
      timeout(20000),
      take(1));
  }

  private save(record: T): Observable<T> {
    return this.http.post<T>(this.URL, record).pipe(
      timeout(20000),
      take(1));
  }

  private update(record: T): Observable<T> {
    return this.http
      .post<T>(`${this.URL}/${record['codigo']}`, record)
      .pipe(
        timeout(20000),
        take(1));
  }
}
