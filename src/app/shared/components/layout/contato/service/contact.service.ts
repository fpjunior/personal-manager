import { ContactsModel } from './../model/contact.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  contactUrl = 'http://localhost:3000/contacts'

  constructor(public http: HttpClient) { }

  getAllContacts(): Observable<any>{
    return this.http.get(this.contactUrl)
  }

  saveContact(contactObj: ContactsModel ): Observable<any> {
    return this.http.post(this.contactUrl, contactObj).pipe(
      map((responseApi: any) => responseApi),
      take(1)
    )
  }

}
