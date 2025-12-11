import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Role,Department } from '../models/auth.model';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
@Injectable({
  providedIn: 'root'
})
export class MasterService {
  private http = inject(HttpClient);
  private apiUrl = 'https://localhost:44346/api/master'; 

  getRoles(): Observable<Role[]> {
    debugger
  return this.http.get<Role[]>(`${this.apiUrl}/roles`);
}

getDepartments(): Observable<Department[]> {
  debugger
  return this.http.get<Department[]>(`${this.apiUrl}/department`);
}

}
