import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  globalURL = environment.devPath;

  constructor(private http: HttpClient) { }

  /**
   * 
   * @param regValue (Post method for Register)
   */
  postRegister(regValue) {
    return this.http.post(this.globalURL + '/register', regValue);
  }
  /**
   * 
   * @param loginValue (post method for login)
   */
  postLogin(loginValue) {
    return this.http.post(this.globalURL + '/login', loginValue);
  }
  /**
   * 
   * @param bookValue (post method for addBook)
   */
  postAddBook(bookValue) {
    return this.http.post(this.globalURL + '/books/add', bookValue);
  }

  /**
   * get method for Borrow list
   */
  getBorrowList() {
    return this.http.get(this.globalURL + '/books/borrow');
  }
}
