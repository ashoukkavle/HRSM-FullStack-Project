import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { DashboardStats } from '../models/dashboard.model';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:44346/api/dashboard'; 

  getStats() {
    return this.http.get<DashboardStats>(`${this.apiUrl}/stats`);
  }
}