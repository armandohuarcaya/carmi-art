import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { SalesHomeComponent } from './containers/sales-home.component';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbSelectModule, NbSpinnerModule } from '@nebular/theme';
import { DialogConfimModule } from 'src/app/shared/components/dialog-confim/dialog-confim.module';

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
  NbListModule,
  NbAutocompleteModule,
  NbSelectModule
];

@NgModule({
  declarations: [
    SalesHomeComponent
  ],
  imports: [
    SalesRoutingModule,
    PaginationsModule,
    ...ANGULAR,
    ...NEBULAR,
    DialogConfimModule
  ]
})
export class SalesModule { }
