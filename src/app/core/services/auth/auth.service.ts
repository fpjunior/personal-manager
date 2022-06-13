import { Injectable } from '@angular/core';
import { PortalUser } from '../../model/portal-user';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import {
  USER,
  USER_KEY_AUTHORIZED,
  AUTHORIZATION_KEY
} from '../../../shared/constants/local-storage-keys';
import { AuthApiResponse } from '../../model/response-auth-api';
import { URL_LOGIN } from 'src/app/shared/constants/url';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private authPortalUser: BehaviorSubject<PortalUser>;
  private logoutUser: Subject<any>;

  constructor(private http: HttpClient, private router: Router) {
    const user = JSON.parse(localStorage.getItem(USER));
    this.authPortalUser = new BehaviorSubject(user);
    this.logoutUser = new Subject();
  }

  /**
   * Submete o usuário para autenticação e recupera o token de autorização.
   * @param portalUser Usuário redirecionado do portal
   */
  authenticate(portalUser: PortalUser): Observable<void> {
    return this.http
      .post<AuthApiResponse>(
        URL_LOGIN,
        // 'blablabla..',
        { username: portalUser.userCpf, password: portalUser.password },
        { observe: 'response' }
      )
      .pipe(
        map((apiResponse) => {
          const authToken = apiResponse.headers.get(AUTHORIZATION_KEY);
          localStorage.setItem(USER_KEY_AUTHORIZED, authToken);
        })
      );
  }

  /**
   * Encerra a sessão.
   */
   logout(): void {
    // this.portalUserSubject$.next(null);
    localStorage.clear();
    this.router.navigate(['login']);
  }

  /**
   * Carrega os dados do usuário autenticado na sessão.
   * @param portalUser Usuário redirecionado do portal.
   */
  setAuthUserData(portalUser: PortalUser): void {
    const user = {
      userName: portalUser.userName,
      userCpf: portalUser.userCpf,
      baseUrl: portalUser.baseUrl,
    }

    localStorage.setItem(USER, JSON.stringify(user));
    this.authPortalUser = new BehaviorSubject(portalUser);
    this.logoutUser = new Subject<any>();
  }

  get getToken(): string {
    const loggedUser = localStorage.getItem(USER_KEY_AUTHORIZED);
    if (!loggedUser) {
      return null;
    }

    return loggedUser;
  }

  removeToken(): void {
    localStorage.removeItem(USER_KEY_AUTHORIZED);
  }

  get getLoggedUser(): PortalUser {
    return this.authPortalUser?.value;
  }

  get getLoggedUser$(): Observable<PortalUser> {
    return this.authPortalUser?.asObservable();
  }

  get isLoggedUser(): boolean {
    return this.getLoggedUser != null;
  }

  // isLogged(): boolean {
  //   return this.tokenService.hasToken();
  // }

  get logout$(): Observable<any> {
    return this.logoutUser?.asObservable();
  }

}
