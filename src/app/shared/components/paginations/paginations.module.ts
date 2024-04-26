import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationOneToOneComponent } from './pagination-one-to-one/pagination-one-to-one.component';
import { NbButtonModule, NbFormFieldModule, NbIconModule, NbSelectModule } from '@nebular/theme';
import { PaginationComponent } from './pagination/pagination.component';
import { PaginationPerComponent } from './pagination-per/pagination-per.component';
import { PaginationDetailComponent } from './pagination-detail/pagination-detail.component';



@NgModule({
  declarations: [
    PaginationOneToOneComponent,
    PaginationComponent,
    PaginationPerComponent,
    PaginationDetailComponent,
  ],
  imports: [
    CommonModule,
    NbIconModule,
    NbButtonModule,
    NbSelectModule,
    NbFormFieldModule
  ],
  exports: [
    PaginationOneToOneComponent,
    PaginationComponent,
    PaginationPerComponent,
    PaginationDetailComponent,
  ]
})
export class PaginationsModule { }
