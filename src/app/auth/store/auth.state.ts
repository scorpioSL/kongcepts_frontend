import { Employee } from "../../store/models/employee.model";

export interface AuthState {
    jwt: string;
    user: Employee | null;
    loading: boolean;
    error: any;
}

export const initialState: AuthState = {
    jwt: null,
    user: null,
    loading: false,
    error: null,
};