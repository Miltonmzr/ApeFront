import { RediProbComponent } from './redi-prob/redi-prob.component';
import { RegVaccineDiseaseComponent } from './reg-vaccine-disease/reg-vaccine-disease.component';
import { Role } from './RegisterServices/role';
import { LoginWorksComponent } from './login-works/login-works.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { AuthGuard } from './guard/auth.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes = [
  { path: '', component: LoginComponent, pathMatch: 'full' },
  { path: 'loginworks', canActivate: [ AuthGuard], component: LoginWorksComponent},
  { path: 'login', component: LoginComponent},
  { path: 'register', component: RegisterComponent},
  { path: 'redirectlogin', component: RediProbComponent},
  { path: 'r2part', component: RegVaccineDiseaseComponent },
  { path: '404', component: NotFoundComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
