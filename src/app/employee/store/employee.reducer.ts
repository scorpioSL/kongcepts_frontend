import { createReducer, on } from "@ngrx/store";
import { query, query_failure, query_success } from "./employee.actions";
import { initialState } from "./employee.state";

const _postReducer = createReducer(initialState,
    on(query, (state, action) => {
        return {
            ...state,
            loading: true,
            error: null,
        }
    }),
    on(query_success, (state, action) => {
        return {
            ...state,
            loading: false,
            error: null,
            employees: action.employees,
        }
    }),
    on(query_failure, (state, action) => {
        return {
            ...state,
            loading: false,
            error: action.error,
        }
    })
);

export function employeeReducer(state, action) {
    return _postReducer(state, action);
}
