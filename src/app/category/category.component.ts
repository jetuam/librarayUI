import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MessageService } from 'primeng/api';

import { from } from 'rxjs';

/**
 * The app-category component
 */
@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  providers: [MessageService]
})
export class CategoryComponent implements OnInit {
  category = [];
  userId
  globalURL = environment.devPath;
  endDate;
  status;
  msg;

  constructor(private service: CommonService, private http: HttpClient, private messageService: MessageService) { }

  ngOnInit() {
    /**
     * localStorage
     */
    if (localStorage.getItem('UserDetails') != null) {
      const localUser = localStorage.getItem('UserDetails');
      this.userId = JSON.parse(localUser).userId;
    }

    this.http.get(this.globalURL + '/books/users/' + this.userId).subscribe(res => {
      let categoryList: any = res;
      this.category = categoryList.books;
    });

  }

  onRequest(val) {
    val['userId'] = this.userId;
    if (val.bookStatus != 'AVAILABLE') {
      this.http.get(this.globalURL + '/books/availability/' + val.bookId).subscribe(res => {
        this.endDate = res;
        this.messageService.add({ severity: 'warn', summary: '', detail: this.endDate.message });
      })
    }
    else {
      this.http.post(this.globalURL + '/books/borrow/', val).subscribe(res => {
        this.msg = res;
        this.messageService.add({ severity: 'success', summary: 'Success', detail: this.msg.message });
      });
    }
  }

}
