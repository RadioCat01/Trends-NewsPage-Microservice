import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CheckUSerService {

  private apiUrl = 'http://localhost:8081/user';

  constructor(private http: HttpClient) {}

  checkUser(): Observable<boolean> {
    return this.http.get<boolean>(`${this.apiUrl}/checkUser`);
  }

  savePreferences(preferences: string[]): Observable<any> {
    return this.http.post(`${this.apiUrl}/save`, { preferences }, { responseType: 'text' });
  }
}
