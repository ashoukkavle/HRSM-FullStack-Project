import { HttpClient } from '@angular/common/http';
import { inject, Injectable, PLATFORM_ID, signal } from '@angular/core';
import { Router } from '@angular/router';
import { AuthResponse, LoginRequest, RegisterRequest } from '../models/auth.model';
import { isPlatformBrowser } from '@angular/common';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http=inject(HttpClient);
  private router=inject(Router);
  private platformId=inject(PLATFORM_ID);
  private apiUrl = 'https://localhost:44346/api/auth';

currentUser = signal<AuthResponse | null>(null);
isLoggedIn = signal<boolean>(false);


  constructor() { 
if(isPlatformBrowser(this.platformId)){
  // 1. LocalStorage se user uthao
    const storedUser = localStorage.getItem('user');
    
    if (storedUser) {
      // 2. Wapas Signal me set karo (Restore Session)
      const userObj = JSON.parse(storedUser);
      this.currentUser.set(userObj); 
      this.isLoggedIn.set(true);
    }
}
  }
// NgRx Effect ke liye Observable return karega
  register(data: RegisterRequest): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, data);
  }
  // Login component directly subscribe karega
  login(data: LoginRequest): Observable<AuthResponse> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, data).pipe(
      tap(response => {
        if (isPlatformBrowser(this.platformId)) {
          localStorage.setItem('token', response.token);
          localStorage.setItem('user', JSON.stringify(response));
        }
        this.currentUser.set(response);
        this.isLoggedIn.set(true);
        this.router.navigate(['/dashboard']);
      })
    );
  }
  logout() {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.removeItem('token');
      localStorage.removeItem('user');
    }
    this.currentUser.set(null);
    this.isLoggedIn.set(false);
    this.router.navigate(['/login']);
  }
}
