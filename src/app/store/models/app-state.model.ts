import { AuthReducer } from '../../auth/store/auth.reducer';
import { employeeReducer } from '../../employee/store/employee.reducer';
import { EmployeeState } from '../../employee/store/employee.state';

export interface AppState {
    employees: EmployeeState;
}


export const appReducer = {
    employees: employeeReducer,
    auth: AuthReducer,
};
