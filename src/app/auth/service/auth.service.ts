import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { take, tap, timeout } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token$: Observable<string>;


  constructor(
    private router: Router,
    private afAuth: AngularFireAuth,
    public http: HttpClient,
  ) {
    // this.token$ = this.afAuth.idToken;
  }

  private readonly headers = new HttpHeaders({
    Authorization: "d4mX4LMHYhoWX8uFKn3f3CgBxJbTJxnq4BHc0w7I",
    'Content-Type': 'application/json',
  });

  httpOptionsPost = {
    headers: new HttpHeaders({
      Authorization: "d4mX4LMHYhoWX8uFKn3f3CgBxJbTJxnq4BHc0w7I",
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': 'true',
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Origin, Content-Type, Accept, X-Custom-Header, Upgrade-Insecure-Requests',
    })
  };

  public login2(userData: any) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(userData.user, userData.password)
        .then((user: any) => {
          user.user.getIdToken().then(token => {
            localStorage.setItem("token", token);
            this.router.navigate([""]);
            // resolve();
          });
        })
        .catch((error) => {
          this.router.navigate(["/login"]);
          reject(error);
        });
    }).catch((error) => {
      this.router.navigate(["/login"]);
      // reject(error);
    });
  }

  async login(userData: any) {

    userData.app = "003"

    return this.afAuth.signInWithEmailAndPassword(userData.user, userData.password)
    .then((user: any) => {
      console.log(user)
      user.user.getIdToken().then(token => {
        localStorage.setItem("token", token);
        this.router.navigate([""]);
        // resolve();
      });
    })
    .catch((error) => {
      this.router.navigate(["/login"]);
      // reject(error);
    });
  }

  usuarioAutenticado() {
    console.log(localStorage['token'] != null);
    return localStorage.getItem('token') != null;
  }



}
