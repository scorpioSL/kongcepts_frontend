import { HttpHeaders } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { NbToastrService } from '@nebular/theme';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export abstract class BaseService {

  static toastrService: NbToastrService;
  static router: Router;

  constructor(injector: Injector) {
    BaseService.toastrService = injector.get(NbToastrService);
    BaseService.router = injector.get(Router);
  }

  protected headers(): any {
    const auth = localStorage.getItem(environment.token_key);
    if (auth) {
      return {
        headers: new HttpHeaders({
          Authorization: 'Bearer ' + auth,
          'Content-Type': 'application/json',
        }),
        params: {},
      };
    }
  }

  public catchError(error: any) {
    if (error.status === 404) {
      BaseService.router.navigate(['/not-found']);
      BaseService.toastrService.danger('The page that you are looking for is not found!', 'Not found!');
    } else {
      BaseService.toastrService.danger('Something went wrong!', 'Network error!');
    }
  }
}
