import { createAction, props } from '@ngrx/store';
import { RegisterRequest } from '../models/auth.model';

export const register = createAction('[Auth] Register', props<{ request: RegisterRequest }>());
export const registerSuccess = createAction('[Auth] Register Success');
export const registerFailure = createAction('[Auth] Register Failure', props<{ error: string }>());