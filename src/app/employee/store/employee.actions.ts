import { createAction, props } from '@ngrx/store';
import { SharedQueryModel } from '../../shared/models/shared-query.model';
import { Employee } from '../../store/models/employee.model';

export const QUERY = '[EMPLOYEE] query';
export const QUERY_SUCCESS = '[EMPLOYEE] query success';
export const QUERY_FAILURE = '[EMPLOYEE] query failure';

export const query = createAction(QUERY, props<{ model: SharedQueryModel }>());
export const query_success = createAction(QUERY_SUCCESS, props<{ employees: Array<Employee> }>());
export const query_failure = createAction(QUERY_FAILURE, props<{ error: any }>());
