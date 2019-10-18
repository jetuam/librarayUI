import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoryComponent } from './category.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { CarosualComponent } from '../core/carosual/carosual.component';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { ToastModule } from 'primeng/toast';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { from } from 'rxjs';

describe('CategoryComponent', () => {
  let component: CategoryComponent;
  let fixture: ComponentFixture<CategoryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CategoryComponent, NavbarComponent, CarosualComponent],
      imports: [FormsModule, Ng2SearchPipeModule, RouterTestingModule, ToastModule, HttpClientModule, MatInputModule, DialogModule, MatIconModule, ButtonModule, MatButtonModule, MatDialogModule, MatSelectModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

});
