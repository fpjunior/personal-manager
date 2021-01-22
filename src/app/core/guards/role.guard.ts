import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivate,

  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { USER_CODE } from '../../shared/constants/local-storage-keys';
import { AuthService } from '../services/auth/auth.service';
import { UserPermissionsService } from '../services/navigate/user-permissions.service';

@Injectable({
  providedIn: 'root',
})
export class RoleGuard implements CanActivate {
  path: ActivatedRouteSnapshot[];
  route: ActivatedRouteSnapshot;

  constructor(
    private userPermissionsService: UserPermissionsService,
    private authService: AuthService
  ) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    const codUser = Number(localStorage.getItem(USER_CODE));

    return this.userPermissionsService.listPermissions(codUser).pipe(
      map((permissions) => {
        if (!permissions || permissions.length === 0) {
          this.authService.logout();
        }

        if (permissions) {
          permissions;
        }

        return true;
      })
    );
  }
}
