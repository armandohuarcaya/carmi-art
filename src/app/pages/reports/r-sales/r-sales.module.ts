import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RSalesRoutingModule } from './r-sales-routing.module';
import { RSalesHomeComponent } from './containers/r-sales-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';

const ANGULAR: any[] = [CommonModule, FormsModule, ReactiveFormsModule];
const NEBULAR: any[] = [
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbSpinnerModule,
  NbDialogModule.forChild(),
  NbFormFieldModule,
  NbCheckboxModule,
  NbTabsetModule,
  NbSelectModule,
  NbAutocompleteModule,
  NbDatepickerModule.forRoot(),
  NbDateFnsDateModule,
];
@NgModule({
  declarations: [
    RSalesHomeComponent,
  ],
  imports: [
    RSalesRoutingModule,
    PaginationsModule,
    ...ANGULAR,
    ...NEBULAR
  ]
})
export class RSalesModule { }
