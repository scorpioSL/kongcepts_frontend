import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { getUser } from '../../auth/store/auth.selector';
import { AppState } from '../../store/models/app-state.model';
import { Employee } from '../../store/models/employee.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeGuard implements CanActivate {
  constructor(private router: Router, private store: Store<AppState>) { }

  public canActivate(): Observable<boolean> {
    return this.store.select(getUser).pipe(
      map((user: Employee) => {
        return user !== null;
      }),
      tap((auth: boolean) => {
        if (!auth) this.router.navigate(['/auth']);
      }),
    );
  }

}
