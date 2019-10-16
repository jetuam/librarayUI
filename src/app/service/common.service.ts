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
    //  return this.http.post('http://15.206.67.198:8082/bookmanagmentapp/register', regValue);
    return this.http.post(this.globalURL + '/register', regValue);
  }

  postLogin(loginValue) {
    return this.http.post('http://10.117.189.127:8082/bookmanagmentapp/login', loginValue);
    // return this.http.post(this.globalURL + '/login', loginValue);
  }

  postAddBook(bookValue) {
    return this.http.post('http://10.117.189.22:8082/bookmanagmentapp/books/add', bookValue);
    // return this.http.post(this.globalURL + '/books/add', bookValue);
  }
}
