import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationOneToOneComponent } from './pagination-one-to-one/pagination-one-to-one.component';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbInputModule, NbSelectModule } from '@nebular/theme';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPerComponent } from './pagination-per/pagination-per.component';
import { PaginationDetailComponent } from './pagination-detail/pagination-detail.component';
import { PaginationPerInputComponent } from './pagination-per-input/pagination-per-input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PaginationOneToOneComponent,
    PaginationComponent,
    PaginationPerComponent,
    PaginationDetailComponent,
    PaginationPerInputComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbFormFieldModule,
    NbInputModule
  ],
  exports: [
    PaginationOneToOneComponent,
    PaginationComponent,
    PaginationPerComponent,
    PaginationDetailComponent,
    PaginationPerInputComponent
  ]
})
export class PaginationsModule { }
