import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeeRoutingModule } from './employee-routing.module';
import { EmployeeComponent } from './employee.component';
import { SharedModule } from '../shared/shared.module';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './store/employee.reducer';
import { EMPLOYEE_STATE_NAME } from './store/employee.selector';
import { EffectsModule } from '@ngrx/effects';
import { EmployeeEffects } from './store/employee.effects';


@NgModule({
  declarations: [
    EmployeeComponent,
    EmployeeListComponent,
  ],
  imports: [
    CommonModule,
    EmployeeRoutingModule,
    SharedModule,
    EffectsModule.forFeature([EmployeeEffects]),
    StoreModule.forFeature(EMPLOYEE_STATE_NAME, employeeReducer),
  ],
})
export class EmployeeModule { }
