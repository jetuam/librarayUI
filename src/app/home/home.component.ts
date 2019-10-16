import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  borrowedBookDetails;

  constructor(private service: CommonService) { }

  ngOnInit() {
    if (localStorage.getItem("UserDetails") != null) {
      let localUser = localStorage.getItem("UserDetails");
      this.borrowedBookDetails = JSON.parse(localUser).borrowedBookDetails;
      console.log(this.borrowedBookDetails)
    }
  }

}
