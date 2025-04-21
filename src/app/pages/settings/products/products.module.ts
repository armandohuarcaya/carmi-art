import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ProductsHomeComponent } from './containers/products-home.component';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MShoppingComponent } from './components/modals/m-shopping/m-shopping.component';
import { MProductComponent } from './components/modals/m-product/m-product.component';
import { AddFileModule } from 'src/app/shared/components/add-file/add-file.module';
import { VStockProductComponent } from './components/views/v-stock-product/v-stock-product.component';

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
  NbAutocompleteModule
];
@NgModule({
  declarations: [
    ProductsHomeComponent,
    MShoppingComponent,
    MProductComponent,
    VStockProductComponent
  ],
  imports: [
    ProductsRoutingModule,
    PaginationsModule,
    AddFileModule,
    ...ANGULAR,
    ...NEBULAR
  ]
})
export class ProductsModule { }
