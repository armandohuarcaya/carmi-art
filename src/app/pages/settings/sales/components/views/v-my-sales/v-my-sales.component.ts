import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { GeneralService } from 'src/app/providers';
import { END_POINTS } from 'src/app/providers/utils';

@Component({
  selector: 'art-v-my-sales',
  templateUrl: './v-my-sales.component.html',
  styleUrls: ['./v-my-sales.component.scss']
})
export class VMySalesComponent implements OnInit {
  formHeaders: any = FormGroup;
  sales:any = [];
  paginate:any = '';
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
  constructor(private service: GeneralService, private formBuilder: FormBuilder, private nbDialogService: NbDialogService) {}
  ngOnInit(): void {
    this.fieldReactive();
    this.getMySales();
    // this.getYears();
  }
  private fieldReactive() {
    const controls = {
      name: [''],
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
    const serviceName = END_POINTS.el_art.settings.sales;
    const forms = this.formHeaders.value;
    const params = {
      // page: 1,
      // size: 100,
      size: forms.per_page,
      page: forms.page,
      name: forms.name
    }
    this.loading = true;
    this.service.nameParams$(serviceName, params).subscribe((res:any) => {
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
}
