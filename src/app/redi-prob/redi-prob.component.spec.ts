import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RediProbComponent } from './redi-prob.component';

describe('RediProbComponent', () => {
  let component: RediProbComponent;
  let fixture: ComponentFixture<RediProbComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RediProbComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RediProbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
