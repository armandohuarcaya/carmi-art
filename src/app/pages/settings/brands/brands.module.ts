import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrandsRoutingModule } from './brands-routing.module';
import { BrandsHomeComponent } from './containers/brands-home.component';
import { MBrandsComponent } from './components/modals/m-brands/m-brands.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';

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
    BrandsHomeComponent,
    MBrandsComponent,
  ],
  imports: [
    BrandsRoutingModule,
    ...ANGULAR,
    ...NEBULAR
  ]
})
export class BrandsModule { }
