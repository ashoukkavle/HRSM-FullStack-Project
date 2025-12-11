import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';
import { DashboardService } from '../services/dashboard.service'; // 👈 Import
import { Observable } from 'rxjs';
import { DashboardStats } from '../models/dashboard.model'; // 👈 Import

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule], // CommonModule zaroori hai (AsyncPipe ke liye)
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
 obj= new Observable(Obsserver=>{
  console.log('Hello from Observable');
  console.log('Another log');
 console.log('Yet another log');
 });
 ngOnInit(){
  this.obj.subscribe((val=>
  {console.log(val)
   }));
  }
  authService = inject(AuthService);
  private dashboardService = inject(DashboardService);

  // 👇 Observable banaya (Direct HTML me use hoga)
  stats$: Observable<DashboardStats> = this.dashboardService.getStats();
}
