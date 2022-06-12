import { RepositoryService } from "src/app/shared/services/repository.service";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_CONTACTS } from "src/app/shared/constants/url";
import { UsersModel } from "../model/usuarios.model";

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

  saveOrUpdateUser(userObj: UsersModel): Observable<any> {
    if (userObj.id) {
      return this.http
        .put<any>(`${URL_CONTACTS}/${userObj.id}.json`, userObj)
        .pipe(timeout(20000000), take(1));
    } else {
      return this.http.post(URL_CONTACTS + ".json", userObj).pipe(
        map((responseApi: any) => responseApi),
        take(1)
      );
    }
  }
}
