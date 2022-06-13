import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap, timeout } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

constructor(private router: Router,
  public http: HttpClient,) { }

  private readonly headers = new HttpHeaders({
    Authorization: "aW5mb3JtYXRhY2xvdWRhdXRoZW50aWNhdGlvbjIwMTg=",
    'Content-Type': 'application/json',
  });

  httpOptionsPost = {
    headers: new HttpHeaders({
      Authorization: "aW5mb3JtYXRhY2xvdWRhdXRoZW50aWNhdGlvbjIwMTg=",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
    })
  };

  async login(userData: any) {

    userData.app = "003"

    return this.http.post('https://us-central1-info-development.cloudfunctions.net/app/api/auth/authentication', userData, this.httpOptionsPost)
      .pipe(
        timeout(20000),
        tap((result: any) => {
          return result;
        }),
        take(1)
      ).toPromise()
      .then((res: any) => res)
      .catch((error: any) => error);
  }

}
