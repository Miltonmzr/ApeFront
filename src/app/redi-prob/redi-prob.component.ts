import { AuthService } from './../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../RegisterServices/user';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-redi-prob',
  templateUrl: './redi-prob.component.html',
  styleUrls: ['./redi-prob.component.scss']
})
export class RediProbComponent implements OnInit {

  constructor(public authService: AuthService, private router: Router, public userService : UserService) { }

  public currentUser: User = new User();
  public id: number = 0;

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
  }

  redicToProfile():void{
    this.router.navigate(['/loginworks']);
  }

}
