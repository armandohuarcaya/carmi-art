import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PdfSalesComponent } from './pdf-sales.component';
import { PdfService } from 'src/app/shared/services/pdf.service';
import { NbButtonModule } from '@nebular/theme';



@NgModule({
  declarations: [PdfSalesComponent],
  imports: [
    CommonModule,
    NbButtonModule
  ],
  exports: [PdfSalesComponent],
  providers: [PdfService]
})
export class PdfSalesModule { }
