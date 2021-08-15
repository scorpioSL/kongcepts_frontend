import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ThemeModule } from '../@theme/theme.module';
import { NbAlertModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbInputModule, NbMenuModule, NbSpinnerModule, NbToastrModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

const imports: Array<any> = [
  CommonModule,
  FormsModule,
  ThemeModule,
  NbMenuModule,
  NbCardModule,
  NbInputModule,
  NbButtonModule,
  NbCheckboxModule,
  NbAlertModule,
  NbToastrModule,
  NbSpinnerModule,
  Ng2SmartTableModule,
];

@NgModule({
  declarations: [],
  imports: [
    ...imports
  ],
  exports: [
    ...imports
  ]
})
export class SharedModule { }
