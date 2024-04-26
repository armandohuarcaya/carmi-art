import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'app-dialog-confim',
  templateUrl: './dialog-confim.component.html',
  styleUrls: ['./dialog-confim.component.scss']
})
export class DialogConfimComponent implements OnInit {
  formHeaders: any = FormGroup;
  @Input() tittle:any = 'Confirmar';
  @Input() icon:any = 'flash-outline';
  @Input() colorIcon:any = 'success';
  @Input() text:any = '';
  @Input() showCloseButton: boolean = true;
  @Input() showCancelButton: boolean = true;
  @Input() showConfirmButton: boolean = true;
  @Input() confirmButtonColor: any = 'primary';
  @Input() confirmButtonText: any = 'Si';
  @Input() cancelButtonText: any = 'No';
  @Input() showInputMsg: boolean = false;
  @Input() titleInputlabelMessage: any = '';
  @Input() valueInputMessage: any = '';
  @Input() validateInputMessage: boolean = false;
  constructor(public activeModal: NbDialogRef<DialogConfimComponent>, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.fieldReactive();
  }
  private fieldReactive() {
    const controls = {
      message: [this.valueInputMessage || ''],
    };
    this.formHeaders = this.formBuilder.group(controls);

    if (this.validateInputMessage) {
      this.formHeaders.controls['message'].setValidators([Validators.required]);
      this.formHeaders.controls['message'].updateValueAndValidity();
    }

  }
  closeModal() {
    const params = {
      isConfirmed: false,
      value: {
        msg: ''
      } 
    }
    this.activeModal.close(params);
  }
  save() {
    const params = {
      isConfirmed: true,
      value: {
        msg: this.formHeaders.value.message,
      } 
    }
    this.activeModal.close(params);
  }
}
