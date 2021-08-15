import { createFeatureSelector, createSelector } from '@ngrx/store';
import { EmployeeState } from './employee.state';

export const EMPLOYEE_STATE_NAME = 'employees';
const getEmployeesState = createFeatureSelector<EmployeeState>(EMPLOYEE_STATE_NAME);

export const getEmployees = createSelector(getEmployeesState, state => {
    return state.employees;
});

export const getError = createSelector(getEmployeesState, state => {
    return state.error;
});

export const getLoading = createSelector(getEmployeesState, state => {
    return state.loading;
});
