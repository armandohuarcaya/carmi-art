import { Injectable } from '@angular/core';
// import * as jspdf from 'jspdf';
// import html2canvas from 'html2canvas';

@Injectable({
  providedIn: 'root'
})
export class PdfService {

  constructor() { }
  generarPDF(elementoHTML: HTMLElement, nombreArchivo: string) {
    // html2canvas(elementoHTML).then((canvas) => {
    //   const contenido = 'mmmm';
    //   const pdf = new jspdf.jsPDF();
    //   const ancho = pdf.internal.pageSize.getWidth();
    //   const alto = pdf.internal.pageSize.getHeight();
    //   pdf.addImage(contenido, 'PNG', 0, 0, ancho, alto);
    //   pdf.save(nombreArchivo + '.pdf');
    // });
  }
}
