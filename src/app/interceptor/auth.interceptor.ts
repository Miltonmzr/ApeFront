import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Router} from '@angular/router';
import { Observable, throwError} from 'rxjs';
import {catchError} from 'rxjs/operators';
import {AuthService} from '../services/auth.service';

import Swal from 'sweetalert2';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private authService: AuthService) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(req).pipe(
        catchError(e => {
              if(e.status == 401) {
                if(this.authService.isAuthenticated()) {
                  this.authService.logout();
                }

                this.router.navigate(['/login']);
              }
          
              if(e.status == 403) {
                Swal.fire('Acceso denegado', `Hola ${ this.authService.user.name } no tienes acceso a este recurso!`, 'warning');
          
                this.router.navigate(['/login']);

                this.authService.logout();
              }
          
              return throwError(e);
        })
    );
  }
}
