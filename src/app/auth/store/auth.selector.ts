

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AuthState } from './auth.state';

export const AUTH_STATE_NAME = 'auth';

const getAuthState = createFeatureSelector<AuthState>(AUTH_STATE_NAME);

export const getUser = createSelector(getAuthState, state => {
    return state.user;
});

export const getLoading = createSelector(getAuthState, state => {
    return state.loading;
});

export const getJwt = createSelector(getAuthState, state => {
    return state.jwt;
});

export const getError = createSelector(getAuthState, state => {
    return state.error;
});
