import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegVaccineDiseaseComponent } from './reg-vaccine-disease.component';

describe('RegVaccineDiseaseComponent', () => {
  let component: RegVaccineDiseaseComponent;
  let fixture: ComponentFixture<RegVaccineDiseaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegVaccineDiseaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegVaccineDiseaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
