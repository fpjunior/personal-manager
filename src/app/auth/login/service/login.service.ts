
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
// import { HttpUtilService } from './http-util-service';
import { User } from '../model/user.model';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user: Observable<any>;

  constructor(public afAuth: AngularFireAuth, public router: Router) {
    this.user = afAuth.authState;
 }

 public login(mail: string, password: string) {
  return new Promise((resolve, reject) => {
  this.afAuth.auth.signInWithEmailAndPassword(mail, password).then((user: any) => {
  localStorage['token'] = user.Yd;
                  this.router.navigate(['']);
  })
                  .catch((error) => {
                      this.router.navigate(['/login']);
                  });
          })
              .catch((error) => {
                  this.router.navigate(['/login']);
              });
      }
  public logout() {
          return this.afAuth.auth.signOut();
      }

}
