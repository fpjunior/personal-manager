import { RepositoryService } from "src/app/shared/services/repository.service";
import { UsersModel } from "../model/usuarios.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_CONTACTS } from "src/app/shared/constants/url";

@Injectable({
  providedIn: "root",
})
export class UserService extends RepositoryService<UsersModel> {
  constructor(public http: HttpClient) {
    super(http, URL_CONTACTS);
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${URL_CONTACTS}.json`);
  }

  deleteUser(idUser) {
    return this.http
      .delete(`${URL_CONTACTS}/${idUser}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateUser(contactObj: UsersModel): Observable<any> {
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
