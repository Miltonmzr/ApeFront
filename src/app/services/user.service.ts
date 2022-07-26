import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { URL_BACKEND } from '../config/config';
import { User } from '../RegisterServices/user';
import { Role } from '../RegisterServices/role';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private urlEndPoint: string = URL_BACKEND + 'api/users';

  constructor(public httpClient: HttpClient, public router: Router) { }

  public createSign(user: User) : Observable<User> {
    return this.httpClient.post(this.urlEndPoint + '/sign-up', user).pipe(
      map((response: any) => response.User as User),
      catchError(
        e => {
          if(e.status == 401) {
            return throwError(e);
          }

          if(e.error.Error) {
            console.error(e.error.Error);
          }

          return throwError(e);
        })
    );
  }

  public getUserByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>(`${ this.urlEndPoint }/email/${ email }`).pipe(
      catchError(
        e => {
          if(e.status != 401 && e.error.Error) {
            this.router.navigate(['/login']);

            console.error(e.error.Error);
          }

          return throwError(e);
        })
    );
  }

  public recoverAccount(user: User) : Observable<User> {
    return this.httpClient.post(this.urlEndPoint + '/recoverAccount', user).pipe(
      map((response: any) => response.Cliente as User),
      catchError(
        e => {
          if(e.status == 401) {
            return throwError(e);
          }

          if(e.error.Error) {
            console.error(e.error.Error);
          }

          return throwError(e);
        })
    );
  }

  public getRoles(): Observable<Role[]> {
    return this.httpClient.get<Role[]>(this.urlEndPoint + '/roles');
  }


}
