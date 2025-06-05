import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { BrandsService } from '../../../services/brands.service';

@Component({
  selector: 'art-m-brands',
  templateUrl: './m-brands.component.html',
  styleUrls: ['./m-brands.component.scss']
})
export class MBrandsComponent implements OnInit {
  loading:boolean = false;
  @Input() item:any = '';
  @Input() type:any = 'NEW'
  formHeaders: any = FormGroup;
  brand:any = [];
  constructor(public activeModal: NbDialogRef<MBrandsComponent>, private brandsServ: BrandsService, private formBuilder: FormBuilder,  private dialogService: NbDialogService) { }
  ngOnInit(): void {
    this.fieldReactive();
    if (this.type === 'UPDATE') {
      this.setValueData();
    }
  }
  private fieldReactive() {
    const controls = {
      _id: [''],
      name: ['', [Validators.required]],
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  closeModal() {
    this.activeModal.close('close');
  }
  saveBrands() {
    // const forms = this.formHeaders.value;
    const params = {
      name: this.formHeaders.value.name
    };
    if (this.type === 'NEW') {
      this.loading = true;
      this.brandsServ.addBrands$(params).subscribe((res:any) => {
        if (res.success) {
          this.activeModal.close('ok');
        }
      }, () => this.loading = false, () => this.loading = false);
    } else {
      this.loading = true;
      this.brandsServ.putBrands$(this.formHeaders.value._id, params).subscribe((res:any) => {
        if (res.success) {
          this.activeModal.close('ok');
        }
      }, () => this.loading = false, () => this.loading = false);
    }
  }
  setValueData() {
    this.brandsServ.brandsShow$(this.item._id).subscribe((res:any) => {
      if (res.data) {
        this.formHeaders.patchValue({
          _id: res.data._id,
          name: res.data.name,
        });
      }
    });

  }
}
