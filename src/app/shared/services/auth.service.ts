import { HttpClient, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Employee } from '../../store/models/employee.model';
import { LoginModel } from '../models/login.model';
import { SharedQueryModel } from '../models/shared-query.model';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService extends BaseService {
  readonly url: string = `${environment.base_endpoint}/auth/`;
  constructor(private http: HttpClient, injector: Injector) {
    super(injector);
  }

  public login(loginModel: LoginModel): Observable<{ jwt: string }> {
    return this.http.post<{ jwt: string }>(`${this.url}login`, loginModel);
  }

  public whoAmI(): Observable<any> {
    return this.http.get<Employee>(`${this.url}whoami`, this.headers());
  }
}
