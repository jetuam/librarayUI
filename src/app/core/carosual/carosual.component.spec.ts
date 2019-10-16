import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarosualComponent } from './carosual.component';

describe('CarosualComponent', () => {
  let component: CarosualComponent;
  let fixture: ComponentFixture<CarosualComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarosualComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarosualComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
