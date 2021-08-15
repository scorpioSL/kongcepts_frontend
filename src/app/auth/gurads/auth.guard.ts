import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AppState } from '../../store/models/app-state.model';
import { Employee } from '../../store/models/employee.model';
import { getUser } from '../store/auth.selector';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private store: Store<AppState>) { }

  public canActivate(): Observable<boolean> {
    return this.store.select(getUser).pipe(
      map((user: Employee) => {
        return user === null;
      }),
      tap((auth: boolean) => {
        if (!auth) this.router.navigate(['/employee']);
      }),
    );
  }

}
