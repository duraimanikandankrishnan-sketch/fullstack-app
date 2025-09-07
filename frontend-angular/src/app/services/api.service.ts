// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({ providedIn: 'root' })
export class ApiService {
  constructor(private http: HttpClient) {}
  getData(): Observable<any> {
    return this.http.get('http://myapp.local/api/data');
  }
}
