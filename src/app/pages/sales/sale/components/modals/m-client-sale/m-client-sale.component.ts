import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { SSalesService } from '../../../services/s-sales.service';

@Component({
  selector: 'art-m-client-sale',
  templateUrl: './m-client-sale.component.html',
  styleUrls: ['./m-client-sale.component.scss']
})
export class MClientSaleComponent implements OnInit {
  loading:boolean = false;
  @Input() item:any = '';
  @Input() type:any = 'NEW'
  formHeaders: any = FormGroup;
  constructor(public activeModal: NbDialogRef<MClientSaleComponent>, private formBuilder: FormBuilder,
    private dialogService: NbDialogService, private sSalesServ: SSalesService) { }
  ngOnInit(): void {
    this.fieldReactive();
  }
  private fieldReactive() {
    const controls = {
      document: [''],
      name: ['', [Validators.required]],
      lastname: ['', [Validators.required]],
      address: ['', [Validators.required]],
      email: [''],
      cellphone: [''],
    };
    this.formHeaders = this.formBuilder.group(controls);
  }
  closeModal() {
    this.activeModal.close({close: 'close', value: ''});
  }
  saveCliente() {
    // const forms = this.formHeaders.value;
    const params = {
      document: this.formHeaders.value.document,
      name: this.formHeaders.value.name,
      lastname: this.formHeaders.value.lastname,
      address: this.formHeaders.value.address,
      email: this.formHeaders.value.email,
      cellphone: this.formHeaders.value.cellphone,
    };
    if (this.type === 'NEW') {
      this.loading = true;
      this.sSalesServ.addClient$(params).subscribe((res:any) => {
        if (res.success) {
          this.activeModal.close({close: 'ok', value: res.data});
        }
      }, () => this.loading = false, () => this.loading = false);
    }
  }
}
