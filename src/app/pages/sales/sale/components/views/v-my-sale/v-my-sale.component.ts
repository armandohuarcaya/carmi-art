import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';
import { MMySaleComponent } from '../../modals/m-my-sale/m-my-sale.component';
import { STATUS, TYPE_PAY } from '../../static/json';
import { SSalesService } from '../../../services/s-sales.service';

@Component({
  selector: 'art-v-my-sale',
  templateUrl: './v-my-sale.component.html',
  styleUrls: ['./v-my-sale.component.scss']
})
export class VMySaleComponent implements OnInit {
  formHeaders: any = FormGroup;
  @Output() editSale: EventEmitter<any> = new EventEmitter();
  sales:any = [];
  paginate:any = '';
  loading:boolean = false;
  typePay:any = TYPE_PAY;
  status:any = STATUS;
  constructor(private sSalesServ: SSalesService, private formBuilder: FormBuilder, private nbDialogService: NbDialogService) {}
  ngOnInit(): void {
    this.fieldReactive();
    this.getMySales();
    // this.getYears();
  }
  private fieldReactive() {
    const controls = {
      name: [''],
      status: [''],
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
    this.getMySales();
  }
  changePagePaginations($event:any) {
    this.formHeaders.controls['page'].setValue($event);
    this.getMySales();
  }
  filters() {
    this.formHeaders.controls['page'].setValue(1);
    this.getMySales();
  }
  getMySales() {
    const forms = this.formHeaders.value;
    const params:any = {
      // page: 1,
      // size: 100,
      size: forms.per_page,
      page: forms.page,
      name: forms.name
    };
    if (forms.status) {
      params.status = forms.status
    }
    this.loading = true;
    this.sSalesServ.listSale$(params).subscribe((res:any) => {
      this.sales = res.data || [];
      setTimeout(() => {
        this.setPaginate(res);
      }, 100);
      // this.articuloServ.push({nombre: 'Prueba', codigo: '2010', id_articulo: 1})
    }, () => this.loading = false, () => this.loading = false);
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
  getTypePays(id:any) {
    const type = this.typePay.find((r:any) => Number(r.id) === Number(id));
    if (type) {
      return type.name;
    } else {
      return 'Otros';
    }
  }
  openSale(item:any) {
    this.nbDialogService.open(MMySaleComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        item: item,
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result && result.close === 'ok') {
        this.formHeaders.controls['page'].setValue(1);
        this.getMySales();
      } else if (result && result.close === 'edit') {
        setTimeout(() => {
          this.editSale.emit(result.value);
        }, 1000);
      }
    });
  }
  getStatus(code:any) {
    const st = this.status.find((r:any) => r.code === code);
    if (st) {
      return st;
    } else {
      return {name: 'Otros', icon: '', code: '', color: ''};
    }
  }
}
