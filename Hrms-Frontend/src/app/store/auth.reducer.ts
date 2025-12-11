import { createReducer, on } from '@ngrx/store';
import { register, registerSuccess, registerFailure } from './auth.actions';

export interface AuthState {
  isLoading: boolean;
  error: string | null;
}

export const initialState: AuthState = {
  isLoading: false,
  error: null
};

export const authReducer = createReducer(
  initialState,
  on(register, (state) => ({ ...state, isLoading: true, error: null })),
  on(registerSuccess, (state) => ({ ...state, isLoading: false })),
  on(registerFailure, (state, { error }) => ({ ...state, isLoading: false, error }))
);