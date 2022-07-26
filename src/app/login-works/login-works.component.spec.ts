import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginWorksComponent } from './login-works.component';

describe('LoginWorksComponent', () => {
  let component: LoginWorksComponent;
  let fixture: ComponentFixture<LoginWorksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoginWorksComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginWorksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
