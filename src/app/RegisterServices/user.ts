import { Vaccine } from './CovidClasses/vaccine';
import { Disease } from './CovidClasses/disease';
import { Role } from './role';
import { Surveys } from './CovidClasses/surveys';
import { Places } from './CovidClasses/places';
import { Notices } from './CovidClasses/notices';


export class User{
  id: number;
  name: string;
  lastName: string;
  age: string;
  cellphone: string;
  email: string;
  udgCode: string;
  password: string;
  qrCode: any;
  date: string;
  isEnabled: boolean;
  role: Role;
  disease: Disease;
  vaccine: Vaccine;
  surveys: Surveys[] = [];
  roles: string[] = [];
  notices: Notices[] = [];
  places: Places[] = [];
  isriskSection: boolean;
  token: string;
}
