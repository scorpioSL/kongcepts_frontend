import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Employee } from '../../store/models/employee.model';
import { LoginModel } from '../models/login.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  readonly url: string = `${environment.base_endpoint}/auth/`;
  constructor(private http: HttpClient) {
  }

  public login(loginModel: LoginModel): Observable<{ jwt: string }> {
    return this.http.post<{ jwt: string }>(`${this.url}login`, loginModel);
  }

  public whoAmI(): Observable<any> {
    return this.http.get<Employee>(`${this.url}whoami`);
  }
}
