import { DatePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'art-m-my-sale',
  templateUrl: './m-my-sale.component.html',
  styleUrls: ['./m-my-sale.component.scss']
})
export class MMySaleComponent implements OnInit {
  loading:boolean = false;
  isClose:any = {
    close: 'close',
    value: ''
  };
  @Input() item:any = '';
  sale:any = '';
  typePay:any = [
    {
      name: 'Efectivo',
      code: 'CASH',
      id: '1',
    },
    {
      name: 'Transferencia',
      code: 'TRANSFER',
      id: '2',
    },
    {
      name: 'Yape',
      code: 'YAPE',
      id: '3',
    },
    {
      name: 'Plin',
      code: 'PLIN',
      id: '4',
    }
  ];
  status:any = [
    {
      name: 'Procesado',
      code: 'processed',
      id: '1',
      icon: 'checkmark-circle-2-outline',
      color: 'success'
    },
    {
      name: 'Pendiente',
      code: 'pending',
      id: '2',
      icon: 'alert-triangle-outline',
      color: 'warning'
    },
    {
      name: 'Cancelado',
      code: 'canceled',
      id: '3',
      icon: 'close-circle-outline',
      color: 'danger'
    }
  ]
  totales:any = {
    precio: 0,
    cantidad: 0,
    subTotal: 0
  };
  constructor(public activeModal: NbDialogRef<MMySaleComponent>, private service: GeneralService, private datepipe: DatePipe, private nbDialogService: NbDialogService) { }
  ngOnInit(): void {
    this.getMySale();
  }
  closeModal() {
    this.activeModal.close(this.isClose);
  }
  getMySale() {
    const serviceName = END_POINTS.el_art.settings.sales;
    this.loading = true;
    this.service.nameId$(serviceName, this.item._id).subscribe((res:any) => {
      this.sale = res.data || '';

    }, () => this.loading = false, () => this.loading = false);
  }
  getTypePays(id:any) {
    const type = this.typePay.find((r:any) => Number(r.id) === Number(id));
    if (type) {
      return type.name;
    } else {
      return 'Otros';
    }
  }
  getStatus(code:any) {
    const st = this.status.find((r:any) => r.code === code);
    if (st) {
      return st;
    } else {
      return {name: 'Otros', icon: '', code: '', color: ''};
    }
  }
  generatePdf(viewDownload:any) {
    const newArray = [];
    this.sale?.details.map((a:any) => {
      const datos = [
        {text: a.amount, style: 'dataRow', alignment: 'center'},
        {text: a.product_id, style: 'dataRow'}, {text: '', style: 'dataRow'},
        {text: '', style: 'dataRow'},
        {text: ('S/.' + a.price), style: 'dataRow', alignment: 'center'},
        {text: ('S/.' + a.price_total), style: 'dataRow', alignment: 'center'},
      ];
      newArray.push(datos);
    });
    const pdfGenerate:any = {
      content: [
        {
          table: {
            widths: [40, '*', '*', '*', 80, 80],
            body: [
              [{ text: 'CARMÍ ART - SCRAPBOOK', colSpan: 6, style: 'header', alignment: 'center', fillColor: '#002060' }, {}, {}, {}, {}, {}],
              [
                { text: 'CREATIVA:', style: 'tableHeader', colSpan: 1, fillColor: '#002060', color: 'white' },
                { text: this.sale.client_name, style: 'tableHeader', colSpan: 4, fillColor: '#002060', color: 'white', alignment: 'left' },
                {},
                {},
                {},
                { text: (this.datepipe.transform(new Date(), 'dd/MM/yyyy') + ' ' + (this.sale.client_place ?? 'SN')), style: 'tableHeader', colSpan: 1, fillColor: '#002060', color: 'white', alignment: 'center' },
              ],
              [
                { text: 'CANT.', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
                { text: 'PRODUCTO', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
                { text: 'CÓDIGO', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
                { text: 'MEDIDAS', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
                { text: 'PRECIO UNIT.', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
                { text: 'TOTAL', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' }
              ],
              ...newArray,
              // ['1', 'TROQUEL - LOGO CONQUISTADORES', 'TA-02', '11*11', 'S/.25,00'],
              // ['1', 'TROQUEL - CAJA CORAZÓN - GRANDE', 'H-287', '11*19', 'S/.30,00'],
              // ['1', 'STENCIL - M12', 'M12', '13*13', 'S/.5,00'],
              // ['1', 'STENCIL - M14', 'M14', '13*13', 'S/.5,00'],
              // ['1', 'STENCIL - M40', 'M40', '13*13', 'S/.5,00'],
              [{ text: '', colSpan: 5 }, {}, {}, {}, {}, { text: 'S/.' + this.sale.price_total, alignment: 'center', style: 'dataRow' }]
            ]
          }
        }
      ],
      styles: {
        header: {
          fontSize: 10,
          bold: true,
          margin: [0, 0, 0, 10],
          color: 'white'
        },
        tableHeader: {
          bold: true,
          fontSize: 8,
          color: 'white'
        },
        dataRow: {
          fontSize: 7,
        }
      }
    };
    const pdf = pdfMake.createPdf(pdfGenerate);
    if (viewDownload === 'DOWNLOAD') {
      pdf.download('Carmi-Art.pdf');
    } else {
      pdf.open();
    }
  }
  finishSale(option:any) {
    // if (this.datos_pedido.id_persona !== this.user.id_persona) {
      const serviceName = END_POINTS.el_art.settings.sales;
      this.nbDialogService.open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'CONFIRMAR',
          text: option === 'processed' ? '¿ Desea confirmar la venta ?' : 'Se anulará o cancelará la venta',
          icon: 'save-outline',
          colorIcon: 'success',
          showCloseButton: true,
          showCancelButton: true,
          showConfirmButton: true,
          confirmButtonColor: 'primary',
          confirmButtonText: 'Si',
          cancelButtonText: 'No',
        },
        closeOnBackdropClick: false,
        closeOnEsc: false,
      })
      .onClose.subscribe((result:any) => {
        const params = {
          client_name: this.sale.client_name,
          client_place: this.sale.client_place,
          date: this.datepipe.transform(new Date(), 'yyyy-MM-dd'),
          pay_type: Number(this.sale.pay_type),
          price_total: this.sale.price_total,
          status: option,
          details: this.sale.details
        }
        if (result.isConfirmed && this.sale.details.length>0) {
          // console.log(params);
            this.loading = true;
            this.service.updateNameIdData$(serviceName, this.sale._id, params).subscribe((res:any) => {
              if (res.success) {
                this.isClose.close = 'ok';
                this.closeModal();
              }
            }, () => {this.loading = false}, () => {this.loading = false});
          }
      });
    // }
  }
  editSale() {
    this.isClose.close = 'edit';
    this.isClose.value = this.sale;
                this.closeModal();
  }
}
