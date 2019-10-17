import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonService } from '../service/common.service';
import { Router } from '@angular/router';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  error = false;
  hide = true;
  userform: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private router: Router, private service: CommonService) {
  }

  ngOnInit() {
    this.userform = new FormGroup({
      emailId: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.userform.controls[controlName].hasError(errorName);
  }
  onSubmit() {
    this.service.postLogin(this.userform.value).subscribe(res => {
      localStorage.setItem('UserDetails', JSON.stringify(res));
      this.router.navigate(['/home']);
    }, (err => {
      this.error = true;
    }));
  }

}
