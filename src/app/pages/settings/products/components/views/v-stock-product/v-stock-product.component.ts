import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { SProductsService } from '../../services/s-products.service';
import { NbDialogService } from '@nebular/theme';

@Component({
  selector: 'art-v-stock-product',
  templateUrl: './v-stock-product.component.html',
  styleUrls: ['./v-stock-product.component.scss']
})
export class VStockProductComponent implements OnInit {
  formHeaders: any = FormGroup;
  products:any = [];
  paginate:any = '';
  loading:boolean = false;
  products$:any = [];
  carrito:any= [];
  constructor(private sProductsServ: SProductsService, private formBuilder: FormBuilder, private nbDialogService: NbDialogService) {}
  ngOnInit(): void {
    this.fieldReactive();
  }
  private fieldReactive() {
    const controls = {
      page: [1],
      per_page: [100],
      name_producto: [''],
      _id: [''],
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
    this.sProductsServ.search$(params).subscribe((res:any) => {
      this.products$ = res.data || [];
      if (this.products$.length>0) {
        this.products$.map((r:any) => {
          r.quantity = 1;
          r.subTotal = r.quantity * Number(r.cost_pen);
        });
        const input:any = document.getElementsByClassName('user_avatar2');
        input[0].click();
      }
    });
  }
  addItem(item:any) {
    // this.person_id = JSON.parse(JSON.stringify(this.person_id));
    this.carrito.push(JSON.parse(JSON.stringify(item)));
  }
  changeCantidad(type:any, item:any) {
    if (type === 'PLUS') {
      item.quantity = Number(item.quantity) + 1;
    } else {
      item.quantity = Number(item.quantity) - 1;
    }
  }
  deleteCarr(item:any, i:any) {
    this.carrito.splice(i, 1);
  }
  saveStock() {
    const data = [];
    this.carrito.map((r:any) => {
      const item = {
        product_id: r._id,
        amount: Number(r.quantity),
        unit_cost: Number(r.cost_pen),
        modified_cost: true,
      };
      data.push(item);
    });
    const params = {
      reason: 'COMPRA',
      details: data
    };
    this.loading = true;
    this.sProductsServ.addStock$(params).subscribe((res:any) => {
      if(res.success){
        this.carrito = [];
      }
    }, () => this.loading=false, () => this.loading=false);
  }
}
