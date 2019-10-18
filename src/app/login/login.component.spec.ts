import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoginComponent } from './login.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

import { MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent, NavbarComponent],
      imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule,
        MatDialogModule, MatSelectModule, RouterTestingModule, HttpClientModule, BrowserAnimationsModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('from should be invaild', async(() => {
    component.userform.controls['emailId'].setValue('');
    component.userform.controls['password'].setValue('');
    expect(component.userform.valid).toBeFalsy();
  }));

  it('from should be vaild', async(() => {
    component.userform.controls['emailId'].setValue('test1@hcl.com');
    component.userform.controls['password'].setValue('test123');
    expect(component.userform.valid).toBeTruthy();
  }));
});
