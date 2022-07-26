import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(public authService: AuthService, public router: Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      if(this.authService.isAuthenticated()) {
        if(this.isExpiredToken()) {
          this.authService.logout();

          return false;
        }

        return true;
      }

      this.router.navigate(['/login']);

    return false;
  }

  public isExpiredToken(): boolean {
    let token = this.authService.token;
    let payload = this.authService.getTokenData(token);
    let now = new Date().getTime() / 1000;

    if(payload.exp < now) {
      return true;
    }

    return false;
  }
  
}
