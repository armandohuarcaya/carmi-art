import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
import { AddFileComponent } from './add-file.component';
import { ViewPdfBase64Module } from '../view-pdf-base64/view-pdf-base64.module';



@NgModule({
  declarations: [AddFileComponent],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    ViewPdfBase64Module
  ],
  exports: [AddFileComponent]
})
export class AddFileModule { }
