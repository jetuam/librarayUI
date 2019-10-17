import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

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
  globalURL = environment.devPath;

  constructor(private service: CommonService, private http: HttpClient) { }

  ngOnInit() {
    if (localStorage.getItem('UserDetails') != null) {
      const localUser = localStorage.getItem('UserDetails');
      this.userId = JSON.parse(localUser).userId;
      this.firstName = JSON.parse(localUser).firstName;
      this.lastName = JSON.parse(localUser).lastName;
    }
    this.http.get(this.globalURL + '/books/' + this.userId).subscribe(res => {
      let book: any = res;
      this.borrowedBookDetails = book.borrowedBookDetails;
    })
  }

}
