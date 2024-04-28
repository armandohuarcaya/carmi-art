import { Component, ElementRef, ViewChild, Input, OnInit, OnChanges } from '@angular/core';
import { PdfService } from 'src/app/shared/services/pdf.service';

@Component({
  selector: 'art-pdf-sales',
  templateUrl: './pdf-sales.component.html',
  styleUrls: ['./pdf-sales.component.scss']
})
export class PdfSalesComponent implements OnInit, OnChanges{
  @ViewChild('contenidoPDF') contenidoPDF!: ElementRef;
  @Input() data:any = [];
  // @Input() download:boolean = false;
  constructor(private pdfService: PdfService) {}
  ngOnChanges():void {
    this.data = JSON.parse(JSON.stringify(this.data));
    // if (this.download === true) {
    //   console.log(this.download);
    //   this.generarPDF();
    // }
  }
  ngOnInit(): void {
  }
  generarPDF() {
    const elementoHTML = this.contenidoPDF.nativeElement;
    this.pdfService.generarPDF(elementoHTML, 'proforma');
  }
}
