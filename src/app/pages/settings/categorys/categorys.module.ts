import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorysRoutingModule } from './categorys-routing.module';
import { MCategorysComponent } from './components/modals/m-categorys/m-categorys.component';
import { CategorysHomeComponent } from './containers/categorys-home.component';

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
    CategorysHomeComponent,
    MCategorysComponent,
  ],
  imports: [
    CategorysRoutingModule,
    ...ANGULAR,
    ...NEBULAR
  ]
})
export class CategorysModule { }
