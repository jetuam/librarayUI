import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, NgForm, FormGroupDirective } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { CommonService } from '../service/common.service';
import { MessageService } from 'primeng/api';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [MessageService]
})

export class RegisterComponent implements OnInit {
  hide = true;
  registerform: FormGroup;
  matcher = new MyErrorStateMatcher();

  constructor(private service: CommonService, private messageService: MessageService) { }

  ngOnInit() {
    this.registerform = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      phoneNo: new FormControl('', [Validators.required]),
      emailId: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', [Validators.required])
    });
  }
  public hasError = (controlName: string, errorName: string) => {
    return this.registerform.controls[controlName].hasError(errorName);
  }
  onSubmit(value) {
    console.log(value);
    this.service.postRegister(value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: 'Register Successfully ' });
    }, (err => {
      this.messageService.add({ severity: 'error', summary: 'Error ', detail: 'Register Already Exists' });
    }))
    this.registerform.reset();
  }
}
