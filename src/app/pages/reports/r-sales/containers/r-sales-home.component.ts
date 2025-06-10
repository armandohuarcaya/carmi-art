import { Component, OnInit } from '@angular/core';
import { SRSalesService } from '../services/s-r-sales.service';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { NbDialogService } from '@nebular/theme';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'art-r-sales-home',
  templateUrl: './r-sales-home.component.html',
  styleUrls: ['./r-sales-home.component.scss']
})
export class RSalesHomeComponent implements OnInit {
  formHeaders: any = FormGroup;
  sales:any = [];
  paginate:any = '';
  loading:boolean = false;
  sumTotal:any = '';
  constructor(private sRSalesServ: SRSalesService, private formBuilder: FormBuilder,
    private nbDialogService: NbDialogService, private datepipe: DatePipe) {

  }
  ngOnInit(): void {
    this.fieldReactive();
    this.getProducts();
  }
  private fieldReactive() {
    const controls = {
      search: [''],
      page: [1],
      per_page: [10]
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
    const forms = this.formHeaders.value;
    const params = {
      // page: 1,
      // size: 100,
      size: forms.per_page,
      page: forms.page,
      name_code_filter: forms.search
    };
    this.loading = true;
    this.sRSalesServ.sales$(params).subscribe((res:any) => {
      this.sales = res.data || [];
      if (this.sales.length>0) {
        this.sales.map((r:any) => {
          r.sale_date = this.datepipe.transform(new Date(), 'dd/MM/yyyy hh:mm:ss a');
        });
      }
      console.table(this.sales);
      this.sumTotal = res.totalSum || [];
      // console.log(this.products);
      setTimeout(() => {
        this.setPaginate(res);
      }, 100);
      // this.articuloServ.push({nombre: 'Prueba', codigo: '2010', id_articulo: 1})
    }, () => this.loading=false, () => this.loading=false);
  }
  setPaginate(values:any) {

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
}
