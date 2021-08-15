import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { EmployeeComponent } from './employee.component';
import { EmployeeGuard } from './guards/employee.guard';

const routes: Routes = [
  {
    path: '',
    component: EmployeeComponent,
    canActivate: [EmployeeGuard],
    children: [
      {
        path: '',
        component: EmployeeListComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EmployeeRoutingModule { }
