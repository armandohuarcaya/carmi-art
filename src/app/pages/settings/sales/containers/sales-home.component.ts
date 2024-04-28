import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { DatePipe } from '@angular/common';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'art-sales-home',
  templateUrl: './sales-home.component.html',
  styleUrls: ['./sales-home.component.scss']
})
export class SalesHomeComponent implements OnInit {
  formHeaders: any = FormGroup;
  products$:any = [];
  carrito:any = [];
  loading:boolean = false;
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
  constructor(private service: GeneralService, private formBuilder: FormBuilder, private nbDialogService: NbDialogService, private datepipe: DatePipe) {}
  ngOnInit(): void {
    this.fieldReactive();
    // this.getProducts();
  }
  private fieldReactive() {
    const controls = {
      client_name: [''],
      client_place: [''],
      date: [new Date(), [Validators.required]],
      pay_type: ['1', [Validators.required]],
      gasto_envio: [0, [Validators.required]],
      price_parcial: [0, [Validators.required]],
      price_total: [0, [Validators.required]],
      pay: [''],
      turned: [0],
      page: [1],
      per_page: [100],
      name_producto: [''],
      _id: [''],
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  filters() {
    this.formHeaders.controls['page'].setValue(1);
    this.getProducts();
  }
  inputKeyAutocomplete($event:any) {
    if (!this.formHeaders.value.name_producto) {
      this.clearPersona();
    }
  }
  changeAutocomplete($event:any) {
    if ($event && $event._id) {
      this.formHeaders.controls['_id'].setValue($event._id);
      this.products$ = this.products$.filter((a:any) => a._id === $event._id);
      this.addItem($event);
      this.clearPersona();
    } else {
     this.clearPersona();
    }
  }
  colorAutocompleteSelect(option:any) {
    if (this.formHeaders.value._id === option._id) {
      return {'background': 'var(--color-primary-500)', 'color': 'white', 'font-size': '11px'};
    } else {
      return {'font-size': '11px'};
    }
  }
  clearPersona() {
    this.formHeaders.controls['name_producto'].setValue('');
    this.formHeaders.controls['_id'].setValue('');
    this.products$ = [];
  }
  getProducts() {
    const serviceName = END_POINTS.el_art.settings.products + '/input-output';
    const forms = this.formHeaders.value;
    const params = {
      // page: 1,
      // size: 100,
      size: forms.per_page,
      page: forms.page,
      name_code_filter: forms.name_producto
    }
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.products$ = res.data || [];
      if (this.products$.length>0) {
        this.products$.map((r:any) => {
          r.quantity = 1;
          r.subTotal = r.quantity * Number(r.cost_pen);
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
      a.subTotal = a.quantity * Number(a.cost_pen);
      // cantidad = cantidad + a.quantity;
      precio = precio + a.subTotal;
    });
    console.log(precio);
    console.table(this.carrito);
    this.formHeaders.patchValue({
      price_parcial: precio,
      price_total: precio
    });
  }
  saveSales() {
    // if (this.datos_pedido.id_persona !== this.user.id_persona) {
      const serviceName = END_POINTS.el_art.settings.sales;
      this.nbDialogService.open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'CONFIRMAR',
          text: '¿ Desea confirmar el págo ? ',
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
            amount: f.quantity,
            price: f.cost_pen,
            price_total: f.subTotal,
          };
          array.push(datos);
        });

        const params = {
          client_name: forms.client_name,
          client_place: forms.client_place,
          date: this.datepipe.transform(forms.date, 'yyyy-MM-dd'),
          pay_type: Number(forms.pay_type),
          price_total: forms.price_total,
          details: array
        }
        if (result.isConfirmed && array.length>0) {
            this.loading = true;
            this.service.addNameData$(serviceName, params).subscribe((res:any) => {
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
    if (Number(this.formHeaders.value.pay) >= Number(this.formHeaders.value.price_total)) {
      this.formHeaders.controls['turned'].setValue(Number(this.formHeaders.value.pay) - Number(this.formHeaders.value.price_total));
    } else {
      this.formHeaders.controls['turned'].setValue(0);
    }
  }
}
