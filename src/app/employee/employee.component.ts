import { Component, OnInit } from '@angular/core';
import { EMPLOYEE_MENU_ITEMS } from './employee-menu';

@Component({
  selector: 'ngx-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.scss'],
})
export class EmployeeComponent {

  menu = EMPLOYEE_MENU_ITEMS;
}
