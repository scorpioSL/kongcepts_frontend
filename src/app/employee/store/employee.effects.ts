import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap } from "rxjs/operators";
import { EmployeeService } from "../../shared/services/employee.service";
import { Employee } from "../../store/models/employee.model";
import { query, query_failure, query_success } from "./employee.actions";

@Injectable()
export class EmployeeEffects {
    constructor(
        private actions$: Actions,
        private employeeService: EmployeeService,
    ) {
        // do nothing
    }

    public query$ = createEffect(
        () => {
            return this.actions$.pipe(ofType(query), mergeMap((action) => {
                return this.employeeService.query(action.model)
                    .pipe(
                        map((data: Array<Employee>) => {
                            return query_success({ employees: data });
                        }),
                        catchError((error) => {
                            return of(query_failure(error));
                        })
                    );
            }));
        }
    );
}