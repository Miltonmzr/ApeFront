import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './angular-components/angular-components.module';


//loginMaterial
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { LoginWorksComponent } from './login-works/login-works.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { RegVaccineDiseaseComponent } from './reg-vaccine-disease/reg-vaccine-disease.component';
import { RediProbComponent } from './redi-prob/redi-prob.component';

@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    LoginWorksComponent,
    LoginComponent,
    RegisterComponent,
    RegVaccineDiseaseComponent,
    RediProbComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
