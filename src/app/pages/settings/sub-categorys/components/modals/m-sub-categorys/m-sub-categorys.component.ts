import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { SubCategorysService } from '../../../services/sub-categorys.service';

@Component({
  selector: 'art-m-sub-categorys',
  templateUrl: './m-sub-categorys.component.html',
  styleUrls: ['./m-sub-categorys.component.scss']
})
export class MSubCategorysComponent implements OnInit {
  loading:boolean = false;
  @Input() item:any = '';
  @Input() type:any = 'NEW'
  formHeaders: any = FormGroup;
  category:any = [];
  constructor(public activeModal: NbDialogRef<MSubCategorysComponent>, private subCategorysServ: SubCategorysService,
    private formBuilder: FormBuilder,  private dialogService: NbDialogService) { }
  ngOnInit(): void {
    this.fieldReactive();
    this.getCategory();
    if (this.type === 'UPDATE') {
      this.setValueData();
    }
  }
  private fieldReactive() {
    const controls = {
      _id: [''],
      name: ['', [Validators.required]],
      category_id: ['', [Validators.required]],
      code_nomenclature: ['', [Validators.required]],
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  closeModal() {
    this.activeModal.close('close');
  }
  getCategory() {
    // const forms = this.formHeaders.value;
    const params = {};
    this.subCategorysServ.categorys$(params).subscribe((res:any) => {
      this.category = res.data || [];
    });
  }
  saveBrands() {
    // const forms = this.formHeaders.value;
    const params = {
      category_id: this.formHeaders.value.category_id,
      name: this.formHeaders.value.name,
      code_nomenclature: this.formHeaders.value.code_nomenclature
    };
    if (this.type === 'NEW') {
      this.loading = true;
      this.subCategorysServ.addSubCategorys$(params).subscribe((res:any) => {
        if (res.success) {
          this.activeModal.close('ok');
        }
      }, () => this.loading = false, () => this.loading = false);
    } else {
      this.loading = true;
      this.subCategorysServ.putSubCategorys$(this.formHeaders.value._id, params).subscribe((res:any) => {
        if (res.success) {
          this.activeModal.close('ok');
        }
      }, () => this.loading = false, () => this.loading = false);
    }
  }
  setValueData() {
    this.subCategorysServ.subCategorysShow$(this.item._id).subscribe((res:any) => {
      if (res.data) {
        this.formHeaders.patchValue({
          _id: res.data._id,
          name: res.data.name,
          category_id: res.data.category_id,
          code_nomenclature: res.data.code_nomenclature
        });
      }
    });

  }
}
