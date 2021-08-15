import { createAction, props } from "@ngrx/store";
import { Employee } from "../../store/models/employee.model";

export const LOGIN = '[AUTH] login';
export const LOGIN_SUCCESS = '[AUTH] login success';
export const LOGIN_FAILURE = '[AUTH] login failure';
export const WHO_AM_I = '[AUTH] who am i';
export const WHO_AM_I_SUCCESS = '[AUTH] who am i success';
export const WHO_AM_I_FAILURE = '[AUTH] who am i failure';
export const LOGOUT = '[AUTH] logout';

export const login = createAction(LOGIN, props<{ email: string; password: string }>());
export const login_success = createAction(LOGIN_SUCCESS, props<{ jwt: string }>());
export const login_failure = createAction(LOGIN_FAILURE, props<{ error: any }>());
export const who_am_i = createAction(WHO_AM_I, () => null);
export const who_am_i_success = createAction(WHO_AM_I_SUCCESS, props<{ employee: Employee, jwt: string }>());
export const who_am_i_failure = createAction(WHO_AM_I_FAILURE, () => null);
export const logout = createAction(LOGOUT, () => null);