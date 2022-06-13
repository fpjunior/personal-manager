import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { CryptoService } from 'src/app/shared/services/crypto.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _code!: string
  private _description!: string
  // private _permissions: string[] = [""]
  private _uid!: string
  private _displayName!: string
  private _email!: string
  private _authToken!: string
  // private _admin: boolean = false
  portalUserSubject$!: BehaviorSubject<any | null>;

  headers: any = ''

  constructor(public http: HttpClient, private cryptoService: CryptoService) {
    this.portalUserSubject$ = new BehaviorSubject<any | null>(this.userSection());

    this.headers = new HttpHeaders({
      Authorization: this.authToken,
      'Content-Type': 'application/json',
    });
  }

  setUserSection(user: any | null) {
    if (!!user) {
      this.displayName = user.name
      this.email = user.email
      this.authToken = user.token
    }
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


  public userSection() {
    return {
      code: this.code,
      // description: this.description,
      // permissions: this.permissions,
      // uid: this.uid,
      displayName: this.displayName,
      email: this.email,
      authToken: this.authToken,
      // admin: this.admin
    }
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

  public get code() {
    const code = this.cryptoService.getDecryptedUserData("code")
    if (code) {
      this.code = code;
    }
    return this._code
  }

  public set code(v: string) {
    this.cryptoService.setToEncrypt("code", v)
    this._code = v;
  }

  get userSectionSubject(): any | null {
    return this.portalUserSubject$.value;
  }

}
