import { createReducer, on } from '@ngrx/store';
import { login, login_failure, login_success, logout, who_am_i_failure, who_am_i_success } from './auth.actions';
import { initialState } from './auth.state';

const _authReducer = createReducer(initialState
    ,
    on(login, (state, action) => {
        return {
            ...state,
            loading: true,
            error: null,
        };
    }),
    on(login_success, (state, action) => {
        return {
            ...state,
            jwt: action.jwt,
        };
    }),
    on(login_failure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
        };
    }),
    on(who_am_i_success, (state, action) => {
        return {
            ...state,
            user: action.employee,
            jwt: action.jwt,
            loading: false,
        };
    }),
    on(who_am_i_failure, (state, action) => {
        return {
            ...state,
            user: null,
            loading: false,
        };
    }),
    on(logout, (state, action) => {
        return {
            ...state,
            user: null,
            loading: false,
        };
    }),
);

export function AuthReducer(state, action) {
    return _authReducer(state, action);
}
