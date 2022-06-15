import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
} from "@angular/router";
import { Observable } from "rxjs";
import { AuthService } from "./service/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router, private authService: AuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | boolean {
    if(this.authService.usuarioAutenticado()){
      return true;
    } else {
      this.router.navigate(["/login"]);
      return false;
    }
  }

  // canActivate(
  //     route: ActivatedRouteSnapshot,
  //     state: RouterStateSnapshot): Observable<boolean> | boolean {
  //     console.log(localStorage['token'], 'token');
  //     console.log("VALIDATE");

  //     console.log(localStorage['token'] != null);

  //     if (localStorage['token'] != null) {
  //         return true;
  //     } else {
  //         this.router.navigate(['/login']);
  //     }

  // }
}
