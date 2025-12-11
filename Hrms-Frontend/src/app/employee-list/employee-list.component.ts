import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MasterService } from '../services/master.service';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-employee-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent {
  private employeeService = inject(EmployeeService);

  users$: Observable<User[]> = this.employeeService.getEmployees  ();
}
