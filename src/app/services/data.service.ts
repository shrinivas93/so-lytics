import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SoResponse } from '../models/so-response.model';
import { Observable } from 'rxjs';

@Injectable()
export class DataService {
  constructor(private http: HttpClient) {}

  getUserData(userId: string): Observable<any> {
    return this.http.get(
      `https://api.stackexchange.com/2.2/users/${userId}?site=stackoverflow`
    );
  }
}
