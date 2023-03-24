import * as firebase from "firebase/app";
import { AngularFireAuth } from '@angular/fire/auth';
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Router } from "@angular/router";
// import { HttpUtilService } from './http-util-service';
import { User } from "../model/user.model";
import { AuthService } from "../../service/auth.service";

@Injectable({
  providedIn: "root",
})
export class LoginService {
  user: Observable<any>;

  constructor(
    public afAuth: AngularFireAuth,
    public router: Router,
    private authService: AuthService) {
    this.user = afAuth.authState;
  }

  recuperarSenha(mail: string): Observable<any> {
    return Observable.create(observer => {
      this.afAuth.sendPasswordResetEmail(mail)
        .then(obj => {
          console.log(obj);
          observer.next(obj);
          observer.complete();
        })
        .catch(error => {
          observer.error(error);
        });
    });
  }

  criarUsuario(user: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.createUserWithEmailAndPassword(user, password)
        .then((userCreated) => {
          resolve(userCreated);
        })
        .catch((error) => {
          reject(error);
        });
    });
  }

  public login(mail: string, password: string) {
    return new Promise((resolve, reject) => {
      this.afAuth.signInWithEmailAndPassword(mail, password)
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

  public logout() {
    return this.afAuth.signOut();
  }
}
