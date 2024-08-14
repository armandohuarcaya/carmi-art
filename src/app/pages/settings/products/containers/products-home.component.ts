import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { MShoppingComponent } from '../components/modals/m-shopping/m-shopping.component';

@Component({
  selector: 'art-products-home',
  templateUrl: './products-home.component.html',
  styleUrls: ['./products-home.component.scss']
})
export class ProductsHomeComponent implements OnInit {
  formHeaders: any = FormGroup;
  products:any = [];
  paginate:any = '';
  carrito:any = [];
  constructor(private service: GeneralService, private formBuilder: FormBuilder, private nbDialogService: NbDialogService) {}
  ngOnInit(): void {
    this.fieldReactive();
    this.getProducts();
    // this.getYears();
  }
  private fieldReactive() {
    const controls = {
      search: [''],
      page: [1],
      per_page: [20]
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  get page():any {
    return this.formHeaders.get('page') as FormControl;
  }
  changePerPage($event:any) {
    this.formHeaders.controls['per_page'].setValue($event);
    this.formHeaders.controls['page'].setValue(1);
    this.getProducts();
  }
  changePagePaginations($event:any) {
    this.formHeaders.controls['page'].setValue($event);
    this.getProducts();
  }
  filters() {
    this.formHeaders.controls['page'].setValue(1);
    this.getProducts();
  }
  getProducts() {
    const serviceName = END_POINTS.el_art.settings.products + '/input-output';
    const forms = this.formHeaders.value;
    const params = {
      // page: 1,
      // size: 100,
      size: forms.per_page,
      page: forms.page,
      name_code_filter: forms.search
    }
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
      this.products = res.data || [];
      // console.log(this.products);
      setTimeout(() => {
        this.setPaginate(res);
      }, 100);
      // this.articuloServ.push({nombre: 'Prueba', codigo: '2010', id_articulo: 1})
    });
  }
  setPaginate(values:any) {

    // const next = values.next_page_url ? values.next_page_url.split('=') : [];
    // const previus = values.prev_page_url ? values.prev_page_url.split('=') : [];

    this.paginate = {
      from: values.pageNum,
      to: values.pageSize,
      page: values.pageNum,
      pages: values.pages,
      perPage: values.pageSize,
      nextPage: (Number(values.pageNum) < Number(values.pages)) ? Number(values.pageNum) + 1 : null,
      previousPage:  (Number(values.pageNum) > 1) ? Number(values.pages) - 1 : null,
      total: values.total,
      data: values.data
    }
  }
  addItem(item:any) {
    this.carrito.push(item);
  }
  openShopping() {
    this.nbDialogService.open(MShoppingComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        carrito: this.carrito,
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result === 'ok') {
        this.formHeaders.controls['page'].setValue(1);
        this.getProducts();
      }
    });
  }
}
