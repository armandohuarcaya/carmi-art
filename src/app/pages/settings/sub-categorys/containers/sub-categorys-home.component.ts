import { Component, OnInit } from '@angular/core';
import { SubCategorysService } from '../services/sub-categorys.service';
import { MSubCategorysComponent } from '../components/modals/m-sub-categorys/m-sub-categorys.component';
import { NbDialogService } from '@nebular/theme';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogConfimComponent } from 'src/app/shared/components/dialog-confim/dialog-confim.component';

@Component({
  selector: 'art-sub-categorys-home',
  templateUrl: './sub-categorys-home.component.html',
  styleUrls: ['./sub-categorys-home.component.scss']
})
export class SubCategorysHomeComponent implements OnInit {
  loading:boolean=false;
  category:any = [];
  subCategorys:any = [];
  formHeaders: any = FormGroup;
  paginate:any = '';
  constructor(private subCategorysServ: SubCategorysService, private nbDialogService: NbDialogService,
    private formBuilder: FormBuilder){}
  ngOnInit(): void {
    this.fieldReactive();
    this.getCategory();
    this.getList();
  }
  filters() {
    this.formHeaders.controls['page'].setValue(1);
    this.filterList();
  }
  private fieldReactive() {
    const controls = {
      category_id: [''],
      filter: [''],
      page: [1],
      per_page: [10]
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  get page():any {
    return this.formHeaders.get('page') as FormControl;
  }
  getCategory() {
    // const forms = this.formHeaders.value;
    const params = {};
    this.subCategorysServ.categorys$(params).subscribe((res:any) => {
      this.category = res.data || [];
    });
  }
  changePerPage($event:any) {
    this.formHeaders.controls['per_page'].setValue($event);
    this.formHeaders.controls['page'].setValue(1);
    this.getList();
  }
  changePagePaginations($event:any) {
    this.formHeaders.controls['page'].setValue($event);
    this.getList();
  }
  filterList() {
    this.formHeaders.controls['page'].setValue(1);
    this.getList();
  }
  getList() {
    const forms = this.formHeaders.value;
    const params = {
      category_id: forms.category_id,
      filter: forms.filter,
      size: forms.per_page,
      page: forms.page,
    };
    this.loading = true;
    this.subCategorysServ.subCategorys$(params).subscribe((res:any) => {
      this.subCategorys = res.data || [];
      setTimeout(() => {
        this.setPaginate(res);
      }, 100);
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
  openSubCategory(item:any, type:any) {
    this.nbDialogService.open(MSubCategorysComponent, {
      dialogClass: 'dialog-limited-height',
      context: {
        type: type,
        item: item
      },
      closeOnBackdropClick: false,
      closeOnEsc: false,
    })
    .onClose.subscribe((result:any) => {
      if (result === 'ok') {
        this.getList();
      }
    });
  }
  onDelete(item: any){
    this.nbDialogService
      .open(DialogConfimComponent, {
        dialogClass: 'dialog-limited-height',
        context: {
          tittle: 'ELIMINAR',
          text: '¿ Estás seguro ? ',
          icon: 'trash-outline',
          colorIcon: 'danger',
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
      .onClose.subscribe((result: any) => {
        if (result.isConfirmed) {
          this.loading = true;
          this.subCategorysServ.deleteSubCategorys$(item._id).subscribe((res:any) => {
            if (res.success) {
              this.getList();
            }
          }, () => this.loading = false, () => this.loading = false);
        }
      });
  }
}
