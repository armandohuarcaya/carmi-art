import { Component, OnInit } from '@angular/core';
import { SubCategorysService } from '../services/sub-categorys.service';
import { MSubCategorysComponent } from '../components/modals/m-sub-categorys/m-sub-categorys.component';
import { NbDialogService } from '@nebular/theme';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
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
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  getCategory() {
    // const forms = this.formHeaders.value;
    const params = {};
    this.subCategorysServ.categorys$(params).subscribe((res:any) => {
      this.category = res.data || [];
    });
  }
  filterList() {
    this.getList();
  }
  getList() {
    const params = {
      category_id: this.formHeaders.value.category_id,
    };
    this.subCategorysServ.subCategorys$(params).subscribe((res:any) => {
      this.subCategorys = res.data || [];
    });
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
