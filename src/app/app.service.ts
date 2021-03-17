import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';
import {FormInputType} from './app.types';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  public currentUser: Observable<any> = new Observable<any>();

  constructor(private httpClient: HttpClient) {}

  registerUser(formData: FormInputType) {
    return this.httpClient.post<any>('/api/register', formData, {
      headers: new HttpHeaders({
        'Content-Type': 'application/json; charset=utf-8'
      })
    });
  }
}
