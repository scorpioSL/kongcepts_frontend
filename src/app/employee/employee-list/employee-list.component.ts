import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { LocalDataSource } from 'ng2-smart-table';
import { Observable, Subscription } from 'rxjs';
import { SharedQueryModel } from '../../shared/models/shared-query.model';
import { AppState } from '../../store/models/app-state.model';
import { Employee } from '../../store/models/employee.model';
import { query } from '../store/employee.actions';
import { getEmployees, getLoading } from '../store/employee.selector';

@Component({
  selector: 'ngx-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.scss'],
})
export class EmployeeListComponent implements OnInit, OnDestroy {

  public employees: Array<Employee> = [];
  private subscriptions: Array<Subscription> = [];
  private queryModel: SharedQueryModel = new SharedQueryModel();
  public loading$: Observable<boolean>;

  public readonly settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      emp_name: {
        title: 'Name',
        type: 'string',
        filter: false,
      },
      emp_email: {
        title: 'Email',
        type: 'string',
        filter: false,
      },
      emp_photo: {
        title: 'Photo',
        type: 'string',
        filter: false,
      },
      emp_address: {
        title: 'Address',
        type: 'string',
        filter: false,
      },
      branch_name: {
        title: 'Branch',
        type: 'string',
        filter: false,
      },
      bank_name: {
        title: 'Bank',
        type: 'string',
        filter: false,
      },
    },
  };

  public source: LocalDataSource = new LocalDataSource();

  constructor(private store: Store<AppState>) {
    // do nothing
  }

  public ngOnInit(): void {

    this.store.dispatch(query({ model: this.queryModel }));
    this.loading$ = this.store.select(getLoading);

    this.subscriptions.push(
      this.store.select(getEmployees).subscribe(
        (employees: Array<Employee>) => {
          this.employees = employees;
          this.source.load(this.employees);
        }),
    );
  }

  public ngOnDestroy(): void {
    this.subscriptions.forEach((subscription: Subscription) => {
      subscription.unsubscribe();
    });
  }

}
