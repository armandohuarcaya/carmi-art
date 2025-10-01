import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubCategorysRoutingModule } from './sub-categorys-routing.module';
import { MSubCategorysComponent } from './components/modals/m-sub-categorys/m-sub-categorys.component';
import { SubCategorysHomeComponent } from './containers/sub-categorys-home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NbAutocompleteModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDialogModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule, NbSpinnerModule, NbTabsetModule } from '@nebular/theme';
import { PaginationsModule } from 'src/app/shared/components/paginations/paginations.module';

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
    SubCategorysHomeComponent,
    MSubCategorysComponent,
  ],
  imports: [
    SubCategorysRoutingModule,
    PaginationsModule,
    ...ANGULAR,
    ...NEBULAR
  ]
})
export class SubCategorysModule { }
