import { Component, OnInit } from '@angular/core';
import { CommonService } from '../service/common.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})
export class CategoryComponent implements OnInit {
  category;

  constructor(private service: CommonService) { }

  ngOnInit() {
    this.service.getCategoryList().subscribe(res => this.category = res);
  }

}
