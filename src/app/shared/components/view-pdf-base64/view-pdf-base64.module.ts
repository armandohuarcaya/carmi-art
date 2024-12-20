import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewPdfBase64Component } from './view-pdf-base64.component';
import { NbButtonModule, NbCardModule, NbIconModule } from '@nebular/theme';
// import { NgxDocViewerModule } from 'ngx-doc-viewer';



@NgModule({
  declarations: [ViewPdfBase64Component],
  imports: [
    CommonModule,
    NbCardModule,
    NbIconModule,
    NbButtonModule,
    // NgxDocViewerModule
  ],
  exports: [ViewPdfBase64Component]
})
export class ViewPdfBase64Module { }
