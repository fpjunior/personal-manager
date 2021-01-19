import {
    HTTP_INTERCEPTORS,
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Router } from '@angular/router';
  import { Observable, throwError } from 'rxjs';
  import { catchError } from 'rxjs/operators';
  
  import { AuthService } from '../services/auth/auth.service';
  
  @Injectable({
    providedIn: 'root',
  })
  export class AuthInterceptor implements HttpInterceptor {
    constructor(private authService: AuthService, private router: Router) {}
  
    intercept(
      req: HttpRequest<any>,
      next: HttpHandler
    ): Observable<HttpEvent<any>> {
    //   if (this.authService.getToken) {
    //     const authReq = req.clone({
    //       setHeaders: {
    //         Authorization: this.authService.getToken,
    //       },
    //     });
    //     return next.handle(authReq).pipe(
    //       catchError((error) => {
    //         if (error instanceof HttpErrorResponse) {
    //           if (error.status === 401) {
    //             // this.authService.logout();
    //             // this.router.navigateByUrl('/login');
    //           }
    //         }
    //         return throwError(error);
    //       })
    //     );
    //   }
      return next.handle(req);
    }
  }
  
  export const authInterceptorProvider = {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true,
  };
  