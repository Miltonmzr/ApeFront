import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../RegisterServices/user';
import { AuthService } from '../services/auth.service';

import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public user: User;
  public isLogged: boolean = false;

  constructor(public authService: AuthService, public router: Router) { this.user = new User(); }

  ngOnInit(): void {
    this.auth()
  }

  public pruebas(): void{
    this.router.navigate(['/r2part']);
  }
  public redirectToProb(): void{
    this.router.navigate(['/redirectlogin']);
  }

  public auth(): void {
    if(this.authService.isAuthenticated()) {
      Swal.fire('Login', `Hola ${ this.authService.user.email } ya estás autenticado!`, 'info');

      this.router.navigate(['/loginworks']);
    }
  }

  public login(): void {
    if(!this.isLogged) {
      if(this.user.email == null || this.user.password == null) {
        Swal.fire('Error de logeo', 'Correo o password vacíos!', 'error');

        return;
      }
    }

    this.authService.login(this.user).subscribe(
      response => {
        this.authService.saveUser(response.access_token);
        this.authService.saveToken(response.access_token);

        let user = this.authService.user;

        this.router.navigate(['/loginworks']);

        Swal.fire('Login', `Hola ${ user.name }, has iniciado sesión con éxito!`, 'success');
      },
      err => {
        if(this.isLogged) {
          Swal.fire('Error de logeo', 'Registrate primero', 'error');
        } else {
          if(err.status == 400) {
            Swal.fire('Error de logeo', 'Tu cuenta no ha sido activada favor de revisar tu correo!!', 'error');

            this.router.navigate(['/login']);

            this.authService.logout();
          }

          if(err.status == 401) {
            Swal.fire('Error logeo', 'Email o password incorrectos!', 'error');
          }
        }
    });
  }

}
