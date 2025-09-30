import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SaleRoutingModule } from './sale-routing.module';
import { SaleHomeComponent } from './containers/sale-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAlertModule, NbAutocompleteModule, NbBadgeModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbListModule, NbRadioModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { NbDateFnsDateModule } from '@nebular/date-fns';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';
import { DialogConfimModule } from 'src/app/shared/components/dialog-confim/dialog-confim.module';
import { PdfSalesModule } from 'src/app/shared/components/generate-pdf/pdf-sales/pdf-sales.module';
import { VMySaleComponent } from './components/views/v-my-sale/v-my-sale.component';
import { MMySaleComponent } from './components/modals/m-my-sale/m-my-sale.component';
import { MClientSaleComponent } from './components/modals/m-client-sale/m-client-sale.component';


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
  NbAlertModule
];

@NgModule({
  declarations: [
    VMySaleComponent,
    MMySaleComponent,
    SaleHomeComponent,
    MClientSaleComponent
  ],
  imports: [
    SaleRoutingModule,
    PaginationsModule,
    ...ANGULAR,
    ...NEBULAR,
    DialogConfimModule,
    PdfSalesModule
  ]
})
export class SaleModule { }
