import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  userid;
  showlogout = false;
  showsignin = true;

  constructor(private router: Router) { }

  ngOnInit() {

    /*header sticky */
    window.onscroll = function () { myFunction() };

    var header = document.getElementById("myHeader");
    var sticky = header.offsetTop;

    function myFunction() {
      if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    }
    if (localStorage.getItem("UserDetails") != null) {
      let localUser = localStorage.getItem("UserDetails");
      this.userid = JSON.parse(localUser).userId;
      this.showlogout = true;
      this.showsignin = false;
    }
    else {
      this.showlogout = false;
      this.showsignin = true;
    }
  }

  logOut() {
    localStorage.removeItem("UserDetails");
    this.router.navigateByUrl("/login");
  }

  /*responsive mennu start*/
  navMenu() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }
  /*responsive mennu end*/

}
