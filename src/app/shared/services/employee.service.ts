import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Employee } from '../../store/models/employee.model';
import { SharedQueryModel } from '../models/shared-query.model';

@Injectable({
  providedIn: 'root',
})
export class EmployeeService {
  readonly url: string = `${environment.base_endpoint}/employee/`;
  constructor(private http: HttpClient) {
  }

  public query(model?: SharedQueryModel): Observable<any> {
    return this.http.get<Array<Employee>>(`${this.url}query`);
  }
}
