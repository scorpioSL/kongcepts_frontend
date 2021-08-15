import { Employee } from '../../store/models/employee.model';

export interface EmployeeState {
    employees: Array<Employee>;
    loading: boolean;
    error: any;
}

export const initialState: EmployeeState = {
    employees: [],
    loading: false,
    error: null,
};
