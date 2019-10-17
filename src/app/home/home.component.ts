import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  userId;
  firstName;
  lastName;
  borrowedBookDetails = [];

  constructor(private service: CommonService, private http: HttpClient) { }

  ngOnInit() {
    if (localStorage.getItem('UserDetails') != null) {
      const localUser = localStorage.getItem('UserDetails');
      this.userId = JSON.parse(localUser).userId;
      this.firstName = JSON.parse(localUser).firstName;
      this.lastName = JSON.parse(localUser).lastName;
    }
    this.http.get('http://15.206.67.198:8082/bookmanagmentapp/books/' + this.userId).subscribe(res => {
      let r: any = res;
      this.borrowedBookDetails = r.borrowedBookDetails;
      console.log(res);
    })
  }

}
