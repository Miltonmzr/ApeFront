import { UserService } from './../services/user.service';
import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../RegisterServices/user';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-login-works',
  templateUrl: './login-works.component.html',
  styleUrls: ['./login-works.component.scss']
})
export class LoginWorksComponent implements OnInit {

  public currentUser: User = new User();
  public isLogged: boolean = false;
  public id: number = 0;
  public roleUser: string;
  public qrCode: string;

  constructor(public authService: AuthService, private router: Router, public userService : UserService) {
   }



  ngOnInit(): void {
    this.currentUser = this.authService.user;

    this.userService.getUserByEmail(this.currentUser.email).pipe(
      tap(response=> {
        response as User;
      })
    ).subscribe( userm => {
      this.currentUser = userm;
      this.id = userm.id as number;

      console.log(this.id);
    });

    this.roleUser = this.authService.user.roles[0];
    this.qrCode = (`https://udg-covid-project.herokuapp.com/api/qr-codes/img/email/${this.currentUser.email}`);

  }

  redirectToComponent() : void{
    this.router.navigate(['/redirectlogin']);
  }
  redirectToComponent2() : void{
    this.router.navigate(['/r2part']);
  }

  logout(): void {
    console.log(this.authService.token);
    console.log(this.authService.user);
    this.authService.logout();
    this.router.navigate(['/login']).then(_ => console.log('Logout'));
  }

}
