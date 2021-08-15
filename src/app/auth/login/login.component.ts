import { ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbAuthService, NbLoginComponent } from '@nebular/auth';
import { NbToastrService } from '@nebular/theme';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { LoginModel } from '../../shared/models/login.model';
import { AppState } from '../../store/models/app-state.model';
import { login } from '../store/auth.actions';
import { getError, getLoading } from '../store/auth.selector';

@Component({
  selector: 'ngx-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent extends NbLoginComponent implements OnInit {

  public authLogin: LoginModel = new LoginModel();
  public loading$: Observable<boolean>;
  public error$: Observable<{ message: string }>;

  constructor(
    service: NbAuthService,
    cd: ChangeDetectorRef,
    router: Router,
    private toastrService: NbToastrService,
    private store: Store<AppState>,
  ) {
    super(service, {
      forms: {
        validation: {
          email: {
            required: true,
          },
          password: {
            required: true,
          },
        },
        login: {
          showMessages: true,
        },
      },
    }, cd, router);
  }

  ngOnInit(): void {
    this.loading$ = this.store.select(getLoading);
    this.error$ = this.store.select(getError);
  }

  public login() {
    this.store.dispatch(login({ ...this.authLogin }));
  }

}
