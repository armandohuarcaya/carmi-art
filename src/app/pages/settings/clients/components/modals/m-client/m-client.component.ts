import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { ClientsService } from '../../../services/clients.service';

@Component({
  selector: 'art-m-client',
  templateUrl: './m-client.component.html',
  styleUrls: ['./m-client.component.scss']
})
export class MClientComponent implements OnInit {
  loading:boolean = false;
  @Input() item:any = '';
  @Input() type:any = 'NEW'
  formHeaders: any = FormGroup;
  constructor(public activeModal: NbDialogRef<MClientComponent>, private formBuilder: FormBuilder,
    private dialogService: NbDialogService, private ClientsServ: ClientsService) { }
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
    if (this.type === 'UPDATE') {
      this.setForms();
    }
  }
  closeModal() {
    this.activeModal.close('close');
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
      this.ClientsServ.addClients$(params).subscribe((res:any) => {
        if (res.success) {
          this.activeModal.close('ok');
        }
      }, () => this.loading = false, () => this.loading = false);
    } else {
      this.loading = true;
      this.ClientsServ.putClients$(this.item._id, params).subscribe((res:any) => {
        if (res.success) {
          this.activeModal.close('ok');
        }
      }, () => this.loading = false, () => this.loading = false);
    }
  }
  setForms() {
    this.formHeaders.patchValue(this.item);
  }
}
