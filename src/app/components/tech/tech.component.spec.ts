import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { TechComponent } from './tech.component';

describe('TechComponent', () => {
  let component: TechComponent;
  let fixture: ComponentFixture<TechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechComponent ],
      imports: [
        BrowserModule,
        RouterModule
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
