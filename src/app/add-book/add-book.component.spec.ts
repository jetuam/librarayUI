import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser'

import { AddBookComponent } from './add-book.component';
import { NavbarComponent } from '../core/navbar/navbar.component';
import { RouterTestingModule } from '@angular/router/testing';

import { MatInputModule, MatIconModule, MatButtonModule, MatDialogModule, MatSelectModule } from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DebugElement } from '@angular/core';
describe('AddBookComponent', () => {
  let component: AddBookComponent;
  let fixture: ComponentFixture<AddBookComponent>;
  let de: DebugElement;
  let e1: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [AddBookComponent, NavbarComponent],
      imports: [FormsModule, ReactiveFormsModule, MatInputModule, MatIconModule, MatButtonModule,
        MatDialogModule, MatSelectModule, RouterTestingModule, BrowserAnimationsModule, ToastModule, HttpClientModule]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    de = fixture.debugElement.query(By.css('form'));
    e1 = de.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should call the onSumbit method', async(() => {
    fixture.detectChanges();
    spyOn(component, 'onSubmit');
    e1 = fixture.debugElement.query(By.css('button')).nativeElement;
    e1.click();
    expect(component.onSubmit).toHaveBeenCalledTimes(0);
  }));

});
