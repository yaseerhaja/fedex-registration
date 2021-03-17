import {HttpClientModule} from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';

import { AppService } from './app.service';

describe('AppService', () => {
  let service: AppService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [  ],
      imports: [
        BrowserModule,
        HttpClientModule
      ],
      providers: [AppService]
    });
    service = TestBed.inject(AppService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
