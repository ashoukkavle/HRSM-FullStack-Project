import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { AuthService } from '../services/auth.service';
import { register, registerSuccess, registerFailure } from './auth.actions';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import { of } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class AuthEffects {
  private actions$ = inject(Actions);
  private authService = inject(AuthService);
  private router = inject(Router);

  register$ = createEffect(() =>
    this.actions$.pipe(
      ofType(register),
      mergeMap((action) =>
        this.authService.register(action.request).pipe(
          map(() => registerSuccess()),
          catchError((error) => of(registerFailure({ error: error.message || 'Registration Failed' })))
        )
      )
    )
  );

  registerRedirect$ = createEffect(() =>
    this.actions$.pipe(
      ofType(registerSuccess),
      tap(() => {
        alert('Registration Successful! Please Login.');
        this.router.navigate(['/login']);
      })
    ), { dispatch: false }
  );
}