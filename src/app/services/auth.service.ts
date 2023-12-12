import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isAuthenticated = false;

  constructor(private http: HttpClient, private apiService: ApiService) { }

  url: String = this.apiService.url;

  signUp(email: String, password: String, username: String): Observable<any> {
    const loginData = { email, password, username };
    return this.http.post<any>(`${this.url}/auth/signup/`, loginData, { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
  }

  login(email: String, password: String): Observable<any> {
    const loginData = { email, password };
    return this.http.post<any>(`${this.url}/auth/login/`, loginData);
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('user');
  }
}
