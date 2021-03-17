import {HttpClientModule} from '@angular/common/http';
import { TestBed, async } from '@angular/core/testing';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {ErrorComponent} from './components/error/error.component';
import {HeaderComponent} from './components/header/header.component';
import {HomeComponent} from './components/home/home.component';
import {ProjectComponent} from './components/project/project.component';
import {TechComponent} from './components/tech/tech.component';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechComponent, ErrorComponent, HeaderComponent, HomeComponent, ProjectComponent, AppComponent ],
      imports: [
        BrowserModule,
        MatCardModule,
        MatButtonModule,
        HttpClientModule,
        MatToolbarModule,
        MatIconModule,
        AppRoutingModule
      ]
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have as title 'fedex-registration'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('fedex-registration');
  });
});
