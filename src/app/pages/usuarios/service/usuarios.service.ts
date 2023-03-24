import { RepositoryService } from "src/app/shared/services/repository.service";
import { IUsers } from "../model/usuarios.model";
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { BehaviorSubject, Observable } from "rxjs";
import { map, take, timeout } from "rxjs/operators";
import { URL_CONTACTS } from "src/app/shared/constants/url";
import { CryptoService } from "src/app/shared/services/crypto.service";

@Injectable({
  providedIn: "root",
})
export class UserService extends RepositoryService<IUsers> {

  private _code!: string
  private _description!: string
  private _store!: string
  private _storePhone!: string

  private _permissions: string[] = [""]
  private _uid!: string
  private _displayName!: string
  private _email!: string
  private _authToken!: string
   _admin: boolean = false
  headers: any = ''
  portalUserSubject$!: BehaviorSubject<any | null>;

  constructor(public http: HttpClient, private cryptoService: CryptoService) {
    super(http, URL_CONTACTS);
    this.portalUserSubject$ = new BehaviorSubject<any | null>(this.userSection());

    this.headers = new HttpHeaders({
      Authorization: this.authToken,
      'Content-Type': 'application/json',
    });
  }

  public get code() {
    const code = this.cryptoService.getDecryptedUserData("code")
    if (code) {
      this.code = code;
    }
    return this._code
  }

  public set code(v: string) {
    this.cryptoService.setToEncrypt("code", JSON.stringify(v))
    this._code = v;
  }

  public get authToken() {
    const authToken = this.cryptoService.getDecryptedUserData("authToken")
    if (authToken) {
      this.authToken = authToken;
    }
    return this._authToken
  }

  public set authToken(v: string) {
    this.cryptoService.setToEncrypt("authToken", v)
    this._authToken = v;
  }

  public set admin(v: boolean) {
    this.cryptoService.setToEncrypt("admin", v.toString())
    this._admin = v;
  }

  public get admin() {
    const admin = this.cryptoService.getDecryptedUserData("admin")
    if (admin) {
      this.admin = (admin === 'true') ? true : false;
    }
    return this._admin;
  }

  public get store() {
    const store = this.cryptoService.getDecryptedUserData("store")
    if (store) {
      this.store = store;
    }
    return this._store
  }

  public set store(v: string) {
    this.cryptoService.setToEncrypt("store", v)
    this._store = v;
  }

    public get permissions() {
    const permissions = this.cryptoService.getDecryptedUserData("permissions")
    if (permissions) {
      this.permissions = JSON.parse(JSON.stringify(permissions));
    }
    return this._permissions
  }

  public set permissions(v: string[]) {
    // Esse regex remove as barras '\', pois tem um bug ao descriptografar
    // que gera esse char exponencialmente varias vezes
    const listPermissions = JSON.stringify(v)?.replace(/[&\\#+()$~%.':*?<>{}]/g, '')
    this.cryptoService.setToEncrypt("permissions", listPermissions)
    this._permissions = v;
  }

    public userSection() {
    return {
      code: this.code,
      // description: this.description,
      store: this.store,
      permissions: this.permissions,
      uid: this.uid,
      displayName: this.displayName,
      email: this.email,
      authToken: this.authToken,
      admin: this.admin
    }
  }

  public get uid() {
    const uid = this.cryptoService.getDecryptedUserData("uid")
    if (uid) {
      this.uid = uid;
    }
    return this._uid
  }

  public set uid(v: string) {
    this.cryptoService.setToEncrypt("uid", v)
    this._uid = v;
  }

  public get displayName() {
    const displayName = this.cryptoService.getDecryptedUserData("displayName")
    if (displayName) {
      this.displayName = displayName;
    }
    return this._displayName
  }

  public set displayName(v: string) {
    this.cryptoService.setToEncrypt("displayName", v)
    this._displayName = v;
  }

  setUserSection(user: any | null) {
    if (!!user) {
      this.uid = user.user
      this.displayName = user.name
      this.email = user.email
      this.authToken = user.token
      this.admin = user.admin
    }
  }

    public get email() {
    const email = this.cryptoService.getDecryptedUserData("email")
    if (email) {
      this.email = email;
    }
    return this._email
  }

  public set email(v: string) {
    this.cryptoService.setToEncrypt("email", v)
    this._email = v;
  }

  get userSectionSubject(): any | null {
    return this.portalUserSubject$.value;
  }

  get loggedIn(): boolean {
    return this.uid ? true : false;
  }

  getAllUsers(): Observable<any> {
    return this.http.get(`${URL_CONTACTS}.json`);
  }

  deleteUser(idUser) {
    return this.http
      .delete(`${URL_CONTACTS}/${idUser}.json`)
      .pipe(map((responseApi: any) => responseApi));
  }

  saveOrUpdateUser(contactObj: IUsers): Observable<any> {
    let dataRecord = new Date()
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
