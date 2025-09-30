import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { DatePipe } from '@angular/common';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { TYPE_PAY } from '../components/static/json';
import { SSalesService } from '../services/s-sales.service';
import { MClientSaleComponent } from '../components/modals/m-client-sale/m-client-sale.component';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'art-sale-home',
  templateUrl: './sale-home.component.html',
  styleUrls: ['./sale-home.component.scss']
})
export class SaleHomeComponent implements OnInit {
  formHeaders: any = FormGroup;
  products$:any = [];
  clients$:any = [];
  carrito:any = [];
  loading:boolean = false;
  typePay:any = TYPE_PAY;
  pdf: boolean = false;
  tabSelected: any = 'VENDER';
  constructor(private sSalesServ: SSalesService, private formBuilder: FormBuilder, private nbDialogService: NbDialogService, private datepipe: DatePipe) {}
  ngOnInit(): void {
    this.fieldReactive();
    // this.getProducts();
  }
  private fieldReactive() {
    const controls = {
      client_name: ['', [Validators.required]],
      customer_id: ['', [Validators.required]],
      client_place: ['', [Validators.required]],

      date: [new Date(), [Validators.required]],
      pay_method: ['NONE'],
      gasto_envio: [0, [Validators.required]],
      price_parcial: [0, [Validators.required]],
      price_total: [0, [Validators.required]],
      pay: [''],
      turned: [0],
      page: [1],
      per_page: [100],
      name_producto: [''],
      _id: [''],
      _id_venta: ['']
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  enterProducts():any {
    this.formHeaders.controls['page'].setValue(1);
    this.getProducts();
  }
  filters() {
    this.formHeaders.controls['page'].setValue(1);
    this.getProducts();
  }
  inputKeyAutocomplete($event:any) {
    if (!this.formHeaders.value.name_producto) {
      this.clearProduct();
    }
  }
  changeAutocomplete($event:any) {
    if ($event && $event._id) {
      this.formHeaders.controls['_id'].setValue($event._id);
      this.products$ = this.products$.filter((a:any) => a._id === $event._id);
      this.addItem($event);
      this.clearProduct();
    } else {
     this.clearProduct();
    }
  }
  colorAutocompleteSelect(option:any) {
    if (this.formHeaders.value._id === option._id) {
      return {'background': 'var(--color-primary-500)', 'color': 'white', 'font-size': '11px'};
    } else {
      return {'font-size': '11px'};
    }
  }
  clearProduct() {
    this.formHeaders.controls['name_producto'].setValue('');
    this.formHeaders.controls['_id'].setValue('');
    this.products$ = [];
  }
  getProducts() {
    const forms = this.formHeaders.value;
    const params = {
      // page: 1,
      // size: 100,
      size: forms.per_page,
      page: forms.page,
      name_code_filter: forms.name_producto
    }
    this.sSalesServ.search$(params).subscribe((res:any) => {
      this.products$ = res.data || [];
      if (this.products$.length>0) {
        this.products$.map((r:any) => {
          r.quantity = 1;
          r.subTotal = Number(r.quantity) * Number(r.price_pen);
        });
        const input:any = document.getElementsByClassName('user_avatar');
        input[0].click();
      }
    });
  }
  addItem(item:any) {
    // this.person_id = JSON.parse(JSON.stringify(this.person_id));
    this.carrito.push(JSON.parse(JSON.stringify(item)));
    this.calcularCantidadPrecio();
  }
  deleteCarr(item:any, i:any) {
    this.carrito.splice(i, 1);
    this.calcularCantidadPrecio();
  }
  changeCantidad(type:any, item:any) {
    if (type === 'PLUS') {
      item.quantity = Number(item.quantity) + 1;
    } else {
      item.quantity = Number(item.quantity) - 1;
    }
    this.calcularCantidadPrecio();
  }
  changeBlur() {
    this.calcularCantidadPrecio();
  }
  calcularCantidadPrecio() {
    // let cantidad:any = 0;
    let precio = 0;
    this.carrito.map((a:any) => {
      a.subTotal = Number(a.quantity) * Number(a.price_pen);
      // cantidad = cantidad + a.quantity;
      precio = precio + a.subTotal;
    });
    // console.log(precio);
    // console.table(this.carrito);
    this.formHeaders.patchValue({
      price_parcial: precio,
      price_total: precio
    });
    this.inputPay();
  }
  saveSales(option:any) {
    if (option === 'PENDING') {
      this.formHeaders.controls['pay_method'].setValue('NONE');
    }
    // if (this.datos_pedido.id_persona !== this.user.id_persona) {
      this.nbDialogService.open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'CONFIRMAR',
          text: option === 'PROCESSED' ? '¿ Desea confirmar la venta ?' : 'Se guardará el registro como pendiente',
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
        const forms = this.formHeaders.value;
        const array:any = [];
        this.carrito.map((f:any) => {
          const datos = {
            product_id: f._id,
            amount: Number(f.quantity) || 0,
            price: Number(f.price_pen) || 0,
            price_total: Number(f.subTotal) || 0,
          };
          array.push(datos);
        });
console.log('clients$',this.clients$);
console.log('forms',forms);
        const params = {
          customer_id: forms.customer_id,
          client_name: forms.client_name,
          client_place: forms.client_place,
          date: this.datepipe.transform(forms.date, 'yyyy-MM-dd'),
          pay_method: forms.pay_method,
          price_total: Number(forms.price_total) || 0,
          status: option,
          details: array
        }
        if (result.isConfirmed && array.length>0) {
          // console.log(params);
            this.loading = true;
            this.sSalesServ.addSale$(params).subscribe((res:any) => {
              if (res.success) {
                this.fieldReactive();
                this.carrito = [];
              }
            }, () => {this.loading = false}, () => {this.loading = false});
          }
      });
    // }
  }
  updateSales(option:any) {
    // if (this.datos_pedido.id_persona !== this.user.id_persona) {
      this.nbDialogService.open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'CONFIRMAR',
          text: option === 'processed' ? '¿ Desea confirmar la venta ?' : 'Se guardará el registro como pendiente',
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
        const forms = this.formHeaders.value;
        const array:any = [];
        this.carrito.map((f:any) => {
          const datos = {
            product_id: f.sale_id ? f.product_id : f._id,
            amount: Number(f.quantity) || 0,
            price: Number(f.price_pen) || 0,
            price_total: Number(f.subTotal) || 0,
            _id: f.sale_id ? f._id : ''
          };
          array.push(datos);
        });

        const params = {
          customer_id: forms.customer_id,
          client_name: forms.client_name,
          client_place: forms.client_place,
          date: this.datepipe.transform(forms.date, 'yyyy-MM-dd'),
          pay_method: forms.pay_method,
          price_total: forms.price_total,
          status: option,
          details: array
        }
        if (result.isConfirmed && array.length>0 && this.formHeaders.value._id_venta) {
          // console.log(params);
            this.loading = true;
            this.sSalesServ.updateSale$(this.formHeaders.value._id_venta, params).subscribe((res:any) => {
              if (res.success) {
                this.fieldReactive();
                this.carrito = [];
              }
            }, () => {this.loading = false}, () => {this.loading = false});
          }
      });
    // }
  }
  inputPay() {
    if (this.formHeaders.value.pay) {
      this.formHeaders.controls['turned'].setValue(Number(this.formHeaders.value.pay) - Number(this.formHeaders.value.price_total));
    } else {
      this.formHeaders.controls['turned'].setValue(0);
    }
  }
  descargar() {
    this.pdf = true;
    setTimeout(() => {
      this.pdf = false;
    }, 100);
  }
  // generatePdf() {
  //   const newArray = [];
  //   this.carrito.map((a:any) => {
  //     const datos = [
  //       {text: a.quantity, style: 'dataRow', alignment: 'center'},
  //       {text: a.name, style: 'dataRow'}, {text: (a.code || a.code_original), style: 'dataRow'},
  //       {text: a.measure, style: 'dataRow'},
  //       {text: ('S/.' + a.cost_pen), style: 'dataRow', alignment: 'center'},
  //       {text: ('S/.' + (Number(a.quantity) * Number(a.cost_pen))), style: 'dataRow', alignment: 'center'},
  //     ];
  //     newArray.push(datos);
  //   });
  //   const pdfGenerate:any = {
  //     content: [
  //       {
  //         table: {
  //           widths: [40, '*', '*', '*', 80, 80],
  //           body: [
  //             [{ text: 'CARMÍ ART - SCRAPBOOK', colSpan: 6, style: 'header', alignment: 'center', fillColor: '#002060' }, {}, {}, {}, {}, {}],
  //             [
  //               { text: 'CREATIVA:', style: 'tableHeader', colSpan: 1, fillColor: '#002060', color: 'white' },
  //               { text: this.formHeaders.value.client_name, style: 'tableHeader', colSpan: 4, fillColor: '#002060', color: 'white', alignment: 'left' },
  //               {},
  //               {},
  //               {},
  //               { text: (this.datepipe.transform(new Date(), 'dd/MM/yyyy') + ' ' + (this.formHeaders.value.client_place ?? 'SN')), style: 'tableHeader', colSpan: 1, fillColor: '#002060', color: 'white', alignment: 'center' },
  //             ],
  //             [
  //               { text: 'CANT.', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
  //               { text: 'PRODUCTO', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
  //               { text: 'CÓDIGO', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
  //               { text: 'MEDIDAS', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
  //               { text: 'PRECIO UNIT.', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' },
  //               { text: 'TOTAL', style: 'tableHeader', alignment: 'center', fillColor: '#002060', color: 'white' }
  //             ],
  //             ...newArray,
  //             [{ text: '', colSpan: 5 }, {}, {}, {}, {}, { text: 'S/.' + this.formHeaders.value.price_parcial, alignment: 'center', style: 'dataRow' }]
  //           ]
  //         }
  //       }
  //     ],
  //     styles: {
  //       header: {
  //         fontSize: 10,
  //         bold: true,
  //         margin: [0, 0, 0, 10],
  //         color: 'white'
  //       },
  //       tableHeader: {
  //         bold: true,
  //         fontSize: 8,
  //         color: 'white'
  //       },
  //       dataRow: {
  //         fontSize: 7,
  //       }
  //     }
  //   };
  //   const pdf = pdfMake.createPdf(pdfGenerate);
  //   pdf.open();
  // }
  tabChange($event:any) {
    if ($event) {
      this.tabSelected = $event.tabId;
    }
  }
  saleEdit($event:any) {
    this.tabSelected = 'VENDER';
    this.formHeaders.patchValue({
      customer_id: $event.customer_id,
      client_name: $event.client_name,
      client_place: $event.client_place,
      date: new Date(),
      pay_method: $event.pay_method,
      gasto_envio: 0,
      price_parcial: 0,
      price_total: $event.price_total,
      _id_venta: $event._id,
    });
    const array = [];
    $event.details.map((f:any) => {
      const datos = {
        product_id: f.product_id,
        quantity: Number(f.amount) || 0,
        price_pen: Number(f.price) || 0,
        subTotal: Number(f.price_total) || 0,
        sale_id: f.sale_id,
        _id: f._id,
        code: f.product?.code,
        code_original: f.product?.code_original,
        name: f.product?.name,
        measure: f.product?.measure,

      };
      array.push(datos);
    });
    this.carrito = array;
    // console.log($event);
  }
  clearVenta() {
    this.fieldReactive();
    this.carrito = [];
  }

  // cliente
  inputKeyAutocompleteClient($event:any) {
    if (!this.formHeaders.value.client_name) {
      this.clearClient();
    }
  }
  changeAutocompleteClient($event:any) {
    if ($event && $event._id) {
      this.formHeaders.controls['customer_id'].setValue($event._id);
      this.formHeaders.controls['client_place'].setValue($event.address);
      this.clients$ = this.clients$.filter((a:any) => a._id === $event._id);
    } else {
     this.clearClient();
    }
  }
  colorAutocompleteSelectClient(option:any) {
    if (this.formHeaders.value.customer_id === option._id) {
      return {'background': 'var(--color-primary-500)', 'color': 'white', 'font-size': '11px'};
    } else {
      return {'font-size': '11px'};
    }
  }
  clearClient() {
    this.formHeaders.controls['client_name'].setValue('');
    this.formHeaders.controls['customer_id'].setValue('');
    this.formHeaders.controls['client_place'].setValue('');
    this.clients$ = [];
  }
  getClient() {
    const forms = this.formHeaders.value;
    const params = {
      // page: 1,
      // size: 100,
      filter: forms.client_name,
      page: 1,
      pageSize: 20,
    }
    this.sSalesServ.listClient$(params).subscribe((res:any) => {
      this.clients$ = res.data && res.data.data || [];
      if (this.clients$.length>0) {
        const input:any = document.getElementsByClassName('person_addd');
        input[0].click();
      }
    });
  }
  filtersClient() {
    // this.formHeaders.controls['page'].setValue(1);
    this.getClient();
  }
  openClient(item:any, type:any) {
    this.clearClient();
    this.nbDialogService.open(MClientSaleComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        type: type,
        item: item
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result && result.close === 'ok') {
        this.formHeaders.controls['customer_id'].setValue(result.value._id);
        this.formHeaders.controls['client_name'].setValue(result.value.name + ' ' + result.value.lastname);
        this.formHeaders.controls['client_place'].setValue(result.value.address);
      }
    });
  }
}
