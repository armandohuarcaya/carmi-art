import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsHomeComponent } from './containers/products-home.component';
import { NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSpinnerModule } from '@nebular/theme';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MShoppingComponent } from './components/modals/m-shopping/m-shopping.component';

const ANGULAR: any[] = [CommonModule, FormsModule, ReactiveFormsModule];
const NEBULAR: any[] = [
  NbCardModule,
  NbIconModule,
  NbInputModule,
  NbButtonModule,
  NbSpinnerModule,
  NbDialogModule.forChild(),
  NbFormFieldModule,
  NbCheckboxModule
];
@NgModule({
  declarations: [
    ProductsHomeComponent,
    MShoppingComponent
  ],
  imports: [
    ProductsRoutingModule,
    PaginationsModule,
    ...ANGULAR,
    ...NEBULAR
  ]
})
export class ProductsModule { }
