import { map } from 'rxjs/operators';
import { URL_BACKEND } from './../config/config';
import { HttpClient, HttpRequest } from '@angular/common/http';
import { Disease } from '../RegisterServices/CovidClasses/disease';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../RegisterServices/user';
import { AuthService } from '../services/auth.service';


import Swal from 'sweetalert2';
import { UserService } from '../services/user.service';
import { RegisterServiceService } from './register-service.service';
import { VaccineItem } from '../RegisterServices/CovidClasses/vaccineItem';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public user: User;
  public isLogged: boolean = false;
  public vaccineItems : VaccineItem[] = [];
  public dose : string = '2';
  selectedValue: string;
  totalDose: string;
  @Input() emailUser: string;

  constructor(public RegisterServiceService : RegisterServiceService ,public router: Router,public http: HttpClient, public authService: AuthService, public userService: UserService) { this.user = new User(); }

  ngOnInit(): void {
    this.auth();
    // this.loadVaccine();
    this.user.email = this.emailUser;
  }

  public auth(): void {
    if(this.authService.isAuthenticated()) {
      Swal.fire('Login', `Hola ${ this.authService.user.name } ya estás autenticado!`, 'info');

      this.router.navigate(['/login']);

    }
  }

  public create(): void {
    this.userService.createSign(this.user).subscribe(
      user => {
        this.router.navigate(['/r2part']);
        Swal.fire(`Bienvenido ${ this.user.name }`, `Usuario  creado con éxito! ahora favor de contestar los siguientes campos.`, 'success');
      },
      e => {
        if(e.status == 500) {
          this.router.navigate(['/login']);
          Swal.fire('Error de sign up', `Correo ${ this.user.email } ya ha sido registrado!`, 'warning');
        }
      });
  }

  // public loadVaccine(): void{
  //   this.RegisterServiceService.getVaccines().subscribe(
  //     resp1 => {
  //       this.vaccineItems = resp1
  //     }
  //     );
  // }


  public vaccineDose(): void{
    if(this.selectedValue == 'cansino'){
      this.dose = '1';
    }
  }

  public isCansino(): boolean{
    if(this.selectedValue == "Cansino"){
      return true;
    }else{
      return false;
    }
  }

  public isOther(): boolean{
    if(this.selectedValue != "Cansino" && this.selectedValue != 'Ninguna' && this.selectedValue != null){
      return true;
    }else{
      return false;
    }
  }

}
