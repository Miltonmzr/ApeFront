import { Observable } from 'rxjs';
import { VaccineItem } from './../RegisterServices/CovidClasses/vaccineItem';
import { HttpClient } from '@angular/common/http';
import { URL_BACKEND } from './../config/config';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterServiceService {

  constructor(private http: HttpClient) {}

  public getVaccines(): Promise<VaccineItem[]>{
    return this.http.get<VaccineItem[]>(URL_BACKEND + "api/vaccine").toPromise();
  }
}
