import { RepositoryService } from "src/app/shared/services/repository.service";
import { ContactsModel } from "./../model/contact.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_CONTACTS } from "src/app/shared/constants/url";

@Injectable({
  providedIn: "root",
})
export class ContactService extends RepositoryService<ContactsModel> {
  constructor(public http: HttpClient) {
    super(http, URL_CONTACTS);
  }

  getAllContacts(): Observable<any> {
    return this.http.get(`${URL_CONTACTS}.json`);
  }

  deleteContact(idContact) {
    return this.http
      .delete(`${URL_CONTACTS}/${idContact}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateContact(contactObj: ContactsModel): Observable<any> {
    if (contactObj.id) {
      return this.http
        .put<any>(`${URL_CONTACTS}/${contactObj.id}.json`, contactObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_CONTACTS + ".json", contactObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
