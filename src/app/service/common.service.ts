import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  globalURL = environment.devPath;

  constructor(private http: HttpClient) { }

  postRegister(regValue) {
    return this.http.post(this.globalURL + '/register', regValue);
  }

  postLogin(loginValue) {
    return this.http.post(this.globalURL + '/login', loginValue);
  }

  postAddBook(bookValue) {
    return this.http.post(this.globalURL + '/books/add', bookValue);
  }

  getCategoryList() {
    // return this.http.get(this.globalURL + '/categorys');
    return this.http.get('http://localhost:3000/category');
  }

  getBorrowList() {
    return this.http.get(this.globalURL + '/books/borrow');
  }
}
