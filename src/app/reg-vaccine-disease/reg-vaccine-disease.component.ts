import { VaccineItem } from './../RegisterServices/CovidClasses/vaccineItem';
import { Vaccine } from './../RegisterServices/CovidClasses/vaccine';
import { Disease } from './../RegisterServices/CovidClasses/disease';
import { FormBuilder, FormGroup, FormsModule } from '@angular/forms';
import { RegisterServiceService } from './../register/register-service.service';
import { Component, Input, OnInit } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';


@Component({
  selector: 'app-reg-vaccine-disease',
  templateUrl: './reg-vaccine-disease.component.html',
  styleUrls: ['./reg-vaccine-disease.component.scss']
})
export class RegVaccineDiseaseComponent implements OnInit {


  constructor(public RegisterServiceService : RegisterServiceService, private _builder: FormBuilder) {
    this.disease = new Disease();
    this.vaccine = new Vaccine();
    this.vaccineItem = new VaccineItem();
  }

  public vaccineItems : VaccineItem[] = [];
  public dose : string = '2';
  disease : Disease;
  selectedValue: string;
  totalDose: string;
  vaccine : Vaccine;
  vaccineItem : VaccineItem;





  ngOnInit(): void {
    this.loadVaccine();

    this.disease.isElder = false;
    this.disease.hasPulmonary = false;
    this.disease.hasArterialHypertension = false;
    this.disease.hasCardiac = false;
    this.disease.hasDiabetes = false;
    this.disease.hasObesity = false;
    this.disease.hasCancer = false;
    this.disease.anotherDiseases = null;
    this.vaccineItem.id = null;
    this.vaccineItem.name = null;
    this.vaccineItem.totalDose = null;

  }


  public async loadVaccine(): Promise<void>{
    this.vaccineItems = await this.RegisterServiceService.getVaccines();
    console.log(this.vaccineItems[1]);
  };


  public thisIsTheVaccine(){
    if( this.vaccineItem.name == "cansino"){
      console.log("se eligio la ptfizer we jajaj nmms que mamada");
    }
  }

  public diseaseJson(){
    return {
      "isElder": this.disease.isElder,
      "hasPulmonary": this.disease.hasPulmonary,
      "hasArterialHypertension": this.disease.hasArterialHypertension,
      "hasCardiac": this.disease.hasCardiac,
      "hasDiabetes": this.disease.hasDiabetes,
      "hasObesity": this.disease.hasObesity,
      "hasCancer": this.disease.hasCancer,
      "anotherDiseases": this.disease.anotherDiseases
    }
  }

  public vaccineItemjson(){
    return {
      vaccineItem: {
        id: this.vaccineItem.id,
        name: this.vaccineItem.name,
        totalDose: this.vaccineItem.totalDose,
    },
    doseNum: this.totalDose
    };
  }

  public vaccineDose(): void{
    if(this.vaccineItem.name == 'Cansino'){
      this.dose = '1';
    }
  }

  public isCansino(): boolean{
    if(this.vaccineItem.name == "Cansino"){
      return true;
    }else{
      return false;
    }
  }

  public isOther(): boolean{
    if(this.vaccineItem.name != "Cansino" && this.vaccineItem.name != 'Ninguna' && this.vaccineItem.name != null){
      return true;
    }else{
      return false;
    }
  }

}
