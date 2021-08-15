import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { of } from "rxjs";
import { catchError, map, mergeMap, tap } from "rxjs/operators";
import { environment } from "../../../environments/environment";
import { AuthService } from "../../shared/services/auth.service";
import { Employee } from "../../store/models/employee.model";
import { login, login_failure, login_success, logout, who_am_i, who_am_i_failure, who_am_i_success } from "./auth.actions";

@Injectable()
export class AuthEffects {
    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private router: Router,
    ) {
        // do nothing
    }

    public login$ = createEffect(() => {
        return this.actions$.pipe(ofType(login), mergeMap(action => {
            return this.authService.login(
                action
            ).pipe(
                map((data: { jwt: string }) => {
                    localStorage.setItem(environment.token_key, data.jwt);
                    return login_success(data);
                }),
                catchError((error: any) => {
                    return of(login_failure(error));
                }),
            )
        }));
    });

    public loginSuccess$ = createEffect(() => {
        return this.actions$.pipe(ofType(login_success), mergeMap(action => {
            return this.authService.whoAmI().pipe(
                map((data: Employee) => {
                    const jwt: string = localStorage.getItem(environment.token_key);
                    return who_am_i_success({ employee: data, jwt: jwt });
                }),
                catchError((error: any) => {
                    localStorage.removeItem(environment.token_key);
                    return of(who_am_i_failure());
                })
            )
        }))
    });

    public whoAmI$ = createEffect(() => {
        return this.actions$.pipe(ofType(who_am_i), mergeMap(action => {
            return this.authService.whoAmI().pipe(
                map((data: Employee) => {
                    const jwt: string = localStorage.getItem(environment.token_key);
                    return who_am_i_success({ employee: data, jwt: jwt });
                }),
                catchError((error: any) => {
                    localStorage.removeItem(environment.token_key);
                    return of(who_am_i_failure());
                })
            )
        }))
    });

    public whoAmISuccessRedirect$ = createEffect(() => {
        return this.actions$.pipe(ofType(who_am_i_success), tap((action) => {
            this.router.navigate(['/employee']);
        }))
    }, { dispatch: false });

    public whoAmIFailureRedirect$ = createEffect(() => {
        return this.actions$.pipe(ofType(who_am_i_failure), tap((action) => {
            this.router.navigate(['/auth']);
        }));
    }, { dispatch: false });

    public logout$ = createEffect(() => {
        return this.actions$.pipe(ofType(logout), tap((action) => {
            localStorage.removeItem(environment.token_key);
            this.router.navigate(['/auth']);
        }));
    }, { dispatch: false });
}