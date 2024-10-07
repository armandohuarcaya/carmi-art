import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SalesRoutingModule } from './sales-routing.module';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbBadgeModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { DialogConfimModule } from 'src/app/shared/components/dialog-confim/dialog-confim.module';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { VMySalesComponent } from './components/views/v-my-sales/v-my-sales.component';
import { PdfSalesModule } from 'src/app/shared/components/generate-pdf/pdf-sales/pdf-sales.module';
import { MMySaleComponent } from './components/modals/m-my-sale/m-my-sale.component';
import { SalesHomeComponent } from './containers/sales-home.component';

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
  NbSelectModule,
  NbDatepickerModule.forRoot(),
  NbDateFnsDateModule,
  NbTabsetModule,
  NbRadioModule,
  NbBadgeModule,
];

@NgModule({
  declarations: [
    VMySalesComponent,
    MMySaleComponent,
    SalesHomeComponent
  ],
  imports: [
    SalesRoutingModule,
    PaginationsModule,
    ...ANGULAR,
    ...NEBULAR,
    DialogConfimModule,
    PdfSalesModule
  ]
})
export class SalesModule { }
