import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Store } from '@ngrx/store';
import { AsyncPipe, CommonModule } from '@angular/common';
import { register } from '../store/auth.actions';
import { Observable } from 'rxjs';
import { RegisterRequest } from '../models/auth.model'; 
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, RouterLink, AsyncPipe],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private masterService = inject(MasterService); 
  private fb = inject(FormBuilder);
  private store = inject(Store<{ auth: { isLoading: boolean, error: string } }>);

  isLoading$ = this.store.select(state => state.auth.isLoading);
  error$ = this.store.select(state => state.auth.error);

  roles$ = this.masterService.getRoles();
  departments$ = this.masterService.getDepartments();


  regForm: FormGroup = this.fb.group({
    fullName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', [Validators.required, Validators.minLength(6)]],
    roleId: [null, Validators.required],       
    departmentId: [null, Validators.required]  
  });

  isInvalid(field: string): boolean {
    const control = this.regForm.get(field);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  onSubmit() {
    debugger
    if (this.regForm.valid) {
      const requestData = this.regForm.value as RegisterRequest;

      this.store.dispatch(register({ request: requestData }));
    } else {
      this.regForm.markAllAsTouched();
    }
  }
}