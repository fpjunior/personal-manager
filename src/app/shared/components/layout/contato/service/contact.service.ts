import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(public http: HttpClient) { }

  getAllContacts(): Observable<any>{
    return this.http.get('http://localhost:3000/contacts')
  }
}
