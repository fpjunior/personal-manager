import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay, map, take } from 'rxjs/operators';
import { apiResponseWrapper } from '../models/response-api-wrapper.model';

@Injectable({
  providedIn: 'root',
})
export class RepositoryService<T> {
  constructor(protected http: HttpClient, private URL: string) {}

  listAll(): Observable<T[]> {
    return this.http.get<apiResponseWrapper<T[]>>(this.URL).pipe(
      delay(1000),
      map((responseApi) => responseApi.data),
      take(1)
    );
  }

  loadById(id: number): Observable<T> {
    return this.http.get<T>(`${this.URL}/${id}`).pipe(take(1));
  }

  saveOrUpdate(record: T): Observable<T> {
    if (record['id']) {
      return this.update(record);
    }
    return this.save(record);
  }

  deleteById(id: number): Observable<T> {
    return this.http.delete<T>(`${this.URL}/${id}`).pipe(take(1));
  }

  private save(record: T): Observable<T> {
    return this.http.post<T>(this.URL, record).pipe(take(1));
  }

  private update(record: T): Observable<T> {
    return this.http
      .put<T>(`${this.URL}/${record['id']}`, record)
      .pipe(take(1));
  }
}
