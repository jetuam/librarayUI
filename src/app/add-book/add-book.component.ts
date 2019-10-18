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

export interface Category {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
  providers: [MessageService]
})
export class AddBookComponent implements OnInit {

  addBookForm: FormGroup;
  userid;
  msg;

  categorylists: Category[] = [
    { value: 'biographies', viewValue: 'Biographies' },
    { value: 'science', viewValue: 'Science' },
    { value: 'recipes', viewValue: 'Recipes' },
    { value: 'religion', viewValue: 'Religion' },
    { value: 'art', viewValue: 'Art' },
    { value: 'detective', viewValue: 'Detective' },
    { value: 'music', viewValue: 'Music' },
    { value: 'medicine', viewValue: 'Medicine' },
    { value: 'plays', viewValue: 'Plays' },
    { value: 'history', viewValue: 'History' },
    { value: 'children', viewValue: 'Children' },
  ];

  constructor(private service: CommonService, private messageService: MessageService) { }

  ngOnInit() {
    this.addBookForm = new FormGroup({
      bookName: new FormControl('', [Validators.required]),
      bookAuthor: new FormControl('', [Validators.required]),
      description: new FormControl('', [Validators.required]),
      bookPublisher: new FormControl('', [Validators.required]),
      bookCategory: new FormControl('', [Validators.required]),
    });

    if (localStorage.getItem('UserDetails') != null) {
      const localUser = localStorage.getItem('UserDetails');
      this.userid = JSON.parse(localUser).userId;
    }
  }

  /**
   * It used to check wheater the form is fields are empty 
   * @returns true or false
   */
  public hasError = (controlName: string, errorName: string) => {
    return this.addBookForm.controls[controlName].hasError(errorName);
  }

  /**
   * onSumbit is used to add books
   * @param {object} value 
   */
  onSubmit(value: object) {
    value['bookStatus'] = 'AVAILABLE';
    this.service.postAddBook(value).subscribe(res => {
      this.messageService.add({ severity: 'success', summary: 'Success', detail: res['message'] });
    }, (err => {
      if (err.error.statusCode == 302) {
        this.messageService.add({ severity: 'warn', summary: ' ', detail: err.error.message });
      }
      else {
        this.messageService.add({ severity: 'error', summary: ' ', detail: 'Please check the API connection' });
      }
    }));
    this.addBookForm.reset();
  }

}
